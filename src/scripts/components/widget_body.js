function create_speck_check_tool() {
    if ( !window.location.href.startsWith('http://192.168') && !window.location.href.startsWith('http://localhost') ) {
        alert('The Spec-Check Tool was loaded externally. Therefore it must enqueue a CSS script to render correctly.');
        var css_link = document.createElement( "link" );
        css_link.href = ".css";
        css_link.type = "text/css";
        css_link.rel = "stylesheet";
        css_link.media = "screen,print";

        document.getElementsByTagName( "head" )[0].appendChild( css_link );
    }
    
    const gws_spec_widget =
        '<div class="gws-sc-container">'+

            '<a href="#" class="gws-sc-toggle">Spec-Check Options <span class="ico">⬆️</span></a>'+
                '<div class="gws-sc-container-inner">'+

                '<div class="gws-sc-flex justify-center gws-sc-flex-24">'+
                    '<div class="gws-sc-flex-8 gws-sc-logo">'+
                        '<a href="https://griffin.studio" class="gws-sc-logo" title="Griffin Web Studio Garage">'+
                            '<img src="https://files.gwssecureserver.co.uk/files/gws/logo.svg" alt="GWS Logo">'+
                            '| Garage |'+
                        '</a>'+
                    '</div>'+
                '</div>'+

                '<form method="get" class="gws-sc-form">'+
                    
                    '<div class="gws-sc-flex">'+
                    
                        '<div class="gws-sc-flex-24 gws-sc-flex">'+

                            '<div class="gws-sc-flex-24 gws-sc-flex">'+

                                '<div class="gws-sc-flex-24">'+
                                    '<div class="gws-sc-input-group">'+
                                
                                        '<label for="production-site" class="gws-sc-label">Production Site URL</label>'+

                                        '<div class="gws-sc-flex">'+
                                            '<input type="url" name="production-site" id="production-site" class="gws-sc-input production-site-url" placeholder="https://path.to-dev-website.tld">'+
                                            '<a class="gws-button black-button gws-load-website">Load Website Frame</a>'+
                                            '<a class="gws-button red-button gws-unload-website">Unload Website Frame</a>'+
                                        '</div>'+

                                    '</div>'+
                                '</div>'+
                                    
                                '<div class="gws-sc-flex-24">'+
                                    '<div class="gws-sc-input-group">'+

                                        '<label for="spec-img" class="gws-sc-label">Spec Image URL</label>'+

                                        '<div class="gws-sc-flex">'+
                                            '<input type="url" name="spec-img" id="spec-img" class="gws-sc-input gws-sc-img-url" placeholder="https://path.to.spec/image.png">'+
                                            '<a class="gws-button black-button load-spec-image">Load Spec Image</a>'+
                                            '<a class="gws-button red-button unload-spec-image">Unload Spec Image</a>'+
                                        '</div>'+

                                    '</div>'+
                                '</div>'+
                                    
                                '<div class="gws-sc-flex-24">'+
                                    '<div class="gws-sc-input-group">'+
                            
                                        '<label for="spec-opacity" class="gws-sc-label">Spec Image Opacity</label>'+

                                        '<div class="gws-sc-flex">'+
                                            '<div class="gws-sc-input-like">'+
                                                '<input type="range" id="spec_opacity" class="spec-opacity" name="spec-opacity" value="0.3" min="0" max="1" step="0.1">'+
                                            '</div>'+
                                            '<a class="gws-button black-button spec-opacity-decrease">-</a>'+
                                            '<a class="gws-button red-button spec-opacity-increase">+</a>'+
                                        '</div>'+

                                    '</div>'+
                                '</div>'+
                                    
                                '<div class="gws-sc-flex-24">'+
                                    '<div class="gws-sc-input-group">'+
                            
                                        '<label class="gws-sc-label">Spec Axis Adjust</label>'+

                                        '<div class="gws-sc-input-like no-padding">'+
                                            '<div class="gws-sc-flex">'+
                                            
                                                '<div class="gws-sc-flex-12">'+
                                                    '<label for="spec-x-adjust" class="gws-sc-label full">X Axis Adjust</label>'+
                                                '</div>'+
                                                
                                                '<div class="gws-sc-flex-12">'+
                                                    '<label for="spec-y-adjust" class="gws-sc-label full">Y Axis Adjust</label>'+
                                                '</div>'+
                                                
                                                '<div class="gws-sc-flex-12">'+
                                                    '<input type="number" id="spec-x-adjust" class="gws-sc-input spec-x-adjust" name="spec-x-adjust" value="0">'+
                                                '</div>'+
                                                
                                                '<div class="gws-sc-flex-12">'+
                                                    '<input type="number" id="spec-y-adjust" class="gws-sc-input spec-y-adjust" name="spec-y-adjust" value="0">'+
                                                '</div>'+

                                            '</div>'+
                                        '</div>'+

                                        '<div class="gws-sc-flex">'+
                                            
                                            '<div class="gws-sc-flex-12">'+
                                                '<div class="gws-sc-flex">'+
                                                    '<a class="gws-button black-button spec-x-adjust-decrease">-</a>'+
                                                    '<a class="gws-button red-button spec-x-adjust-increase">+</a>'+
                                                '</div>'+
                                            '</div>'+
                                            
                                            '<div class="gws-sc-flex-12">'+
                                                '<div class="gws-sc-flex">'+
                                                    '<a class="gws-button black-button spec-y-adjust-decrease">-</a>'+
                                                    '<a class="gws-button red-button spec-y-adjust-increase">+</a>'+
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+

                                    '</div>'+
                                '</div>'+

                            '</div>'+
                                    
                            '<div class="gws-sc-flex-24">'+
                                '<div class="gws-sc-input-group">'+
                        
                                    '<label for="site-width-preset" class="gws-sc-label">Media Options</label>'+

                                    '<div class="gws-sc-flex">'+
                                        '<div class="gws-sc-input-like no-padding">'+

                                            '<div class="gws-sc-flex">'+

                                                '<div class="gws-sc-flex-24">'+
                                                    '<label for="site-width-preset" class="gws-sc-label full">Media Presets</label>'+
                                                '</div>'+

                                                '<div class="gws-sc-flex-24">'+
                                                    '<select name="site-width-preset" id="site-width-preset" class="site-width-preset">'+
                                                        '<option selected disabled>Select Media Preset</option>'+
                                                        // Mobile
                                                        '<option value="320">s-mobile  320)</option>'+
                                                        '<option value="375">m-mobile  375)</option>'+
                                                        '<option value="425">l-mobile  425)</option>'+
                                                        // Tablet
                                                        '<option value="540">s-tablet  540)</option>'+
                                                        '<option value="655">m-tablet  655)</option>'+
                                                        '<option value="768">l-tablet  768)</option>'+
                                                        // Laptop
                                                        '<option value="854">s-laptop  854)</option>'+
                                                        '<option value="940">m-laptop  940)</option>'+
                                                        '<option value="1024">l-laptop  1024)</option>'+
                                                        // Desktop
                                                        '<option value="1440">s-desktop 1440)</option>'+
                                                        '<option value="1920">m-desktop 1920)</option>'+
                                                        '<option value="2560">l-desktop 2560)</option>'+
                                                    '</select>'+
                                                '</div>'+
                                            '</div>'+
                                    
                                            '<div class="gws-sc-input-like no-padding no-border">'+
                                                '<div class="gws-sc-flex">'+
                                                
                                                    '<div class="gws-sc-flex-12">'+
                                                        '<label for="spec-media-width" class="gws-sc-label full">Media Width</label>'+
                                                    '</div>'+
                                                    
                                                    '<div class="gws-sc-flex-12">'+
                                                        '<label for="spec-media-zoom" class="gws-sc-label full">Media Zoom</label>'+
                                                    '</div>'+
                                                    
                                                    '<div class="gws-sc-flex-12">'+
                                                        '<input type="number" id="spec-media-width" class="gws-sc-input spec-media-width" name="spec-media-width" value="800">'+
                                                    '</div>'+
                                                    
                                                    '<div class="gws-sc-flex-12">'+
                                                        '<input type="number" id="spec-media-zoom" class="gws-sc-input spec-media-zoom" name="spec-media-zoom" value="100">'+
                                                    '</div>'+
            
                                                '</div>'+
                                            '</div>'+
                                        '</div>'+

                                    '</div>'+

                                    '<div class="gws-sc-flex">'+
                                        
                                        '<div class="gws-sc-flex-12">'+
                                            '<div class="gws-sc-flex">'+
                                                '<a class="gws-button black-button spec-width-decrease">-</a>'+
                                                '<a class="gws-button red-button spec-width-increase">+</a>'+
                                            '</div>'+
                                        '</div>'+
                                        
                                        '<div class="gws-sc-flex-12">'+
                                            '<div class="gws-sc-flex">'+
                                                '<a class="gws-button black-button spec-zoom-decrease">-</a>'+
                                                '<a class="gws-button red-button spec-zoom-increase">+</a>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+

                                '</div>'+
                            '</div>'+  

                            '<div class="gws-sc-flex-24">'+
                                '<div class="gws-sc-input-group">'+
                        
                                    '<label for="gws-sc-client-com" class="gws-sc-label">Client <-> Host Communication</label>'+

                                    '<div class="gws-sc-flex">'+
                                        '<div class="gws-sc-input-like">'+
                        
                                            '<p class="gws-sc-client-com-note">For this spec checker to automatically correct frame height, you need to add this script anywhere before the end of the body. Do it on the page you about to spec check.</p>'+
                    
                                            '<textarea id="gws-sc-client-com" name="gws-sc-client-com" class="gws-sc-code-child">'+
                                            '&lt;script&gt;&#10;'+
                                            '    window.addEventListener(\'message\', event => {&#10;'+
                                            '        console.log(\'CLIENT: I received some message\');&#10;'+
                                            '        console.log(\'CLIENT: It originated from here: \' + event.origin);&#10;'+
                                            '&#10;'+
                                            '        if (event.origin.startsWith(\'http://192.168\') || event.origin.startsWith(\'http://localhost\') || event.origin.startsWith(\'https://gws-internal.griffin-studio.co.uk/\')) {&#10;'+
                                            '            console.log(\'CLIENT: It came from good source\');&#10;'+
                                            '&#10;'+
                                            '            if (event.data === \'can I get your height?\') {&#10;'+
                                            '                console.log(\'CLIENT: It contains hello message: \' + event.data);&#10;'+
                                            '                var i_height = document.body.offsetHeight;&#10;'+
                                            '&#10;'+
                                            '                const spec_response_data = JSON.stringify({&#10;'+
                                            '                    my_height: i_height,&#10;'+
                                            '                });&#10;'+
                                            '&#10;'+
                                            '                console.log(\'CLIENT: Sending my hight, which is: \' + i_height);&#10;'+
                                            '                console.log(\'CLIENT: Debug json: \');&#10;'+
                                            '                console.log(spec_response_data);&#10;'+
                                            '&#10;'+
                                            '                window.parent.postMessage(spec_response_data, event.origin);&#10;'+
                                            '            } else {&#10;'+
                                            '                console.log(\'CLIENT: Oi, blimey that\\\'s was SPAM!!!\\nhad to contain hello: "can I get your height?"/\\nInstead I got: \');&#10;'+
                                            '                console.log(event.data);&#10;'+
                                            '            }&#10;'+
                                            '        } else {&#10;'+
                                            '            console.log(\'CLIENT: Oi, blimey that\\\'s was SPAM!!!\\nOrigin start must match: http://192.168, http://localhost, or https://gws-internal.griffin-studio.co.uk/\\nInstead I got: \');&#10;'+
                                            '            console.log(event);&#10;'+
                                            '        }&#10;'+
                                            '&#10;'+
                                            '    });&#10;'+
                                            '&lt;/script&gt;&#10;'+
                                            '</textarea>'+

                                        '</div>'+
                                    '</div>'+

                                '</div>'+
                            '</div>'+
                            
                        '</div>'+
                        
                    '</div>'+
                    
                '</form>'+
            '</div>'+
        '</div>';
    document.body.insertAdjacentHTML('beforeend', gws_spec_widget);
}