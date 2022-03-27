jQuery( ($) => {

    // Initialise Quantity Button
    $.fn.quantityButtons = (e) => {
        $('<div class="quantity-nav"><button class="quantity-button quantity-up"></button><button class="quantity-button quantity-down"></button></div>').insertAfter('.quantity input');
        
        $('.main .quantity').each( (index, element) => {
            var spinner = $(element),
            input   = spinner.find('input[type="number"]'),
            btnUp   = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min     = input.attr('min'),
            max     = input.attr('max');

            //spinner.find("input").val(0);

            if (max == '') {
                max = 9999999999999
            }
      
            btnUp.click( (e) => {
                e.preventDefault();
                e.stopPropagation();

                var oldValue = parseFloat(input.val());

                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }

                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        
            btnDown.click( (e) => {
                e.preventDefault();
                e.stopPropagation();

                var oldValue = parseFloat(input.val());

                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }

                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
      
        });
    };
    $.fn.quantityButtons();



    // Initialise Quantity Button
    $.fn.radioControl = () => {
        setInterval( () => {
            var selector = $('input[type=radio]');
            _document_body.find(selector).each( (index, element) => {
                var item = $(element);
                if (item.data('styled') !== true) {
                    item.data('styled', true);
                    item.wrap('<label class="control control--radio"></label>');
                    $('<div class="control__indicator"></div>').insertAfter(item);
                }
            });
        }, 500);
    };
    $.fn.radioControl();



    // Initialise Quantity Button
    $.fn.checkboxControl = () => {
        setInterval( () => {
            var selector = $('input[type=checkbox]');
            _document_body.find(selector).each( (index, element) => {
                var item = $(element);
                if (item.data('styled') !== true) {
                    item.data('styled', true);
                    item.wrap('<label class="control control--checkbox"></label>');
                    $('<div class="control__indicator"></div>').insertAfter(item);
                }
            });
        }, 100);
    };
    $.fn.checkboxControl();



    // Initialise Quantity Button
    $.fn.selectControl = () => {
        setInterval( () => {
            var selector = $('select');
            _document_body.find(selector).each( (index, element) => {
                var item = $(element);
                if (item.data('styled') !== true) {
                    item.data('styled', true);
                    $(item).wrap('<div class="select"></div>');
                    $('<div class="select__arrow"></div>').insertAfter(item);
                }
            });
        }, 100);
    };
    $.fn.selectControl();



    // Initialise Cursor Control
    /*$.fn.cursorControl = () => {

        var cursor_active = `${(_is_touch) ? 'hide' : 'display'}`,
            movingClass = `${cursor_active} on-screen`;

        _cursor__small.excludeClass(cursor_active)
        _cursor__big.excludeClass(cursor_active)

        if (!_is_touch) {
            _cursor__small.excludeClass(movingClass)
            _cursor__big.excludeClass(movingClass)
            _cursor.css('transform',' translate('+ ($('.cursor-container').width() / 2) +'px, '+ ($('.cursor-container').height() / 2) +'px)');
        }
        
        // _window[{obj}] -> On -> Mouse Move
        _window.on('mousemove', (e) => {
            //bugHere(e);
            if (_cursor__small.data('type') == '') {
                _cursor__small.addClass(movingClass);
            }

            if (_cursor__big.data('type') == '') {
                _cursor__big.addClass(movingClass);
            }
            _cursor.css('transform',' translate('+ e.clientX +'px, '+ e.clientY +'px)');
        });
        


        // _document[Obj] -> On -> Mouse Enter
        _document.on('mouseenter', (e) => {
            if (!_is_touch) {
                //bugHere('mouse entered');
                _cursor__small.excludeClass(`${cursor_active} on-screen`)
                _cursor__big.excludeClass(`${cursor_active} on-screen`)
            }
        });
        
    
    
        // _document[Obj] -> On -> Mouse Leave
        _document_body.on('mouseout', (e) => {
            let t = e.relatedTarget;
            if (!t || t.nodeName == "HTML") {
                //bugHere('mouse left');
                _cursor__big.excludeClass()
                _cursor__small.excludeClass()
            }
        });
        
        
        
        // _text_input[Arr] -> On -> Mouse Enter
        _document_body.on('mouseenter', _text_input, function(e) {
            _cursor__small.data('type', 'text')
            _cursor__big.data('type', 'text')

            if (!_is_touch) {
                setTimeout(() => {
                    _cursor__small.addClass('text');
                    _cursor__big.excludeClass('');
                    _cursor__small.excludeClass('on-screen text');
                }, 1);
            }
        });
    
    
    
        // _text_input[Arr] -> On -> Mouse Leave
        _document_body.on('mouseleave', _text_input, function(e) {
            _cursor__small.data('type', '')
            _cursor__big.data('type', '')

            if (!_is_touch) {
                _cursor__big.excludeClass('on-screen');
                _cursor__small.excludeClass('on-screen');
            }
        });
        
        
        
        // _links[Arr] -> On -> Mouse Enter
        _document_body.on('mouseenter', _links, function(e) {
            _cursor__small.data('type', 'link')
            _cursor__big.data('type', 'link')


            if (!_is_touch) {
                setTimeout(() => {
                    _cursor__big.excludeClass();
                    _cursor__small.excludeClass('on-screen active');
                }, 1);
            }
        });



        // _links[Arr] -> On -> Mouse Leave
        _document_body.on('mouseleave', _links, function(e) {
            _cursor__small.data('type', '')
            _cursor__big.data('type', '')

            if (!_is_touch) {
                _cursor__big.excludeClass('on-screen')
                _cursor__small.excludeClass('on-screen')
            }
        });
        
        
        
        // _choice[Arr] -> On -> Mouse Enter
        _document_body.on('mouseenter', _choice, function(e) {
            _cursor__small.data('type', 'link')
            _cursor__big.data('type', 'link')
            _cursor.data('type', 'link')


            if (!_is_touch) {
                setTimeout(() => {
                    _cursor.excludeClass('active choice on-screen')
                    _cursor__big.excludeClass('active choice on-screen')
                    _cursor__small.excludeClass('active choice on-screen')
                }, 1);
            }
        });
    
    
    
        // _choice[Arr] -> On -> Mouse Leave
        _document_body.on('mouseleave', _choice, function(e) {
            _cursor__small.data('type', '')
            _cursor__big.data('type', '')
            _cursor.data('type', '')

            if (!_is_touch) {
                _cursor.excludeClass('')
                _cursor__big.excludeClass('on-screen')
                _cursor__small.excludeClass('on-screen')
            }
        });
    };
    $.fn.cursorControl();*/
});