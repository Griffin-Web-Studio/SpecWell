function create_speck_check_tool() {
        alert(
            'Welcome to Griffin Web Studio - Spec-Check Tool!\n\n'+
            'With this tool, you can check the website you are developing against the spec provided by the design team. It is straightforward to use.'
        );
        var terms_of_use_dlg = confirm(
            'Terms of Use\n\nAll Compiled Code developed for this project (spec-check tool) is the sole property of Rihards Simanovics (the author).\n'+
            'If the current user of this software wishes to acquire a full license for personal or commercial use,'+
            ' they must get in touch with the software\'s author Rihards Simanovics <rihards.s@griffin.studio>.\n\n'
        );
        if( terms_of_use_dlg == true ) {
            window.onbeforeunload = function(e) {
                return 'WAIT! are you sure you want to refresh this page (the Spec-Checker Tool)?\n\n If so all entered data will be lost and you will have to repopulate all fields again!';
            };
        } else {
            close();
        }
    var css_link = document.createElement( "link" );
        css_link.type = "text/css";
        css_link.rel = "stylesheet";
        css_link.media = "screen,print";

    if ( !window.location.href.startsWith('http://192.168') && !window.location.href.startsWith('http://localhost') ) {
        css_link.href = "https://gws-internal.griffin-studio.co.uk/spec-check/css/style.css";
    } else {
        css_link.href = "./css/style.css";
    }

    document.getElementsByTagName( "head" )[0].appendChild( css_link );
    
    const gws_spec_widget = '';
    document.body.insertAdjacentHTML('beforeend', gws_spec_widget);
    
    alert('Now that we got all the legal stuff out the way lets get started, Here let me give you the steps.');
    alert('1)  First insert the URL of the website you are currently developing in "Production Site URL", then click "Load Website Frame"\n\n');
    alert('2)  Next, insert the Image URL of the spec provided by the design team in "Spec Image URL", then click "Load Spec Image".\n'+
          '    Remember, It must be an image (.png, .jpeg, .jpg, .svg, etc.) and not the spec url such as Figma, InVision or Adobe XD.\n'+
          '    If you don\'t have one, request the design team to provide you with one.');
    alert('3)  Now decrease the "Media Width" under "Media Options" until the Image Spec and the Website Frame entirely fit within your screen (without the need for the horizontal scroll bar).\n'+
          '    If, for whatever reason, you need the screen size to be larger than what your screen can natively support, change the "Media Zoom" option.\n'+
          '    It has no limits and will resize both Spec Image and Website.\n'+
          '    Please note that there might be a bug where some elements may no longer align when they technically should. If it happens, just unload and reload the website frame.');
    alert('4)  After that adjust your Spec Image X and Y coordinates if certain elements don\'t seem to line up too well. As mentioned before, you may want to try to unload and reload the website first before attempting this fix if this happens.');
    alert('5)  Done! Feel free to explore the rest of the software as you go along.');
}
