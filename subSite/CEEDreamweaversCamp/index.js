/* 检测 IE */
var IEVersionn = IEVersion()
if (IEVersionn == 6 || IEVersionn == 7 || IEVersionn == 8){
	alert("您的浏览器太旧啦！\无法正常显示该页面噢~")
} else {
	
}

/* 取消进场动画 */
getPageParameter = function(val) {
	var uri = window.location.search;
	var re = new RegExp("" +val+ "=([^&?]*)", "ig");
	return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):null); 
}
if (getPageParameter("noWelcomeAnimation") == "true") {
	$("#entryAnimation1").css("display", "none")
	$("#entryAnimation2").css("display", "none")
}

/* 浏览器大小适应 */
var ScreenHeight, ScreenWidth
var distanceTo = document.getElementById("distanceTo")
var timeClock = document.getElementById("timeClock")
function ChangeSize() {
	ScreenHeight = document.documentElement.clientHeight
	ScreenWidth = document.documentElement.clientWidth
	document.getElementById("content-wrapper").style.height = ScreenHeight + "px"
	distanceTo.style.fontSize = ScreenHeight * 0.035 + "px"
	distanceTo.style.lineHeight = ScreenHeight * 0.05 + "px"
	timeClock.style.fontSize = ScreenHeight * 0.035 + "px"
	timeClock.style.lineHeight = ScreenHeight * 0.05 + "px"
//				console.log(distanceTo.style.fontSize)
}
ChangeSize()
window.onresize = ChangeSize

/* 各科考试倒计时 */
var countDown_timer = setInterval(function(){
	var datee = new Date()
	distanceTo.innerHTML = "距离语文考试　：" + Math.ceil((Date.parse("2018/06/07 09:00") - new Date().getTime()) / 1000) + " 秒<br //>" + "距离数学考试　：" + Math.ceil((Date.parse("2018/06/07 15:00") - datee.getTime()) / 1000) + " 秒<br //>" + "距离文理综考试：" + Math.ceil((Date.parse("2018/06/08 09:00") - datee.getTime()) / 1000) + " 秒<br //>" + "距离英语考试　：" + Math.ceil((Date.parse("2018/06/08 15:00") - datee.getTime()) / 1000) + " 秒<br //>"
	var weekdayy
	switch(datee.getDay()){
		case 0: {weekdayy="日";break;}
		case 1: {weekdayy="一";break;}
		case 2: {weekdayy="二";break;}
		case 3: {weekdayy="三";break;}
		case 4: {weekdayy="四";break;}
		case 5: {weekdayy="五";break;}
		case 6: {weekdayy="六";break;}
	}
	timeClock.innerHTML = datee.getFullYear() + " 年 " + ("0" + (datee.getMonth()+1)).slice(-2) + " 月 " + ("0" + datee.getDate()).slice(-2) + " 日<br //>" + ("0" + datee.getHours()).slice(-2) + ":" + ("0" + datee.getMinutes()).slice(-2) + ":" + ("0" + datee.getSeconds()).slice(-2) + "<br //>" + "星期" + weekdayy
}, 1000)

/* 滑动解锁 */
var mouseDownX,mouseDownY,initX,initY,flag = false
var chalk = document.getElementById("chalk")
var entryAnimation1 = document.getElementById("entryAnimation1")
chalk.onmousedown = chalk.ontouchstart = dragStart
function dragStart(e){
    //鼠标在页面内的坐标  
    mouseDownX = e.pageX || e.touches[0].pageX
    //mouseDownY = e.pageY
    //元素在页面内的坐标
    initX = this.offsetLeft
    //initY = this.offsetTop
    flag = true
    return false
}
entryAnimation1.onmousemove = entryAnimation2.onmousemove = entryAnimation1.ontouchmove = entryAnimation2.ontouchmove = dragMove
function dragMove(e){
	if (flag) {
		e.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动 
		var toLeft = parseInt(e.pageX || e.touches[0].pageX) - parseInt(mouseDownX) + parseInt(initX)
		if (toLeft >= (ScreenWidth * 0.25 + 30) && toLeft < ScreenWidth * 0.75) {
			chalk.style.left = toLeft + "px"
		} else if (toLeft < (ScreenWidth * 0.25 + 30)) {
			chalk.style.left = (ScreenWidth * 0.25 + 30) + "px"
		} else {
			flag = false
			chalk.style.left = ScreenWidth * 0.75 + "px"
			$("#entryAnimation1").animate({
				top: '-60%'
			},1500)
			$("#entryAnimation2").animate({
				bottom: '-40%'
			},1500)
		}
	}
}
entryAnimation1.onmouseup = entryAnimation2.onmouseup = entryAnimation1.ontouchend = entryAnimation2.ontouchend = dragEnd
function dragEnd(){
    if (flag) {
    	$("#chalk").animate({
    		left: (ScreenWidth * 0.25 + 30) + "px"
    	}, 250)
    }
	flag = false	
}