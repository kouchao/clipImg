define(['clipImg'], function($) {
	var qiu = document.querySelector('.qiu')
	var clip = document.querySelector('.clip')
	document.querySelector('button').addEventListener('click', function () {
		alert(JSON.stringify($.getClip()))
	});
	$.setClip({
		screenWidth: 1000,
		screenHeight: 1000,
		imgHeight:360,
		qiu: qiu,
		clip: clip,
		w: 100,
		h: 100
	})
});