// jQuery( ($) => {
//     // Mini Cart on Click
//     _document.on('click', (e) => {

//         // Set Toggle Button and Container
//         var toggle          = $('.cart-link'),
//             toggle_close    = $('.cart-link-close'),
//             container       = $(".cart .woocommerce-mini-cart"),
//             toggle_status   = container.closest('.cart-status');

//         if( (!container.is(e.target) && container.has(e.target).length === 0) && (!toggle.is(e.target) && toggle.has(e.target).length === 0) ) {
//             // If mini-cart toggle and container are not target
//             console.log('Cart Event 1');

//             toggle_status.removeClass('open');

//             /*if ($(window).width() < 767) {*/
//                 if ( _document.find('html,body').hasClass("is-noscroll") || _document.find('html,body').hasClass("is-open-mini-cart") ) {
//                     _document.find('html,body').removeClass("is-noscroll is-open-mini-cart");
//                 }
//             /*}*/
//         } else if ( toggle_status.hasClass('open')
//             && (toggle.is(e.target) || toggle.has(e.target).length > 0)
//             || (toggle_close.is(e.target) || toggle_close.has(e.target).length > 0)
//         ) { 
//             // If mini-cart toggle is target but mini-cart is open
//             console.log('Cart Event 2');
//             e.preventDefault();

//             toggle_status.removeClass('open');
//             _document.find('html,body').removeClass("is-noscroll is-open-mini-cart");

//             /*if ($(window).width() < 767) {
//                 container.css('top', header_height + 'px');
//             } else {
//                 container.css('top', '');
//             }*/
//         } else if ( (container.has(e.target).length > 0) && (!container.is(e.target) && container.has(e.target).length === 0) ) {
//             // If click is within minicart and is a link
//             console.log('Cart Event 3');
//         } else {
//             // If mini-cart toggle is target and mini-cart is closed
//             //console.log('Cart Event 4');
//             e.preventDefault();

//             toggle_status.addClass('open');

//             /*if ($(window).width() < 767) {*/
//                 _document.find('html,body').addClass("is-noscroll is-open-mini-cart");
//                 /*container.css('top', header_height + 'px');*/
//             /*} else {
//                 container.css('top', '');
//             }*/
//         }
//     });

    

//     // Show WooCommerce Shop page filters only work when "" is installed and enabled
//     $('.show-filters,.wpfFilterButton,.wpfButton').on('click', (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         $('.filter-sidebar').toggleClass('is-active');
//     });
// });