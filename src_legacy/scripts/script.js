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
    create_speck_check_tool();
        gws_spec_image  = '<div class="gwssc-image invert"><img src="" alt="Spec Image Overlay" class="image"/></div>';
    
    

    var gws_spec_container = document.body.querySelector('.gwssc-container'),
        gws_spec_toggle    = gws_spec_container.querySelector('.gwssc-toggle'),
        gws_spec_form      = gws_spec_container.querySelector('.gwssc-form'),
        // Spec Image URL
        gws_spec_img_url      = gws_spec_form.querySelector('.gwssc-img-url'),
        gws_spec_load_image   = gws_spec_form.querySelector('.load-spec-image'),
        gws_spec_unload_image = gws_spec_form.querySelector('.unload-spec-image'),
        // Website URL
        gws_spec_prod_site_url = gws_spec_form.querySelector('.production-site-url'),
        gws_spec_load_site     = gws_spec_form.querySelector('.gws-load-website'),
        gws_spec_unload_site   = gws_spec_form.querySelector('.gws-unload-website'),
        // Spec Image Adjustment
        gws_spec_img_o_adjust   = gws_spec_form.querySelector('.spec-opacity'),
        gws_spec_img_o_decrease = gws_spec_form.querySelector('.spec-opacity-decrease'),
        gws_spec_img_o_increase = gws_spec_form.querySelector('.spec-opacity-increase'),
        // Spec Image X Adjustment
        gws_spec_img_x_adjust   = gws_spec_form.querySelector('.spec-x-adjust'),
        gws_spec_img_x_increase = gws_spec_form.querySelector('.spec-x-adjust-increase'),
        gws_spec_img_x_decrease = gws_spec_form.querySelector('.spec-x-adjust-decrease'),
        // Spec Image Y Adjustment
        gws_spec_img_y_adjust   = gws_spec_form.querySelector('.spec-y-adjust'),
        gws_spec_img_y_increase = gws_spec_form.querySelector('.spec-y-adjust-increase'),
        gws_spec_img_y_decrease = gws_spec_form.querySelector('.spec-y-adjust-decrease'),
        // Media Width Adjust
        gws_spec_media_width          = gws_spec_form.querySelector('.spec-media-width'),
        gws_spec_media_width_increase = gws_spec_form.querySelector('.spec-width-increase'),
        gws_spec_media_width_decrease = gws_spec_form.querySelector('.spec-width-decrease'),
        // Media Zoom
        gws_spec_media_zoom          = gws_spec_form.querySelector('.spec-media-zoom'),
        gws_spec_media_zoom_increase = gws_spec_form.querySelector('.spec-zoom-increase'),
        gws_spec_media_zoom_decrease = gws_spec_form.querySelector('.spec-zoom-decrease'),
        // Spec Media Width preset
        site_width_preset     = gws_spec_form.querySelector('.site-width-preset'),
        //=====>
        gws_spec_image_wrap = document.body.querySelector('.gwssc-image'),
        //======>
        vw = Math.max(document.body.scrollWidth || 0, window.innerWidth || 0),
        vh = Math.max(document.body.scrollHeight || 0, window.innerHeight || 0),
        // Widget Global Variables
        intervalID = -1, // Global ID of Interval interval
        timeoutID  = -1; // Global ID of Timeout  interval
    gws_spec_media_width.value = vw;

    site_width_preset.onchange = function (e) {
        e.preventDefault();
        gws_spec_media_width.value = this.value;
        on_spec_option_change()
    }
    gws_spec_toggle.onclick = function (e) {
        e.preventDefault();
        gws_spec_container.classList.toggle('hide');
        gws_spec_toggle.classList.toggle('hide');
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
        var x = document.body.querySelector('.gwssc-image').remove();
    }

    // SPEC OPTIONS

    // Image Opacity Adjust
    gws_spec_img_o_adjust.onchange = function (e) {
        on_spec_option_change()
    }
    gws_spec_img_o_decrease.onclick = function (e)  {
        e.preventDefault();
        gws_spec_img_o_adjust.value -= .1;
        on_spec_option_change()
    }

    gws_spec_img_o_increase.onclick = function (e)  {
        e.preventDefault();
        gws_spec_img_o_adjust.value = Number(gws_spec_img_o_adjust.value) + .1;
        on_spec_option_change()
    }


    // Image Y Axis Adjust
    gws_spec_img_y_adjust.onchange = function (e) { on_spec_option_change() }
    gws_spec_img_y_increase.addEventListener('mousedown', function(e) {
        sticky_rapid_val_change(gws_spec_img_y_adjust, 1, () => on_spec_option_change());
    });
    gws_spec_img_y_increase.addEventListener('mouseup', (e) => stop_count_change());
    gws_spec_img_y_increase.addEventListener("mouseout", (e) => stop_count_change());
    gws_spec_img_y_decrease.addEventListener('mousedown', function(e) {
        sticky_rapid_val_change(gws_spec_img_y_adjust, -1, () => on_spec_option_change());
    });
    gws_spec_img_y_decrease.addEventListener('mouseup', (e) => stop_count_change());
    gws_spec_img_y_decrease.addEventListener("mouseout", (e) => stop_count_change());


    // Image X Axis Adjust
    gws_spec_img_x_adjust.onchange = function (e) { on_spec_option_change() }
    gws_spec_img_x_increase.addEventListener('mousedown', function(e) {
        sticky_rapid_val_change(gws_spec_img_x_adjust, 1, () => on_spec_option_change());
    });
    gws_spec_img_x_increase.addEventListener('mouseup', (e) => stop_count_change());
    gws_spec_img_x_increase.addEventListener("mouseout", (e) => stop_count_change());
    gws_spec_img_x_decrease.addEventListener('mousedown', function(e) {
        sticky_rapid_val_change(gws_spec_img_x_adjust, -1, () => on_spec_option_change());
    });
    gws_spec_img_x_decrease.addEventListener('mouseup', (e) => stop_count_change());
    gws_spec_img_x_decrease.addEventListener("mouseout", (e) => stop_count_change());


    // Media Width Adjust
    gws_spec_media_width.onchange = function (e) { on_spec_option_change() }
    gws_spec_media_width_increase.addEventListener('mousedown', function(e) {
        sticky_rapid_val_change(gws_spec_media_width, 1, () => on_spec_option_change());
    });
    gws_spec_media_width_increase.addEventListener('mouseup', (e) => stop_count_change());
    gws_spec_media_width_increase.addEventListener("mouseout", (e) => stop_count_change());
    gws_spec_media_width_decrease.addEventListener('mousedown', function(e) {
        sticky_rapid_val_change(gws_spec_media_width, -1, () => on_spec_option_change());
    });
    gws_spec_media_width_decrease.addEventListener('mouseup', (e) => stop_count_change());
    gws_spec_media_width_decrease.addEventListener("mouseout", (e) => stop_count_change());


    // Media Width Adjust
    gws_spec_media_zoom.onchange = function (e) { on_spec_option_change() }
    gws_spec_media_zoom_increase.addEventListener('mousedown', function(e) {
        sticky_rapid_val_change(gws_spec_media_zoom, 1, () => on_spec_option_change());
    });
    gws_spec_media_zoom_increase.addEventListener('mouseup', (e) => stop_count_change());
    gws_spec_media_zoom_increase.addEventListener("mouseout", (e) => stop_count_change());
    gws_spec_media_zoom_decrease.addEventListener('mousedown', function(e) {
        sticky_rapid_val_change(gws_spec_media_zoom, -1, () => on_spec_option_change());
    });
    gws_spec_media_zoom_decrease.addEventListener('mouseup', (e) => stop_count_change());
    gws_spec_media_zoom_decrease.addEventListener("mouseout", (e) => stop_count_change());



    function sticky_rapid_val_change(el, num, callback) {
        el.value = Number(el.value) + num;
        on_spec_option_change();

        if (intervalID == -1 && timeoutID == -1) {
            timeoutID = setTimeout(() => {
                intervalID = setInterval(() => {
                    el.value = Number(el.value) + num;
                    callback();
                }, 10);
            }, 500);
        }
    }

    function stop_count_change(e) {
        if ( intervalID != -1 ) {  //Only stop if exists
            clearInterval(intervalID);
            intervalID =-1;
        }
        if ( timeoutID != -1 ) {  //Only stop if exists
            clearTimeout(timeoutID);
            timeoutID =-1;
        }
    }

    window.onresize = function (e) {
        var vw = Math.max(document.body.scrollWidth || 0, window.innerWidth || 0),
            vh = Math.max(document.body.scrollHeight || 0, window.innerHeight || 0);

        gws_spec_media_width.value = vw;
    }

    function on_spec_option_change() {
        // console.log('HOST: Changing Spec');

        var gws_spec_image_overlay = document.body.querySelector('.gwssc-image .image'),
            gws_spec_frame = document.body.querySelector('.website-frame');

        if (typeof (gws_spec_image_overlay) != 'undefined' && gws_spec_image_overlay !== null && gws_spec_frame.src !== null) {

            document.body.querySelector('.gwssc-image').style["opacity"] = document.body.querySelector('.spec-opacity').value;

            document.body.querySelector('.gwssc-image .image').style["transform"] = 'translate(' + gws_spec_img_x_adjust.value + 'px, ' + gws_spec_img_y_adjust.value + 'px)';

            document.body.querySelector('.gwssc-website-frame-container').style["width"] = gws_spec_media_width.value + 'px';
            document.body.querySelector('.gwssc-website-frame-container').style["transform"] = 'scale(' + (gws_spec_media_zoom.value / 100) + ')';

            document.body.querySelector('.gwssc-image').style["width"] = gws_spec_media_width.value + 'px';
            document.body.querySelector('.gwssc-image').style["transform"] = 'scale(' + (gws_spec_media_zoom.value / 100) + ')';

            // console.log("transform:" + 'translate(' + gws_spec_img_x_adjust.value + 'px, ' + gws_spec_img_y_adjust.value + 'px)');

        } else if (
            !(typeof (gws_spec_image_overlay) != 'undefined' && gws_spec_image_overlay !== null && gws_spec_frame.src !== null)
            && (gws_spec_prod_site_url.value !== '')
            ) {
            document.body.querySelector('.gwssc-website-frame-container').style["width"] = gws_spec_media_width.value + 'px';
            document.body.querySelector('.gwssc-website-frame-container').style["transform"] = 'scale(' + (gws_spec_media_zoom.value / 100) + ')';

            document.body.querySelector('.gwssc-image .image').style["width"] = gws_spec_media_width.value + 'px';
            document.body.querySelector('.gwssc-image .image').style["transform"] = 'scale(' + (gws_spec_media_zoom.value / 100) + ')';
        } else {
            alert('You do realise that in order to make changes to the spec or client you need to first load one?');
        }

    }

    if (getCookie("gws_fun_value") === 0 || getCookie("gws_fun_value") === '') {
        setCookie("gws_fun_value", 0, 1);
    }

    gws_spec_load_image.onclick = function (e) {
        
        var vw = Math.max(document.body.scrollWidth || 0, window.innerWidth || 0),
            vh = Math.max(document.body.scrollHeight || 0, window.innerHeight || 0);

        gws_spec_media_width.value = vw;
        
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

            var gws_spec_image_overlay = document.body.querySelector('.gwssc-image .image');



            if (typeof (gws_spec_image_overlay) != 'undefined' && gws_spec_image_overlay !== null) {

                gws_spec_image_overlay.src = gws_spec_img_url.value;

                document.body.querySelector('.gwssc-image').style["opacity"] = document.body.querySelector('.spec-opacity').value;

            } else {

                document.body.insertAdjacentHTML('beforeend', gws_spec_image);

                var gws_spec_image_overlay = document.body.querySelector('.gwssc-image .image');

                gws_spec_image_overlay.src = gws_spec_img_url.value;

                document.body.querySelector('.gwssc-image').style["opacity"] = document.body.querySelector('.spec-opacity').value;

            }

        } else {
            alert('What the hec happened? This is wrong!');
        }
        on_spec_option_change()
    }


    const frame_container = document.querySelector('.gwssc-website-frame-container'),
          frame_site = document.querySelector('.website-frame'),
          iSource = 'https://files.gwssecureserver.co.uk/files/gws/logo.svg';
    var iframe_loaded = 0;
    frame_site.src = iSource;
    iframe_loaded = 1;
    frame_site.onload = function() {
        setTimeout(iResize, 50);
        setInterval(iResize, 20000);
    }
      

    function iResize() {
        // console.log('HOST: Need to resize iframe');

        if (frame_site.src !== window.location.href && frame_site.src !== iSource) {
            // console.log('HOST: Sending request to iframe with Hello\nSending to: ' + gws_spec_prod_site_url.value);
            frame_site.contentWindow.postMessage('can I get your height?', gws_spec_prod_site_url.value);
            
            window.addEventListener('message', function (e) {
                // console.log('HOST: I received some message');
                // console.log("HOST: It originated from here: " + e.origin);
                // console.log(event);

                if (gws_spec_prod_site_url.value.startsWith(e.origin)) {
                    // console.log("HOST: Origin of the message matches client");
                    // console.log("HOST: received this data: ");
                    var data = e.data;
                    // console.log(data);
    
                    // console.log("HOST: Unpacking JSON data");
                    var child_frame_response = JSON.parse(data),
                        client_height = child_frame_response.my_height;
                    
                    // console.log("HOST: Client claims their height is: " + client_height);
                    frame_container.style.height = client_height + (client_height / 5) + 'px';
                    frame_site.style.height = client_height + (client_height / 5) + 'px';
                } else {
                    // console.log('CLIENT: Oi, blimey that\'s was SPAM!!!\nExpected: ' + gws_spec_prod_site_url.value + '\ngot: ' + e.origin);
                }
            });
        }
    }
}
