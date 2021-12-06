// // Define Variables here:
// var browserPrefix   = '',
//     usrAg           = navigator.userAgent,
//     header_height   = jQuery('.site-header').height(),
//     nav             = jQuery('.site-header');

// // Define Constants here
// const _window       = jQuery(window),
//     _html           = jQuery('html'),
//     _document       = jQuery(document),
//      _document_body  = jQuery(document.body);
//     //.prepend(
//     //     '<div class="cursor-container">'
//     //     +'<div id="js-cursor" class="custom-cursor">'
//     //     +cursor_content
//     //     +'</div>'
//     //     +'</div>'

//     // )
//     // _cursor         = jQuery('#js-cursor'),
//     // _cursor__big    = jQuery('#js-cursor__big'),
//     // _cursor__small  = jQuery('#js-cursor__small'),
//     // _text_input = 'pre,'+
//     //     'p, span, caption,'+
//     //     'h1, h2, h3, h4, h5, h6,'+
//     //     'th, td,'+
//     //     'textarea,'+
//     //     'input[type=tel],'+
//     //     'input[type=text],'+
//     //     'input[type=time],'+
//     //     'input[type=url],'+
//     //     'input[type=week],'+
//     //     'input[type=search],'+
//     //     'input[type=month],'+
//     //     'input[type=number],'+
//     //     'input[type=password],'+
//     //     'input[type=date],'+
//     //     'input[type=datetime-local],'+
//     //     'input[type=email]',
//     // _links = 'a,'+
//     //     'button,'+
//     //     'input[type=button],'+
//     //     'input[type=color],'+
//     //     'input[type=file],'+
//     //     'input[type=image],'+
//     //     'input[type=radio],'+
//     //     'input[type=range],'+
//     //     'input[type=reset],'+
//     //     'input[type=submit]',
//     // _choice = '.control--checkbox,'+
//     //     '.control__indicator,'+
//     //     'select,'+
//     //     'input[type=radio],'+
//     //     'input[type=checkbox],'+
//     //     'input[type=select],'+
//     //     'input[disabled]',
//     // _is_touch       = ((isTouchDevice()) ? true : false);

// jQuery( ($) => {

//     // $(".this-year").replaceWith("-" + new Date().getFullYear())

//     // $(".custom-underline").each((index, el) => {
//     //     var _underline_origin = document.querySelector('.clonable-content .underline'),
//     //         _underline_clone = _underline_origin.cloneNode(true)
//     //     el.prepend(_underline_clone)
//     // });
    
//     // $('u.custom').append(
//     //     '<div id="fader" class="fade-out">'
//     //     +'<div class="img-container">'
//     //     +`<div class="img" style="background-image: url(\'${splash_logo}\');">`
//     //     +'<div class="screen-reader-text">Page Loading</div>'
//     //     +'</div>'
//     //     +'</div>'
//     //     +'</div>'
//     // );

//     if ( usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1 ) {
//         browserPrefix = "-webkit-";
//     } else if ( usrAg.indexOf("Opera") > -1 ) {
//         browserPrefix = "-o";
//     } else if ( usrAg.indexOf("Firefox") > -1 ) {
//         browserPrefix = "-moz-";
//     } else if ( usrAg.indexOf("MSIE") > -1 ) {
//         browserPrefix = "-ms-";
//     }

//     // Hamburger
//     /*$(".hamburger").on("click", function(e) {
//         e.preventDefault();
//         var hamburger = $(this).find('.hamburger-bars');

//         /*if ($("html, body").hasClass("is-noscroll")
//             && $("html, body").hasClass("is-open-mini-cart")
//         ) {
//             // $("html, body").removeClass("is-noscroll");
//             $("html, body").removeClass("is-open-mini-cart");
//             _document.find('.cart .woocommerce-mini-cart').removeClass('open');
//         /*}

//         hamburger.toggleClass("is-active");

//         $("html, body").toggleClass("is-open-menu"); // is-noscroll 
//         $("#main-nav").toggleClass("is-open-menu");
//     });*/

