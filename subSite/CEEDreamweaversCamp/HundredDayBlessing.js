/* 检测 IE */
var IEVersionn = IEVersion()
if (IEVersionn == 6 || IEVersionn == 7 || IEVersionn == 8 || IEVersionn == 9){
	alert("您的浏览器太旧啦！\无法正常显示该页面噢~")
} else if (IEVersionn == 10 || IEVersionn == 11) {
	document.getElementById("video-normal").style.display = "none";
	document.getElementById("video-fail").style.display = "block";
} else {
	
}

/* 浏览器大小适应 */
var ScreenHeight, ScreenWidth
function ChangeSize() {
	ScreenHeight = document.documentElement.clientHeight - 0.5
	ScreenWidth = document.documentElement.clientWidth
	document.getElementById("content-wrapper").style.height = ScreenHeight + "px"
//				console.log(distanceTo.style.fontSize)
}
ChangeSize()
window.onresize = ChangeSize
