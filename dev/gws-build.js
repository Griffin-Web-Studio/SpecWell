#!/usr/bin/env node

//var mv = require('mv')
//cp = require('cp');
const { setFlagsFromString } = require('v8'),
fs = require('fs-extra', 'cp'),
shell = require('shelljs'),
rel_path = './'
shell.cd(rel_path),
param = process.argv

if (param.includes('-h') || param.includes('--help')) {
    var exec_type = 'help'
} else if (param.includes('-t'))  {
    var exec_type = param[param.indexOf('-t') + 1]
} else if (param.includes('--type')) {
    var exec_type = param[param.indexOf('--type') + 1]
}

switch (exec_type) {
    case 'html':
        build_html_template()
        break;

    case 'help':
        build_help()
        break;

    case 'wp':
        wp()
        break;

    default:
        build_help()
        break;
}


function build_html_template() {
    shell.exec('git clone git@gitlab.griffin-studio.dev:uk-development/griffin-web-studio-simple-html-template.git --quiet')
    
    // directories to check if exists
    var git_html_template = rel_path + 'griffin-web-studio-simple-html-template/'
    var foreign_git = rel_path + 'griffin-web-studio-simple-html-template/.git/'
    
    // check if directory exists
    if (fs.existsSync(git_html_template)) {
        console.log(color_legacy('✅ All good, Cloned HTML Template Successfully', 32))
        console.log(color_legacy('Trying to remove .git folder from foreign git project\n', 36))

        //remove .git from foreign project
        fs.rmdir(foreign_git, { recursive: true }, (err) => {
            if (err) {
                throw err;
            }
        
            console.log(`${dir} is deleted!`);
        
            // check if directory exists
            if (fs.existsSync(foreign_git)) {
                console.log(color_legacy(`❌ Oops looks like you will need to get your hands a little dirty.\n❗ Extract all files from ${git_html_template} to root except .git as it will messes with this project. Than remove the folder you got the files from`, 31))
            } else {
                console.log(color_legacy('✅ All good, we are safe to move foreign files to root', 32))
                console.log(color_legacy('Moving foreign files to root', 36))
                shell.exec('mv ./griffin-web-studio-simple-html-template/{*,.[!.]*} .')
        
                // Check if any files left in the dir
                fs.readdir(git_html_template, function(err, files) {
        
                    // Check if there was an error
                    if (err) {
                        console.log(color_legacy(`❗ Unable to check if folder is now empty, assuming it is, check file integrity with project git!`, 31))
                        console.log('Here is what the error was:\n'+err)
                    } else {
        
                        // check if length of files is false (=== empty)
                        if (!files.length) {
                            var TimeOut = 0
                            console.log(color_legacy(`✅ All good, we are safe to remove foreign project root folder`, 32))
                            shell.exec(`rm -rf ${git_html_template}`)
                        } else {
                            console.log(color_legacy(`❌ WARNING! ${git_html_template} folder is not empty, this script will remove it automatically.\nYou can stop the script by pressing [ctrl + C] keys simultaniusly within the next 1 minute`, 31))
                            var TimeOut = 62000,
                            counter = TimeOut - 1000
        
                            var interval = setInterval(() => {
                                counter = counter - 1000
                                var message = color_legacy(`It will be removed in ${counter / 1000} seconds. Hit [ctrl + C] to stop the execution`, 31)
                                printProgress(message)
                            }, 1000)
                        }
        
                        // Do timeout if needed
                        setTimeout(() => {
                            clearInterval(interval)
                            console.log(color_legacy(`\n\nRemoving the foreign folder`, 33))
                            shell.exec('rm -rf ./griffin-web-studio-simple-html-template/')
                        
                            // check folder still exists
                            if (fs.existsSync(git_html_template)) {
                                console.log(color_legacy(`❌ Chief bad news, this sucker is still here "${git_html_template}"!`, 31))
                            } else {
                                console.log(color_legacy(`✅ All good, foreign project folder is now removed`, 32))
                                console.log(color_legacy(`Building new npm project using new package.json\n`, 36))
                            }
        
                            console.log(color_legacy(`Do you want to build a snowman?`, 33))
                            console.log(color_legacy(`Executing npm run init-cutup`, 32))
                            shell.exec('npm run init-cutup')
                        }, TimeOut)
                    }
                });
            }
        });
    } else {
        console.log(color_legacy('❌ FATAL ERROR!', 31))
        console.log(color_legacy('Erm, I guess no than, ok. Well it will be longer but lets get things in less automated way.', 31))
        console.log(color_legacy('1st) Copy and execute command below,', 31))
        console.log(color_legacy('     git clone git@gitlab.griffin-studio.dev:uk-development/griffin-web-studio-simple-html-template.git', 31))
        console.log(color_legacy('2nd) Move all files to root except .git as it will messes with the project', 31))
        console.log(color_legacy('3rd) Lastly remove the folder you got the files from and execute the script below', 31))
        console.log(color_legacy('     npm run init-cutup', 31))
    }
}



