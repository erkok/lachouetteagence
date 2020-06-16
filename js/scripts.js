var navItems = jQuery('.menu-item a');
var win = jQuery(window);
var items = jQuery('.item');

navItems.click(function(e){
    var item = jQuery(this);
    
    jQuery('.menu-item a.active').removeClass('active');
    item.addClass('active');
});

win.scroll(function(e){
    jQuery.each(items, function(key, value){
        var item = jQuery(value);
        console.log(win.scrollTop(), item.offset().top - 90);
        if(win.scrollTop() >= item.offset().top - 90){
            jQuery('.menu-item a.active').removeClass('active');
            var id = item.attr('id');

            jQuery.each(navItems, function(key, value){
                var navItem = jQuery(value);
                if(navItem.attr('href') == '#'+id) navItem.addClass('active');
            });
        }
    });
});

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 90
    }, 500);

    return false;
});
