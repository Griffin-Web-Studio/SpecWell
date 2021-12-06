jQuery( ($) => {
    // Init Flickity
    $.fn.flickity_init = (element, index) => {
        // This Slideshow Object
        var slideshow = $(element),

        // Define Flickity options & initialise Flickity slideshows
        flickity_defaults = {
            cellSelector: ".slideshow-slide",
            accessibility: false,
            cellAlign: "center",
            contain: true,
            draggable: ">1",
            autoPlay: true,
            prevNextButtons: true,
            pageDots: false,
            wrapAround: true,
        };
        
        if ( $(slideshow).hasClass('carousel') ) {
            flickity_defaults.groupCells = 1;
        }

        var flickity_options = flickity_defaults, // get default flickity options
        slider_options = $(slideshow).data("flickity-options"); // get slider custom options

        // check if custom options are set and parse into default options
        if (typeof slider_options !== "undefined") {
            flickity_options = $.extend({}, flickity_defaults, slider_options);
        }

        // init flickity on this element
        var $carousel = $(slideshow).flickity(flickity_options);

        $.fn.slide_pos = ($carousel) => {
            $this_slide = $carousel.find('.slideshow-slide.is-selected');
            $all_slides = $carousel.find('.slideshow-slide');
            
            if ($this_slide.next().length === 0) {
                $this_slide.nextAll().removeClass('is-next is-previous');
                $this_slide.prevAll().removeClass('is-next is-previous');
                $this_slide.removeClass('is-next is-previous');
                $this_slide.prev().addClass('is-previous');
                $all_slides.first().addClass('is-next');
            } else if ($this_slide.prev().length === 0) {
                $this_slide.nextAll().removeClass('is-next is-previous');
                $this_slide.prevAll().removeClass('is-next is-previous');
                $this_slide.removeClass('is-next is-previous');
                $all_slides.last().addClass('is-previous');
                $this_slide.next().addClass('is-next');
            } else {
                $this_slide.nextAll().removeClass('is-next is-previous');
                $this_slide.prevAll().removeClass('is-next is-previous');
                $this_slide.removeClass('is-next is-previous');
                $this_slide.next().addClass('is-next');
                $this_slide.prev().addClass('is-previous');
            }
        }
        
        $.fn.slide_pos($carousel);

        $carousel.on('change.flickity', (event, index) => {
            $.fn.slide_pos($carousel);
        });
    };

    // Initialize Flickity for Each Slideshow on the page
    $(".slideshow").each( (index, element) => {
        $(element).flickity_init(element, index);
    });



    if ($('body').hasClass('block-editor-page')) {
        setTimeout( () => {
            console.log('Yeep, I am inside the Block Editor!');
            $(".slideshow").each( (index, element) => {
                $(element).flickity_init(element, index);
            });
        }, 2000);
    }



    $('body').on('DOMNodeInserted', '.acf-block-component', () => {
        setTimeout( () => {
            console.log('Yeep, there was a change!');
            $(".slideshow").each( (index, element) => {
                console.log('Found Slideshow!');
                $(element).flickity_init(element, index);
            });
        }, 1000);
    });
});