function wp() {
    let themes_folder           = `${rel_path}wp-content/themes/`
        plugins_folder          = `${rel_path}wp-content/plugins/`
        html_folder             = `${themes_folder}theme-html/`
        theme_folder            = `${themes_folder}gwschild/`

    prepare_folder_structure()

    function prepare_folder_structure() {

        color_print([[`PREPARING NEW FOLDER STRUCTURE FOR WP DEV`, [94]]])

        fs.mkdir(themes_folder, { recursive: true }, (err) => {

            if (err) {
                color_print([ [`|__`,[94]], [`❌ FATAL ERROR! Cannot create ${themes_folder}`,[31]] ])
                color_print([ [`     Create it manually and run this script again`,[31]] ])
                return console.error(err);
            }

            color_print([ [`|__`,[94]], [`✅ CREATED: ${themes_folder} - `,[0]], [`successfully`,[32]] ])

            fs.mkdir(plugins_folder, { recursive: true }, (err) => {

                if (err) {
                    color_print([ [`|__`,[94]], [`❌ FATAL ERROR! Cannot create ${plugins_folder}`,[31]] ])
                    color_print([ [`     Create it manually and run this script again`,[31]] ])
                    return console.error(err);
                }
    
                color_print([ [`|__`,[94]], [`✅ CREATED: ${plugins_folder} - `,[0]], [`successfully`,[32]] ])

                fs.mkdir(html_folder, { recursive: true }, (err) => {

                    if (err) {
                        color_print([ [`|__`,[94]], [`❌ FATAL ERROR! Cannot create ${html_folder}`,[31]] ])
                        color_print([ [`     Create it manually and run this script again`,[31]] ])
                        return console.error(err);
                    }
    
                    color_print([ [`|__`,[94]], [`✅ CREATED: ${html_folder} - `,[0]], [`successfully`,[32]] ])

                    clone_back_end_templates((err) => {
                        migrate_frontend_files()
                        return true
                    })
                })
            })
        })
    }

    function clone_back_end_templates(callback) {

        color_print([[`\nBEGIN CLONING BACKEND TEMPLATES`, [94]]])
    
        clone_gws_plugin(err => {

            if (err) {
                throw err
            }
        
            console.log(color_legacy(`✅ ${html_folder}  - created`, 32))
        
            clone_child_theme(err => {
                if (err) {
                    throw err
                }

                callback()
            })
        })
    }

    function migrate_frontend_files(params) {

        color_print([[`\nMIGRATE FRONTEND FILES`, [94]]])

        fs.readdir(rel_path, (err, files) => {
    
            var theme_folder_array = ['fonts', 'images', 'scripts', 'scss', 'styles']
    
            if (err) {
                console.log(color_legacy('❌ FATAL ERROR! Cannot Create plugins folder', 31))
                return console.error(err);
            }
    
            files.forEach( file => {
                if ( file.includes('.json') ) {
                    fs.copyFile( `${rel_path+file}`, `${theme_folder + file}`, function(err) {
                        if (err) {
                            throw err;
                        }
                        color_print([ ['|__', [94]], [`✅ COPIED: ${file} from ${rel_path} to ${theme_folder}`, [32]] ])
                    })
                } else if (theme_folder_array.indexOf(file) > -1) {
                    fs.move( `${rel_path+file}/`, `${theme_folder + file}/`, function(err) {
                        if (err) {
                            throw err;
                        }
                        color_print([['|__', [94]],[`✅ MOVED: ${file} from ${rel_path} to ${theme_folder}`, [32]]])
                    })
                } else if ( file.includes('.html') ) {
                    fs.rename( `${rel_path+file}`, `${html_folder + file}`, function(err) {
                        if (err) {
                            throw err;
                        }
                        color_print([['|__', [94]],[`✅ MOVED: ${file} from ${rel_path} to ${html_folder}`, [32]]])
                    })
                }
            })
        });
    }

    function clone_gws_plugin(callback) {
        git_clone('ssh://git@gitlab.griffin-studio.dev:34122/uk-development/griffin-web-studio-wordpress-plugin-template.git', 'griffin-web-studio-wordpress-plugin-template', plugins_folder, true, (err) => {
            
            if (err) {
                throw err
            }

            console.log('')

            callback()
        })
        return true
    }

    function clone_child_theme(callback) {
        git_clone('ssh://git@gitlab.griffin-studio.dev:34122/uk-development/griffin-web-studio-child-theme.git', 'griffin-web-studio-child-theme', themes_folder, true, (error) => {

            let stray_vscode_folder = `${themes_folder}.vscode/`
            
            color_print([[`➡️  MOVE: ${stray_vscode_folder} files to correct location`, [94]]])

            fs.readdir(`${stray_vscode_folder}`, (err, files) => {

                if (err) {
                    console.log(color_legacy('❌ FATAL ERROR! Cannot Create plugins folder', 31))
                    return console.error(err);
                }
            
                console.log(color_legacy(`|__✅ READ: ${stray_vscode_folder} folder successfully`, 32))

                files.forEach( (file, idx, array) => {

                    fs.move(`${stray_vscode_folder + file}`, `${rel_path}.vscode/${file}`, (err) => {
                        if (err) {
                            console.log(color_legacy(`|   |__❌ FATAL ERROR! ${stray_vscode_folder + file} cannot be moved to ${rel_path}.vscode/${file} (more details below)`, 31))
                            throw err;
                        }
    
                        console.log(color_legacy(`|   |__✅ MOVED: ${file} from ${stray_vscode_folder}/ to ${rel_path}.vscode/${file} successfully`, 32))

                        if (idx === array.length - 1){
        
                            console.log(color_legacy(`|`, 32))
                            console.log(color_legacy(`|__`, 32) + color_legacy(`🧹 CLEANING: removing ${stray_vscode_folder} dir`, 96))

                            fs.rmdir(`${stray_vscode_folder}`, { recursive: true }, (err) => {
                                if (err) {
                                    throw err;
                                }

                                console.log(color_legacy(`|__✅ REMOVED: ${stray_vscode_folder} successfully`, 32))
                                console.log(color_legacy(`|`, 32))
                                console.log(color_legacy(`|__➡️  MOVE: ${stray_vscode_folder}`, 94) + color_legacy(` Successful`, 32))
                                console.log('')

                                callback(false)
                                return true
                            })
                        }
                    })
                })
            })
        })
    }
}