//     _document.on('click', (e) => {

//         // Set Toggle Button and Container
//         var toggle          = $('.hamburger'),
//             hamburger_bars  = toggle.find('.hamburger-bars'),
//             container       = $(".main-nav");

//         if( (!container.is(e.target) && container.has(e.target).length === 0) && (!toggle.is(e.target) && toggle.has(e.target).length === 0) ) {
//             // If main-nav toggle and main-nav container are not target

//             // console.log('Main Menu Event 1');

//             $("html, body").removeClass("is-open-mini-cart");
//             _document_body.find('.cart .woocommerce-mini-cart').removeClass('open');

//             _document_body.find('.cart .woocommerce-mini-cart').removeClass('open');
//             _document_body.removeClass("is-open-menu is-open-mini-cart"); // is-noscroll
//             container.removeClass("is-open-menu");
//             hamburger_bars.removeClass("is-active");
//         } else if ( container.hasClass('is-open-menu') && (toggle.is(e.target) || toggle.has(e.target).length > 0) ) { 
//             e.preventDefault();
//             // If main-nav toggle is target and main-nav is open

//             // console.log('Main Nav Event 2');

//             _document_body.find('.cart .woocommerce-mini-cart').removeClass('open');
//             _document_body.removeClass("is-open-menu is-open-mini-cart"); // is-noscroll
//             container.removeClass("is-open-menu");
//             hamburger_bars.removeClass("is-active");
            
//         } else if ( container.is(e.target) || container.has(e.target).length > 0 ) {
//             // If click is within main-nav and is a link

//             // console.log('Main Nav Event 3');
//         } else {
//             e.preventDefault();
//             // If mini-cart toggle is target and mini-cart is closed

//             // console.log('Main Nav Event 4');

//             _document_body.addClass("is-open-menu"); // is-noscroll
//             container.addClass("is-open-menu");
//             hamburger_bars.addClass("is-active");
//         }
//     });



//     // Handle main nav dropdown menu functionality
//     $(".main-nav .menu-item-has-children > a").on("click", function(e) {
//         e.preventDefault();
//         e.stopPropagation();

//         var link = $(this),
//         listItem = link.parent(),
//         hasActiveSubMenu = link.parent().hasClass("is-active");

//         // check if this Sub Menu is active
//         if (hasActiveSubMenu) {
//             // remove classes from the current open sub-menu <li>
//             link.parent().removeClass("is-active current-open-menu");
//             // find the closest open sub-menu <li> in the parent tree and add current class to it
//             link.closest(".is-active").addClass("current-open-menu");
//         } else {
//             // remove classes from all open sub-menu <li>
//             $(".main-nav .is-active").removeClass("is-active current-open-menu");
//             // find this and all parent sub-menu <li>, add open class
//             link.parents(".menu-item-has-children").addClass("is-active");
//             // add current class to this sub-menu <li>
//             listItem.addClass("current-open-menu");
//         }
//     });



//     // Remove Navigation when clicked outside
//     _document_body.mouseup( (e) => {
//     	var container = $('.main-nav');
    
//     	if (!container.is(e.target) && container.has(e.target).length === 0) {
//             $(".main-nav .is-active").removeClass("is-active current-open-menu");
//     	}
//     });



//     // Header Animation
//     $.fn.header_anim = () => {
//         var prev = 0;
        
//         _document.scroll( () => {
//             var scrollTop = _document.scrollTop(),
//             header_height = $('.site-header').height();
//             nav.toggleClass('hide-navbar', scrollTop > prev);
//             prev = scrollTop;

//             if (scrollTop <= header_height) {
//                 nav.removeClass('hide-navbar small');
//             } else {
//                 nav.addClass('small');
//             }
//         });

//         $(window).on('resize', (e) => {
//             header_height = $('.site-header').height();
//             $(".main-nav .is-active").removeClass("is-active current-open-menu");
//         });
    
    
    
