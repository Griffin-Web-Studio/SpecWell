jQuery(($)=>{
    // accordion
    $(".accordion-title").on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var accordionGroup = $this.closest(".accordion-group");

        if (accordionGroup.hasClass("is-active")) {
            accordionGroup.removeClass("is-active");
        } else {
            accordionGroup.addClass("is-active");
        }
    });
});
jQuery(($)=>{});