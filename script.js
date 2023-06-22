var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 5000);

	var slidewidth = document.getElementById("slide").offsetWidth;
	var objs = document.getElementsByClassName("item");
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}
}
function passarSlide() {
	var slidewidth = document.getElementById("slide").offsetWidth;
	
	if(slideItem >= 2) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.getElementsByClassName("slide_Produto")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slide").offsetWidth;
	document.getElementsByClassName("slide_Produto")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}