//         // On scroll
//         _document.on('scroll', (event) => {
//             $(".main-nav .is-active").removeClass("is-active current-open-menu");
//         });
//     }
//     $.fn.header_anim();



//     // accordion
//     $(".accordion-title").on('click', function(e) {
//         e.preventDefault();
//         var $this = $(this);
//         var accordionGroup = $this.closest(".accordion-group");

//         if (accordionGroup.hasClass("is-active")) {
//             accordionGroup.removeClass("is-active");
//         } else {
//             accordionGroup.addClass("is-active");
//         }
//     });



//     // Tabs
//     _document.on("click", ".tabs-link", function(e) {
//         e.preventDefault();

//         var $tabLink = $(this);
//         var $tabs = $tabLink.closest(".tabs");
//         var target = $tabLink.attr("href");
//         // Handle tab class updates
//         $tabs.find(".is-active").removeClass("is-active");
//         $tabLink.addClass("is-active");
//         $(target).addClass("is-active");
//     });
    
    
    
//     // Initialize Magnific Popup
//     $('.popup-gallery').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 			titleSrc: function(item) {
// 				return item.el.attr('title') + '<small>copyright lailii ltd</small>';
// 			}
// 		}
//     });



//     /*$('.designed-by-modal .close-overlay, .griffin-design-modal').on('click', function(event){
//         event.preventDefault();
//         event.stopPropagation();

//         modal = $(this).closest('.design').find('.designed-by-modal');

//         if (modal.hasClass('is-visible')) {
//             modal.toggleClass('is-visible');

//             setTimeout(function() {
//                 modal.toggleClass('is-active');
//             }, 300);
//         } else {
//             modal.toggleClass('is-active');

//             setTimeout(function() {
//                 modal.toggleClass('is-visible');
//             }, 300);
//         }
//     });*/



//     // Init AOS
//     AOS.init({
//         duration: 2000,
//         offset: 100,
//         mirror: true,
//         disable: 'mobile'
//     });
    

//       ///////////////////
//      // Santa Helpers //
//     ///////////////////

//     function extReplace(img, src, ext) {
//         let src_new = src.replace(/\.[^/.]+$/, '.' + ext);
//         //console.info('trying: .' + ext + '\n- old: '+ src + '\n- new: ' + src_new);
//         src = src_new;
//         img.data('try', ext).attr('src', src);
//     }

//     function onImgError(el) {
//         let img = $(el),
//             src = img.attr('src'),
//             _try = img.data('try');

//         if (_try == null) { extReplace(img, src, 'svg'); }
//         else if (_try == 'svg') { extReplace(img, src, 'png'); }
//         else if (_try == 'png') { extReplace(img, src, 'jpg'); }
//         else if (_try == 'jpg') { extReplace(img, src, 'jpeg'); }
//         else {
//             img.data('try', 'error');
//             //console.info("Dr. Watson looked so hard for that image that got lost himself...");
//             img.attr('src', 'https://via.placeholder.com/1920x1920?text=Welp,+looks+like+Richard+did+a+fuckup.+No+Image+Here+Sire!');
//             img.unbind("error");
//         }
//     }

//     $('.has-sidebars').each( function (idx, el) {
//         // Find all elements
//         let section = $(el),
//             section_inner  = section.find('.section-inner'),          // get section-inner Element
//             bar_before     = section_inner.find('.color-bar-before'), // find before bar within section-inner
//             bar_after      = section_inner.find('.color-bar-after'),  // find after  bar within section-inner
//             // >>>>>
//             inner_bg_color = section_inner.attr('data-bg-color'),    // get section-inner background-color from data-bg-color        attribute
//             bar_before_pri = bar_before.attr('data-bg-color'),       // get before-bar     bg-color color  from data-bg-color        attribute
//             bar_after_top  = bar_after.attr('data-top-color'),    // get after-bar top  gradient color  from data-top-color    attribute
//             bar_after_bot  = bar_after.attr('data-bottom-color'); // get after-bar top  gradient color  from data-bottom-color attribute
            
