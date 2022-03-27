// <<dir './src/scripts/vendor/'
// <dir './src/scripts/plugins/'
// @import './src/scripts/script'
// @import<<dir './src/scripts/components/'

function bugHere($val) {
    console.warn('============== DEBUG DOWN ==============');
    console.log($val);
    console.warn('=============== DEBUG UP ===============');
}

/**
 * Define the order at which the scripts get imported and merged together
 * @see https://github.com/joao-neves95/merger-js#use to find out how to import different types of files
 */