var currentTagline = -1,
	defaultTagline = '<span id="tagline" data-in-effect="fadeInRight" data-out-effect="fadeOutLeft"></span>',
	phrases = [
		"Lawns. Landscapes. And a whole lot more.",
		"No job too big or small. We do it all.",
		"Cutting deals. Not corners.",
	];

var swapTagline = function () {
	currentTagline = (currentTagline + 1) % phrases.length;
	newTag = $(defaultTagline).text(phrases[currentTagline]);
	$("#tagline").remove();
	$("#banner-text").append(newTag);
	newTag.textillate({
		in: {
			effect: "fadeInRight",
			delayScale: 0.5,
		},
		out: {
			effect: "fadeOutLeft",
			delayScale: 0.5,
			callback: swapTagline,
		},
		loop: true,
	});
}

$(window).bind("load", function () {
	swapTagline();
});