//         // Set background color of each element per spec
//         section_inner.css('background-color', inner_bg_color); // Set background color of section (solid color)
//         bar_before.css('background-color', bar_before_pri);    // Set background color of first bar (solid color)
//         bar_after.css('background', 'linear-gradient(to bottom, '+bar_after_top+', '+bar_after_bot+')');
//         //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Set background color of second bar (gradient)
//     });

//     $('.has-side-content').each( function (idx, el) {
//         // Find all elements
//         let section = $(el),
//             second_content  = section.find('.section-inner').find('.section-content-two'),          // get section-inner Element
//             // >>>>>
//             inner_bg_color = second_content.attr('data-bg-color');    // get section-inner background-color from data-bg-color        attribute
            
//         // Set background color of each element per spec
//         second_content.css('background-color', inner_bg_color); // Set background color of section (solid color)
//     });

//     $('img').each( function (idx, el) {
//         let $img = $(el)
//         var imageobj = new Image();
//         imageobj.src = $img.attr('src');
//         //console.info('ensuring image exists:' + imageobj.src);
    
//         if(!imageobj.complete){
//             //console.info("whoops looks like it doesn't");
//             onImgError($img);
//         }
//     })

//     // If img tag reports an error, try using different extension else show image not found placeholder
//     $('img').on('error', function() {
//         imageobj_src = $(this).attr('src');
//         //console.info('ensuring image exists:' + imageobj_src);
//         //console.info("whoops looks like it doesn't");
//         onImgError(this);
//     });



//     // Share button Attention seeker
//     setTimeout( () => {
//         $('.share-button').addClass("toggle");
//     }, 1000);
    
//     setTimeout( () => {
//         $('.share-button').removeClass("toggle");
//     }, 3000);


//     $('.next-section').on('click', function(e) {
//         e.preventDefault();
//         e.stopPropagation();

//         var this_link = $(this),
//             next_section_id = this_link.closest('header,section').next('header,section').attr('id')
        
//             document.getElementById(next_section_id).scrollIntoView({ behavior: 'smooth', block: 'center' });
//     })



//     // Share Button on Click
//     _document.on('click', (e) => {
//         var container = $('.share-button');

//         if( !container.is(e.target) && container.has(e.target).length === 0 ) {
//             container.removeClass('toggle');
//         } else {
//             container.addClass('toggle');
//         }
//     });



//     // On resize
//     $(window).on('resize', (e) => {
//         header_height = $('.site-header').height();
        
//         $('.cart-link').closest('.cart-status').removeClass('open');
//         _document.find('html,body').removeClass("is-noscroll is-open-mini-cart");
//     });



//     // On scroll
//     _document.on('scroll', (event) => {
//         $('.cart-link').closest('.cart-status').removeClass('open');
//         _document.find('html,body').removeClass("is-noscroll is-open-mini-cart");
//     });
// });



// function isTouchDevice() {
//     return (('ontouchstart' in window) ||
//     (navigator.maxTouchPoints > 0) ||
//     (navigator.msMaxTouchPoints > 0));
// }

// // devtoolsDetector.addListener(function(isOpen, detail) {
// //     if (isOpen) {
// //         window.open(window.location.href,'_blank');
// //         window.setTimeout(function(){
// //             this.close();
// //         },200)
// //     } else {
// //         alert('Closed');
// //         checker.innerText = '';
// //     }
// // });
// // devtoolsDetector.launch();

function setCookie(cname, cvalue, exdays) {

    const d = new Date();

    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

    let expires = "expires=" + d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}



function getCookie(cname) {

    let name = cname + "=";

    let child_frame_responsezCookie = decodeURIComponent(document.cookie);

    let ca = child_frame_responsezCookie.split(';');

    for (let i = 0; i < ca.length; i++) {

        let c = ca[i];

        while (c.charAt(0) == ' ') {

            c = c.substring(1);

        }

        if (c.indexOf(name) == 0) {

            return c.substring(name.length, c.length);

        }

    }

    return "";

}



