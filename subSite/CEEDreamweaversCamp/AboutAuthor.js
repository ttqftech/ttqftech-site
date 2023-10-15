/* 检测 IE */
var IEVersionn = IEVersion()
if (IEVersionn == 6 || IEVersionn == 7 || IEVersionn == 8 || IEVersionn == 9){
	alert("您的浏览器太旧啦！\无法正常显示该页面噢~")
} else if (IEVersionn == 10 || IEVersionn == 11) {
	document.getElementById("noticebar-info").innerHTML = "您的浏览器太旧啦，不支持 ogg 格式音频噢~<br />换个别的浏览器再来欣赏这首歌吧~"
} else {
	
}

/* 浏览器大小适应 */
var ScreenHeight, ScreenWidth
function ChangeSize() {
	ScreenHeight = document.documentElement.clientHeight - 0.5
	ScreenWidth = document.documentElement.clientWidth
	document.getElementById("content-wrapper").style.height = ScreenHeight + "px"
}
ChangeSize()
window.onresize = ChangeSize

/* 播放音乐 */
var songer = document.getElementById("song") 
document.getElementById("motto").addEventListener("click", function(){
	songer.style.animationPlayState = "running"
	songer.style.webkitAnimationPlayState = "running"
	songer.style.msAnimationPlayState = "running"
	songer.style.mozAnimationPlayState = "running"
	songer.style.display = "block"
	songer.play()
})
songer.addEventListener("play", function(){
	$("#noticebar").css("display", "block")
	$("#noticebar").stop()
	$("#noticebar").animate({
		opacity: '1',
		top: '80px'
	},500)	
})
songer.addEventListener("pause", function(){
	$("#noticebar").css("display", "block")
	$("#noticebar").stop()
	$("#noticebar").animate({
		opacity: '0',
		top: '56px'
	},500)	
})