function git_clone(git_url, clone_root_dir, dist, rm_git_dir = false, callback) {

    color_print([[`|__📀💿Cloning (${git_url}) to (${dist}) dir and will${(rm_git_dir == false) ? ' NOT' : ''} remove git folder from (${clone_root_dir}) dir`,[94]]])

    shell.exec(`cd ${dist} && git clone ${git_url} --quiet`, (error, stdout, stderr) => {

        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        
        color_print([[`|__`,[94]], [`✅ CLONED: ${clone_root_dir} successfully`, [32]]])

        if ( rm_git_dir == false ) {
            console.log(color_legacy(`|`, 32) + color_legacy('__❗ NOTICE! As requested, .git will not be removed', 34))
            console.log(color_legacy(`|__✅ Cloned Successfully`, 32))

            callback()
            return true
        } else if (rm_git_dir == true) {
            console.log(color_legacy(`|`, 32) + color_legacy('__❗ WARNING! As requested, .git will be removed', 33))

            fs.readdir(dist, (err, files) => {

                if (err) {
                    console.log(color_legacy('❌ FATAL ERROR! Cannot Create plugins folder', 31))
                    return console.error(err);
                }
            
                console.log(color_legacy(`|__✅ READ: ${dist} folder successfully`, 32))

                files.forEach( file => {

                    if ( clone_root_dir.includes(file) ) {

                        fs.rmdir(`${dist + '/' + file}/.git/`, { recursive: true }, (err) => {
                            if (err) {
                                throw err;
                            }
            
                            console.log(color_legacy(`|  |__✅ REMOVED: ${dist + file}/.git/ successfully`, 32))

                            fs.readdir(`${dist + file}/`, (err, subfiles) => {

                                if (err) {
                                    console.log(color_legacy(`|  |__❌ FATAL ERROR!  ${dist + file}/.git/ cannot be removed (more details below)`, 31))
                                    return console.error(err);
                                }
            
                                console.log(color_legacy(`|  |__✅ READ: ${dist + file}/ successfully`, 32))
                    
                                subfiles.forEach( (subfile, idx, array) => {
                                    fs.move(`${dist + file}/${subfile}`, `${dist + subfile}`, { overwrite: true }, (err) => {
                                        if (err){
                                            console.log(color_legacy(`|     |__❌ FATAL ERROR!  ${dist + file}/${subfile} cannot be moved to ${dist + subfile} (more details below)`, 31))
                                            throw err;
                                        }
            
                                        console.log(color_legacy(`|     |__✅ MOVED: ${subfile} from ${dist + file}/ to ${dist + subfile} successfully`, 32))

                                        if (idx === array.length - 1){
            
                                            console.log(color_legacy(`|`, 32))
                                            console.log(color_legacy(`|__`, 32) + color_legacy(`🧹 CLEANING: removing ${file} folder`, 96))

                                            fs.rmdir(`${dist + '/' + file}/`, { recursive: true }, (err) => {
                                                if (err) {
                                                    throw err;
                                                }
            
                                                console.log(color_legacy(`|__✅ REMOVED: ${dist + file}/ successfully`, 32))
                                                console.log(color_legacy(`|`, 32))
                                                console.log(color_legacy(`|__✅ Cloned Successfully`, 32))
                                                console.log('')

                                                callback(false)
                                                return true
                                            })
                                        }
                                    })
                                })
                            })
                        })
                    }
                })
            })
        }
    });
}



