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
	document.getElementById("letter").style.width = ScreenHeight * 0.5 + "px"
}
ChangeSize()
window.onresize = ChangeSize

/* 打开信件 */
$("#letter").click(startAnimation)
$("#envelope-top").click(startAnimation)			// 用于不支持 pointer-events: none 鼠标穿透的浏览器
function startAnimation() {
	$("#letter").animate({			// 往上升 0~600
		top: '15%'
	},600)
	setTimeout(function(){			// 文字消失 600~1200
		$(".openEnvelop").animate({
			opacity: '0'
		},600)
	},600)
	setTimeout(function(){			// 信封消失 500~1200
		$(".envelop").animate({
			opacity: '0'
		},700)
	},500)
	setTimeout(function(){			// 信件变形 1200~2000
		$("#video-normal").css("height", "100%")	// 初始时 video 尺寸为零，是为了兼容 Firofox video 控件捕捉到鼠标操作导致此处不执行的问题
		$("#letter").animate({
			width: ScreenWidth * 0.7 + 'px',
			height: ScreenHeight * 0.7 + 'px',
			top: ScreenHeight * 0.15 + 'px',
		},800)
		$("#letter-background").animate({
			opacity: '0'
		},800)
		$(".videos").animate({
			opacity: '1'
		},800)
	},1200)
	setTimeout(function(){			// 用于治疗 jQuery 的抽风调整父容器大会导致布局重置。虽然定时器间隔很短，但实际不占 CPU
		setInterval(function(){
			var letter = document.getElementById("letter")
			letter.style.width = ScreenWidth * 0.7 + 'px'
			letter.style.height = ScreenHeight * 0.7 + 'px'
			letter.style.top = ScreenHeight * 0.15 + 'px'
			letter.style.backgroundImage = 'none'
		}, 16.7)
	},2000)
}
