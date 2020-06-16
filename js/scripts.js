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
        console.log(win.scrollTop(), item.offset().top);
        if(win.scrollTop() >= item.offset().top){
            jQuery('.menu-item a.active').removeClass('active');
            var id = item.attr('id');

            jQuery.each(navItems, function(key, value){
                var navItem = jQuery(value);
                if(navItem.attr('href') == '#'+id) navItem.addClass('active');
            });
        }
    });
});

jQuery(document).ready(function($) {
    $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 90}, 500);
    });
});