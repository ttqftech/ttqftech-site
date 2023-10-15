/* 检测 IE */
var IEVersionn = IEVersion()
if (IEVersionn == 6 || IEVersionn == 7 || IEVersionn == 8 || IEVersionn == 9){
	alert("您的浏览器太旧啦！\无法正常显示该页面噢~")
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

/* 图片放大 */
/* 为了使用缓动函数，引用 jquery.easing.1.3.js */
new_element = document.createElement("script")
new_element.setAttribute("type", "text/javascript")
new_element.setAttribute("src", "js/jquery.easing.1.3.js")
document.body.appendChild(new_element)

var allPic = document.getElementsByClassName("campusScenery")
for(var j = 0, len = allPic.length; j < len; j++) {
	allPic[j].addEventListener("click", function(){
		var picSrc = this.getAttribute("src")
		document.getElementById("picZoom").style.backgroundImage = "url(" + picSrc + ")"
		// 可以用 img 的 object-fit 属性来实现相同功能，但需要更新的 IE/Edge 支持，故不用
		$("#picZoomDiv").css("display", "block")
		$("#picZoomDiv-mask").css("display", "block")
		$("#picZoomDiv").animate({
			opacity: '1',
			top: '64px',
			right: '64px',
			bottom: '64px',
			left: '64px'
		},500,'easeOutQuad')
		$("#picZoomDiv-mask").animate({
			opacity: '1'
		},500,'easeOutQuad')
//		$(".campusScenery").animate({
//			opacity: '0'
//		},700)
	});
}
function closeZoomer() {
	$("#picZoomDiv").animate({
		opacity: '0',
		top: '20%',
		right: '20%',
		bottom: '20%',
		left: '20%'
	},400,'easeOutCubic')
	$("#picZoomDiv-mask").animate({
		opacity: '0'
	},400,'easeOutCubic')
	setTimeout(function() {
		$("#picZoomDiv").css("display", "none")
		$("#picZoomDiv-mask").css("display", "none")
	},400)
}
document.getElementById("picZoomDiv").addEventListener("click", closeZoomer)
document.getElementById("picZoomDiv-mask").addEventListener("click", closeZoomer)