$(function() {
	$(".thumbnails a").attr('rel', 'gallery').fancybox();

	$("#nav-list li.internal, #scroll_up").click(function(e) {
		e.preventDefault();
		 $('html, body').animate({
				scrollTop: $($(this).children("a").attr("href")).offset().top
		 },1500);
	 });

	  $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
 });