function setURLSearchParam(key, value) {

    const url = new URL(window.location.href);

    url.searchParams.set(key, value);

    window.history.pushState({
        path: url.href
    }, '', url.href);

}



document.addEventListener('DOMContentLoaded', gws_frontend_validator_widget, false);



function gws_frontend_validator_widget() {

    let gws_spec_widget =
        '<div class="gws-spec-container">'+
            '<a href="#" class="gws-spec-toggle">Toggle Spec</a>'+
            '<form method="get" class="gws-spec-form">'+
                
                '<div class="gws-flex">'+
                
                    '<label for="production-site" class="gws-spec-label">Production Site URL</label>'+
                    '<input type="url" name="production-site" id="production-site" class="gws-spec-input production-site-url" placeholder="https://path.to-website.com">'+
                    
                    '<a class="gws-button gws-load-website">Load Website Frame</a>'+
                    
                    '<a class="gws-button gws-unload-website">Unload Website Frame</a>'+
                    
                '</div>'+
                
                '<div class="gws-flex">'+
                
                    '<label for="spec-img" class="gws-spec-label">Spec Image URL</label>'+
                    '<input type="url" name="spec-img" id="spec-img" class="gws-spec-input gws-spec-img-url" placeholder="https://path.to.spec/image.url">'+
                    
                    '<a class="gws-button load-spec-image">Load Spec Image</a>'+
                    
                    '<a class="gws-button unload-spec-image">Unload Spec Image</a>'+
                    
                '</div>'+
                
                '<div class="gws-flex">'+
                
                    '<label for="spec-opacity" class="gws-spec-label">Opacity</label>'+
                    '<input type="range" id="spec_opacity" class="spec-opacity" name="spec-opacity" value="0.3" min="0" max="1" step="0.1">'+
                    
                    '<label for="spec-x-adjust" class="gws-spec-label">X Axis Adjust</label>'+
                    '<input type="number" id="spec-x-adjust" class="gws-spec-input spec-x-adjust" name="spec-x-adjust" value="0">'+
                    
                    '<label for="spec-y-adjust" class="gws-spec-label">Y Axis Adjust</label>'+
                    '<input type="number" id="spec-y-adjust" class="gws-spec-input spec-y-adjust" name="spec-y-adjust" value="0">'+
                    
                '</div>'+
                
                '<div class="gws-flex">'+
                    
                    '<label for="spec-media-width" class="gws-spec-label">Media Width</label>'+
                    '<input type="number" id="spec-media-width" class="gws-spec-input spec-media-width" name="spec-media-width" value="800">'+
                    
                    '<label for="spec-media-zoom" class="gws-spec-label">Media Zoom</label>'+
                    '<input type="number" id="spec-media-zoom" class="gws-spec-input spec-media-zoom" name="spec-media-zoom" value="100">'+
                    
                '</div>'+
                
                '<div class="gws-flex">'+
                    '<div>'+
                        // Mobile
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="320">Preset s-mobile  320)</a>'+
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="375">Preset m-mobile  375)</a>'+
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="425">Preset l-mobile  425)</a>'+
                    '</div>'+

                    '<div>'+
                        // Tablet
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="540">Preset s-tablet  540)</a>'+
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="655">Preset m-tablet  655)</a>'+
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="768">Preset l-tablet  768)</a>'+
                    '</div>'+

                    '<div>'+
                        // Laptop
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="854">Preset s-laptop  854)</a>'+
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="940">Preset m-laptop  940)</a>'+
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="1024">Preset l-laptop  1024)</a>'+
                    '</div>'+

                    '<div>'+
                        // Desktop
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="1440">Preset s-desktop 1440)</a>'+
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="1920">Preset m-desktop 1920)</a>'+
                        '<a href="#" class="gws-button site-width-preset" data-width-preset="2560">Preset l-desktop 2560)</a>'+
                    '</div>'+
                    
                '</div>'+
                
                '<div class="gws-flex">'+
    
                    '<div>'+
                        
                        '<a href="#" class="gws-button gws-spec-hide-code-snippet">Hide Code Snippet</a>'+
                
                        '<p style="color: red; font-weight: bold;">For this spec checker to automatically correct frame height, you need to add this script anywhere before the end of the body. Do it on the page you about to spec check</p>'+
    
                        '<pre class="gws-spec-code-child">'+
                        '&lt;script&gt;&#10;'+
                        '    window.addEventListener(\'message\', event => {&#10;'+
                        '        if (event.origin.startsWith(\'http://192.168\') || event.origin.startsWith(\'https://gws-internal.griffin-studio.co.uk/\')) {&#10;'+
                        '            if (event.data === \'can I get your height?\') {&#10;'+
                        '&#10;'+
                        '                const spec_response_data = JSON.stringify({&#10;'+
                        '                    my_height: document.body.offsetHeight,&#10;'+
                        '                });&#10;'+
                        '                window.parent.postMessage(spec_response_data, \'*\');&#10;'+
                        '            }&#10;'+
                        '        }&#10;'+
                        '&#10;'+
                        '    });&#10;'+
                        '&lt;/script&gt;&#10;'+
                        '</pre>'+
    
                    '</div>'+
                    
                '</div>'+
                
            '</form>'+
        '</div>',
        gws_spec_image  = '<div class="gws-spec-image"><img src="" alt="Spec Image Overlay" class="image"/></div>';
    
    document.body.insertAdjacentHTML('beforeend', gws_spec_widget);

    var gws_spec_container = document.body.querySelector('.gws-spec-container'),
        gws_spec_toggle    = gws_spec_container.querySelector('.gws-spec-toggle'),
        gws_spec_form      = gws_spec_container.querySelector('.gws-spec-form'),
        //=>
        gws_spec_img_url      = gws_spec_form.querySelector('.gws-spec-img-url'),
        gws_spec_load_image   = gws_spec_form.querySelector('.load-spec-image'),
        gws_spec_unload_image = gws_spec_form.querySelector('.unload-spec-image'),
        //==>
        gws_spec_prod_site_url = gws_spec_form.querySelector('.production-site-url'),
        gws_spec_load_site     = gws_spec_form.querySelector('.gws-load-website'),
        gws_spec_unload_site   = gws_spec_form.querySelector('.gws-unload-website'),
        //===>
        gws_spec_img_o_adjust = gws_spec_form.querySelector('.spec-opacity'),
        gws_spec_img_x_adjust = gws_spec_form.querySelector('.spec-x-adjust'),
        gws_spec_img_y_adjust = gws_spec_form.querySelector('.spec-y-adjust'),
        spec_media_width      = gws_spec_form.querySelector('.spec-media-width'),
        spec_media_zoom       = gws_spec_form.querySelector('.spec-media-zoom'),
        site_width_preset     = gws_spec_form.querySelectorAll('.site-width-preset'),
        //====>
        gws_spec_code_child = gws_spec_form.querySelector('.gws-spec-code-child'),
        gws_spec_hide_code = gws_spec_form.querySelector('.gws-spec-hide-code-snippet'),
        //=====>
        gws_spec_image_wrap = document.body.querySelector('.gws-spec-image'),
        //======>
        vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    spec_media_width.value = vw;

    for (var i = 0; i < site_width_preset.length; i++) {
        site_width_preset[i].onclick = function (e) {
            e.preventDefault();
            console.log(this.dataset.widthPreset);
            spec_media_width.value = this.dataset.widthPreset;
            on_spec_option_change()
        }
    }
    gws_spec_toggle.onclick = function (e) {
        e.preventDefault();
        gws_spec_container.classList.toggle('hide');
    }
    gws_spec_load_site.onclick = function (e) {
        e.preventDefault();
        frame_site.src = gws_spec_prod_site_url.value;
        on_spec_option_change();
    }
    gws_spec_unload_site.onclick = function (e) {
        e.preventDefault();
        frame_site.src = '';
    }
    gws_spec_unload_image.onclick = function (e) {
        e.preventDefault();
        var x = document.body.querySelector('.gws-spec-image').remove();
    }
    gws_spec_hide_code.onclick = function (e) {
        e.preventDefault();
        gws_spec_code_child.classList.toggle('hide');
    }



    gws_spec_img_o_adjust.onchange = function (e) {
        on_spec_option_change()
    }
    gws_spec_img_x_adjust.onchange = function (e) {
        on_spec_option_change()
    }
    gws_spec_img_y_adjust.onchange = function (e) {
        on_spec_option_change()
    }
    spec_media_width.onchange = function (e) {
        on_spec_option_change()
    }
    spec_media_zoom.onchange = function (e) {
        on_spec_option_change()
    }

    window.onresize = function (e) {
        var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
            vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

        spec_media_width.value = vw;
    }

    function on_spec_option_change() {

        var gws_spec_image_overlay = document.body.querySelector('.gws-spec-image .image'),
            gws_spec_frame = document.body.querySelector('.website-frame');

        if (typeof (gws_spec_image_overlay) != 'undefined' && gws_spec_image_overlay !== null && gws_spec_frame.src !== null) {

            document.body.querySelector('.gws-spec-image').style["opacity"] = document.body.querySelector('.spec-opacity').value;

            document.body.querySelector('.gws-spec-image').style["transform"] = 'translate(' + gws_spec_img_x_adjust.value + 'px, ' + gws_spec_img_y_adjust.value + 'px)';

            document.body.querySelector('.website-frame-container').style["width"] = spec_media_width.value + 'px';
            document.body.querySelector('.website-frame-container').style["transform"] = 'scale(' + (spec_media_zoom.value / 100) + ')';

            document.body.querySelector('.gws-spec-image .image').style["width"] = spec_media_width.value + 'px';
            document.body.querySelector('.gws-spec-image .image').style["transform"] = 'scale(' + (spec_media_zoom.value / 100) + ')';

            console.log("transform:" + 'translate(' + gws_spec_img_x_adjust.value + 'px, ' + gws_spec_img_y_adjust.value + 'px)');

        }

    }

    if (getCookie("gws_fun_value") === 0 || getCookie("gws_fun_value") === '') {
        setCookie("gws_fun_value", 0, 1);
    }

    gws_spec_load_image.onclick = function (e) {
        
        e.preventDefault();

        if (gws_spec_img_url.value === "" && getCookie("gws_fun_value") === "0") {

            alert('Erm, need speck URL? Ok how about we add something to the input field, lets say something like "farts"');

            gws_spec_img_url.value = 'https://farts.com';



        } else if (gws_spec_img_url.value === "https://farts.com" && getCookie("gws_fun_value") === "0") {

            alert('Ok, very mature. How about you enter something a little more creative, like a link to spec?');

            gws_spec_img_url.value = '';

            setCookie("gws_fun_value", 1, 1);



        } else if (gws_spec_img_url.value === "" && getCookie("gws_fun_value") === "1") {

            alert('Please Enter, Spec URL');



        } else if (gws_spec_img_url.value !== "") {

            var gws_spec_image_overlay = document.body.querySelector('.gws-spec-image .image');



            if (typeof (gws_spec_image_overlay) != 'undefined' && gws_spec_image_overlay !== null) {

                gws_spec_image_overlay.src = gws_spec_img_url.value;

                document.body.querySelector('.gws-spec-image').style["opacity"] = document.body.querySelector('.spec-opacity').value;

            } else {

                document.body.insertAdjacentHTML('beforeend', gws_spec_image);

                var gws_spec_image_overlay = document.body.querySelector('.gws-spec-image .image');

                gws_spec_image_overlay.src = gws_spec_img_url.value;

                document.body.querySelector('.gws-spec-image').style["opacity"] = document.body.querySelector('.spec-opacity').value;

            }

        } else {
            alert('What the hec happened? This is wrong!');
        }
        on_spec_option_change()
    }
}