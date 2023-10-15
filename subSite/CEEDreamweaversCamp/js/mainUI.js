/* 浏览器大小适应 *//*
function ChangeSize() {
	var ScreenHeight = document.documentElement.clientHeight
	document.getElementById("content-wrapper").style.height = ScreenHeight + "px"
//	console.log(ScreenHeight)
}
ChangeSize()
window.onresize = ChangeSize
*/

/* 倒计时 */
var tester = document.getElementById("tester")
var countDown_label = document.getElementById("countDown-label")
var countDown_main = document.getElementById("countDown-main")
var countDown_line = document.getElementById("countDown-line")
var countDown_clock = setInterval(function(){
	var datee = new Date()
	var dayLeft = Math.ceil((Date.parse("2018/06/07 00:00") - datee.getTime()) / 1000 / 60 / 60 / 24)
	countDown_main.innerHTML = dayLeft
	countDown_line.style.width = dayLeft * 1.7 + "px"
	if (dayLeft > 0) {
		countDown_label.innerHTML = "◆　距 离　　　　高 考　◆"
	} else {
		countDown_label.innerHTML = "◆　高 考　　　　结 束　◆"
	}
}, 1000)

/* 顶栏变色 */
var ColorIndex = 49, ColorNumber = 50, R1 = 0, R2 = 0, G1 = 0, G2 = 0, B1 = 0, B2 = 0
var topbar = document.getElementById("topbar")
var colorChanging_clock = setInterval(function(){
	var FormR = R2 * ColorIndex / ColorNumber + R1 * (ColorNumber - ColorIndex) / ColorNumber
	var FormG = G2 * ColorIndex / ColorNumber + G1 * (ColorNumber - ColorIndex) / ColorNumber
	var FormB = B2 * ColorIndex / ColorNumber + B1 * (ColorNumber - ColorIndex) / ColorNumber
	topbar.style.backgroundColor = "#" + ("0" + Math.floor(FormR).toString(16)).slice(-2) + ("0" + Math.floor(FormG).toString(16)).slice(-2) + ("0" + Math.floor(FormB).toString(16)).slice(-2)
	topbar.style.boxShadow = "0px 2px 4px " + "#" + ("0" + Math.floor(FormR * 0.5).toString(16)).slice(-2) + ("0" + Math.floor(FormG * 0.5).toString(16)).slice(-2) + ("0" + Math.floor(FormB * 0.5).toString(16)).slice(-2)
    ColorIndex = ColorIndex + 1
	if (ColorIndex == ColorNumber) {
		ColorIndex = 0
		R1 = R2
		G1 = G2
		B1 = B2
		R2 = Math.random() * 127
		G2 = Math.random() * 127
		B2 = Math.random() * 127
	}
},166)

/* 顶功能栏消现 
var topbar2 = document.getElementById("topbar2")
function showTopbar2(){
	console.log("on")
	topbar2.style.webkitAnimationPlayState = "running"
	var timer = setTimeout(function(){
		topbar2.style.webkitAnimationPlayState = "paused"
	}, 1000)
}
function hideTopbar2(){
	console.log("out")
}
*/
var hasTopbarShown = 0
$("#topbar2-wrap").mouseenter(function(){
//	console.log("mouseEnterTopbarWrap")
	$("#topbar2").stop()
	$("#topbar2").animate({
		width: '100%',
		left: '0'
	},500,function(){hasTopbarShown = 1})
})
$("#topbar2-wrap").mouseleave(function(){
//	console.log("mouseOutTopbarWrap")
	$("#topbar2").stop()
	$("#topbar2").animate({
		width: '0%',
		left: '44px'
	},500,function(){hasTopbarShown = 0})
})

/* 检查 IE 版本 */
function IEVersion() {
    var userAgent = navigator.userAgent;  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;	//判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;								//判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }   
    } else if (isEdge) {
        return 'edge';
    } else if (isIE11) {
        return 11;  
    }else{
        return -1;
    }
}