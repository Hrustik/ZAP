jQuery(document).ready(function () {

	jQuery('.skills_progress .first').each(function () {
		jQuery(this).appear(function() {
			jQuery(this).animate({opacity:1,left:"0px"},800);
			var b = jQuery(this).find(".progress-bar").attr("data-width");
			jQuery(this).find(".progress-bar").animate({
				width: b + "%"
			}, 1300, "linear");
		});
	});
});