function build_help() {
    console.log('Usage: node gws-build.js <command>\n')
    console.log('where <command> is one of:\n\t-t, --type, -h, --help\n')
    console.log('node gws-build.js <command> -h  quick help on <command>')
    console.log('node gws-build.js -t or --type  What type of build needs to happen')
}



function printProgress(progress) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(progress);
}


function color_legacy(string, background = 0, foreground = 0) {
    // https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences
    return(`\x1b[${foreground};${background}m${string}\x1b[0m`)
}

function color_print( str_comps = [ [ "", [0] ] ] ) {

    var return_val = ''

    str_comps.forEach( (str_comp, i_index, i_array) => {

        var string  = str_comp[0],
        options = str_comp[1]

        var combined_options = ''

        options.forEach( (option, j_index, j_array) => {

            if ((j_index === j_array.length - 1) && (i_index === i_array.length - 1)) {
                combined_options = `${combined_options + option}`

                return_val = `${return_val}\x1b[${combined_options}m${string}\x1b[0m`

                console.log(return_val)
                
            } else if (j_index === j_array.length - 1){
                combined_options = `${combined_options + option}`

                return_val = `${return_val}\x1b[${combined_options}m${string}\x1b[0m`

                return
            }

            combined_options = `${combined_options + option};`
        })
    })
    
    // https://stackoverflow.com/questions/4842424/list-of-ansi-color-escape-sequences
    // https://i.stack.imgur.com/9UVnC.png

    // 0	    Reset / Normal	all attributes off
    // 1	    Bold or increased intensity	
    // 2	    Faint (decreased intensity)	Not widely supported.
    // 3	    Italic	Not widely supported. Sometimes treated as inverse.
    // 4	    Underline	
    // 5	    Slow Blink	less than 150 per minute
    // 6	    Rapid Blink	MS-DOS ANSI.SYS; 150+ per minute; not widely supported
    // 7	    [[reverse video]]	swap foreground and background colors
    // 8	    Conceal	Not widely supported.
    // 9	    Crossed-out	Characters legible, but marked for deletion. Not widely supported.
    // 10	    Primary(default) font	
    // 11–19	Alternate font	Select alternate font n-10
    // 20	    Fraktur	hardly ever supported
    // 21	    Bold off or Double Underline	Bold off not widely supported; double underline hardly ever supported.
    // 22	    Normal color or intensity	Neither bold nor faint
    // 23	    Not italic, not Fraktur	
    // 24	    Underline off	Not singly or doubly underlined
    // 25	    Blink off	
    // 27	    Inverse off	
    // 28	    Reveal	conceal off
    // 29	    Not crossed out	
    // 30–37	Set foreground color	See color table below
    // 38	    Set foreground color	Next arguments are 5;<n> or 2;<r>;<g>;<b>, see below
    // 39	    Default foreground color	implementation defined (according to standard)
    // 40–47	Set background color	See color table below
    // 48	    Set background color	Next arguments are 5;<n> or 2;<r>;<g>;<b>, see below
    // 49	    Default background color	implementation defined (according to standard)
    // 51	    Framed	
    // 52	    Encircled	
    // 53	    Overlined	
    // 54	    Not framed or encircled	
    // 55	    Not overlined	
    // 60	    ideogram underline	hardly ever supported
    // 61	    ideogram double underline	hardly ever supported
    // 62	    ideogram overline	hardly ever supported
    // 63	    ideogram double overline	hardly ever supported
    // 64	    ideogram stress marking	hardly ever supported
    // 65	    ideogram attributes off	reset the effects of all of 60-64
    // 90–97	Set bright foreground color	aixterm (not in standard)
    // 100–107	Set bright background color	aixterm (not in standard)
}