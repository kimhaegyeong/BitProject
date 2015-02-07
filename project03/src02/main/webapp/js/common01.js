$(".transparentButton").click(function() {
	$("#mypanel").load("menu.html");
});

/* swiperight */
$(document).on("pageinit", "#demo-page", function() {
	var $page = $(this);
	$page.on("swiperight", function(e) {
		if ($page.jqmData("panel") !== "open") {
			if (e.type === "swiperight") {
				$("#mypanel").load("menu.html");
				$page.find("#mypanel").panel("open");
			}
		}
	});
});