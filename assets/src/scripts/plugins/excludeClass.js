(function($) {
    $.fn.excludeClass = function($class = '') {
        var newThis      = $(this),
            el           = newThis[0],
            elClass      = el.className,
            elClassArray = elClass.split(' '),
            classArray   = $class.split(' '),
            matchCount   = 0;

        for (var i = 0; i < elClassArray.length; i++) {
            var part = elClassArray[i];

            if (classArray.indexOf(part) == -1) {
                el.className = el.className.replace(part, '');
            } else {
                matchCount++
            }
        }

        if (matchCount < classArray.length) {
            newThis.addClass($class)
        }

        return newThis;
    }
})(jQuery);