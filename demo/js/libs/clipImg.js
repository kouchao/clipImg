(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define('clipImg', [], factory);
	} else {
		// Browser globals.
		factory();
	}
})(function() {

	var screenWidth;
	var screenHeight;

	var imgHeight;


	var qiu;
	var clip;

	var t = 0;
	var l = 0;



	var qiuTop = -10;
	var qiuLeft = -10;

	var w;
	var h;
	var p;


	function setClip(json){

		screenWidth = json.screenWidth;
		screenHeight = json.screenHeight;
		imgHeight = json.imgHeight;
		qiu = json.qiu;
		clip = json.clip;
		w = json.w || 50;
		h = json.h || 50;

		p = w / h

		start();

		init(w,h,t,l);
		
	}

	function getClip(){

		return {
			top: t,
			left: l,
			width: w,
			height: h
		}
		
	}








	


	function init(clipWidth,clipHeight,clipTop,clipLeft){
		clip.style.width = clipWidth + 'px';
		clip.style.height = clipHeight + 'px';

		clip.style.left = clipLeft + 'px';
		clip.style.top = clipTop + 'px';

		qiu.style.left = clipWidth + qiuLeft + clipLeft + 'px';
		qiu.style.top = clipHeight + qiuTop + clipTop + 'px';
	}

	function start() {



		qiu.addEventListener('touchstart', function (e) {
			qsX = e.changedTouches[0].clientX;
			qsY = e.changedTouches[0].clientY;
		})

		qiu.addEventListener('touchmove', function (e) {
			var x = e.changedTouches[0].clientX;
			var y = e.changedTouches[0].clientY;
			w = x - l;
			h = y - t;

				if(w - qsX > h - qsY){
					h = w / p;

					if(x < screenWidth && h + t < imgHeight){
						init(w,h,t,l);
					}


				}else {
					w = h * p;
					if( y - t < (screenWidth - l) / p  && h + t < imgHeight){
						init(w,h,t,l);
					}
				}
				
			
		})

		clip.addEventListener('touchstart', function (e) {
			csX = e.changedTouches[0].clientX - l;
			csY = e.changedTouches[0].clientY - t;
		})

		clip.addEventListener('touchmove', function (e) {
			var x = e.changedTouches[0].clientX;
			var y = e.changedTouches[0].clientY;
			if(x - csX > 0 && x - csX < screenWidth - w){
				
				if(y - csY + h < imgHeight && y - csY > 0){
					l = x - csX ;
					t = y - csY ;
					init(w,h,t,l);
				}
			}
			
		})
	}

	return {
		setClip: setClip,
		getClip: getClip

	}

});