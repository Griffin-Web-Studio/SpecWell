// Author: Rihards Simanovics
// Version: 1.0
// Description: Fades the page from a given color to show the content and fades out to the given color.
// Requires: jQuery
jQuery( ($) => {
    
    /*var fader = $(document).find('#fader');
    fader.removeClass('fade-in');
    fader.addClass('fade-out');*/

    $.fn.fadeInPage = () => {
        if (!window.AnimationEvent) { return; }

        var fader = $(document).find('#fader');
        fader.addClass('fade-out');
    }
    $.fn.fadeInPage();

    $(document).on('DOMContentLoaded', () => {
        
        if (!window.AnimationEvent) { return; }

        var links = document.getElementsByTagName('a');
        
        for (var index = 0; index < links.length; index+=1) {

            if ( links[index].hostname !== window.location.hostname
                || links[index].pathname === window.location.pathname ) {
                continue;
            }

            $(links[index]).on('click', (event) => {
                $(window).bind('beforeunload', () => {
        
                    var fader = $(document).find('#fader'),
                        link = event.currentTarget;
                    
                    var listener = function() {
                        window.location = link.href;
                        fader.removeEventListener('animationend', listener);
                    };
                    $(fader).on('animationend', listener);
                    
                    fader.addClass('fade-in');
                    
                });
            });
        }
    });

    $(window).on('pageshow', function (event) {
        if (!event.persisted) {
            return;
        }
        var fader = $(document).find('#fader');
        fader.removeClass('fade-in');
    });
});
