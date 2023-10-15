function ChangeSize() {
	var ScreenHeight = document.documentElement.clientHeight
	document.getElementById("content-wrapper").style.height = ScreenHeight + "px"
}
ChangeSize()
window.onresize = ChangeSize

var numberOfPoster = 3, currentPoster = 1, animateTime = 0
function calcPosterPos() {
	$("*").stop()
	for (var i = 1; i <= numberOfPoster; i++) {
		$("#poster-image0" + i).animate({
			left: ((currentPoster * (-1) + i) * 100) + "%"
		},animateTime)
		if (i == currentPoster) {
			$("#poster-title0" + i).animate({
				opacity: '1'
			},animateTime)
			$("#poster-description0" + i).animate({
				opacity: '1'
			},animateTime)
//			setTimeout(function(){
				$("#poster-title0" + i).show()
				$("#poster-description0" + i).show()
//			},animateTime)
		} else {
			$("#poster-title0" + i).animate({
				opacity: '0'
			},animateTime)
			$("#poster-description0" + i).animate({
				opacity: '0'
			},animateTime)
//			setTimeout(function(){
				$("#poster-title0" + i).hide()
				$("#poster-description0" + i).hide()
//			},animateTime)
		}
	}
}
calcPosterPos()
animateTime = 750

function posterAdd() {
	if (currentPoster != numberOfPoster) {	
		currentPoster++
	}
	calcPosterPos()
}
function posterMinus() {
	if (currentPoster != 1) {
		currentPoster--		
	}
	calcPosterPos()
}
