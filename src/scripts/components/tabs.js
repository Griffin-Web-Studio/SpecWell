jQuery(($)=>{
    // Tabs
    _document.on("click", ".tabs-link", function(e) {
        e.preventDefault();

        var $tabLink = $(this);
        var $tabs = $tabLink.closest(".tabs");
        var target = $tabLink.attr("href");
        // Handle tab class updates
        $tabs.find(".is-active").removeClass("is-active");
        $tabLink.addClass("is-active");
        $(target).addClass("is-active");
    });
});
jQuery(($)=>{});