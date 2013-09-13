
var ww = jQuery(window).width();

jQuery(document).ready(function() {
	jQuery(".mignix li a").each(function() {
		if (jQuery(this).next().length > 0) {
			jQuery(this).addClass("parent");
		};
	})
	
	jQuery(".toggleMenu").click(function(e) {
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery(".mignix").toggle();
	});
	adjustMenu();
})

jQuery(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 852) {
		jQuery(".toggleMenu").css("display", "inline-block");
		if (!jQuery(".toggleMenu").hasClass("active")) {
			jQuery(".mignix").hide();
		} else {
			jQuery(".mignix").show();
		}
		jQuery(".mignix li").unbind('mouseenter mouseleave');
		jQuery(".mignix li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			jQuery(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 852) {
		jQuery(".toggleMenu").css("display", "none");
		jQuery(".mignix").show();
		jQuery(".mignix li").removeClass("hover");
		jQuery(".mignix li a").unbind('click');
		jQuery(".mignix li.parentList").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	jQuery(this).toggleClass('hover');
                        
//                        jQuery(".activeList").toggleClass("removeActiveSubmenu");
		});
                
                if(jQuery(".mignixSub1 li").hasClass("activeList"))
               {
                    jQuery(".activeList").parent().parent().children().addClass("activeLink");
                    jQuery(".activeList").parent().parent("li").addClass("activeList");
               }
                
                jQuery(jQuery("#activated").parent().parent("li")).addClass("activeList");
                jQuery(jQuery("#activated").parent().parent("li").children("a")).addClass("activeLink");
                
                jQuery(".activeList").hover(function()
                    {
                        jQuery(".activeList").removeClass("removeActiveSubmenu");
                    }
                );
	}
}
