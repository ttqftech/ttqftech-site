function ChangeSize() {
	var ScreenHeight = document.documentElement.clientHeight
	document.getElementById("content-wrapper").style.height = ScreenHeight + "px"
	$(".vline2").css("width", "calc(100% - " + window.getComputedStyle(document.getElementById("platform-container")).width + ")")}
ChangeSize()
window.onresize = ChangeSize

/* 画质选择框 */
var qualityBox = 0
$("#quality-selectbox").slideUp(0)
function toggleQuality () {
	if (qualityBox == 0) {
		qualityBox = 1
		// document.getElementById("quality-selectbox").style.display = "block"
		$("#quality-selectbox").slideDown(333)
		document.getElementById("quality-selection").style.color = "#fff"
	} else {
		qualityBox = 0
		// document.getElementById("quality-selectbox").style.display = "none"
		$("#quality-selectbox").slideUp(333)
		document.getElementById("quality-selection").style.color = "#aaa"
	}
}

/* 切换画质 */
var currentQuality = "SD普清V＋"
var changingQuality = false
var currentProcess = 0
var isPaused = true
$(".quality-selector").click(function (e) {
	console.log(e.currentTarget.id)
	changingQuality = true
	document.getElementById(currentQuality).style.color = "white"
	currentProcess = document.getElementById("video").currentTime
	isPaused = document.getElementById("video").paused
	currentQuality = e.currentTarget.id
	changeQuality()
})
video.addEventListener("canplay", function () {
	if (changingQuality) {
		if (!isPaused) {
			document.getElementById("video").play()				
			document.getElementById("video").currentTime = currentProcess
		}
		changingQuality = false		
	}
})
function changeQuality() {
	document.getElementById(currentQuality).style.color = "#f91"
	if (currentQuality.indexOf("V") != "-1") {
		document.getElementById("video").setAttribute("src", currentQuality + ".webm")
	} else {
		document.getElementById("video").setAttribute("src", currentQuality + ".mp4")
	}
}
changeQuality()

/* 加载描述 */
new_element = document.createElement("iframe")
new_element.setAttribute("src", "description.txt")
new_element.setAttribute("hidden", "hidden")
document.body.appendChild(new_element)
new_element.onload = function () {
	document.getElementById("description").innerHTML = (new_element.contentWindow.document.querySelector('pre').innerHTML).replace(/\n/g, "<br />")
}

/* 加载视频平台选项 */
var platformArray = ["bilibili", "youku", "youtube", "iqiyi", "tencentVideo"]
for (var i = 0; i < 4; i++) {
	var videoFileURL = (window.location.href).substring(0, window.location.href.length - 10) + platformArray[i]
	$.ajax(videoFileURL, {
		type: 'head',
		async: false,
		timeout: 2000,
		success: function (e) {
			document.getElementById(platformArray[i]).style.display = "inline-block"
		}
	})
}
ChangeSize()

/* 加载画质选项 */
var qualityArray = ["60pFHD超清H＋", "60pFHD超清V＋", "60pFHD超清", "60pFHD高清H＋", "60pFHD高清V＋", "60pFHD高清", "FHD超清H＋", "FHD超清V＋", "FHD超清", "FHD高清H＋", "FHD高清V＋", "FHD高清", "HD普清H＋", "HD普清V＋", "HD普清", "SD普清H＋", "SD普清V＋", "SD普清"]
for (var i = 0; i < 18; i++) {
	var videoFileURL = (window.location.href).substring(0, window.location.href.length - 0) + qualityArray[i] + (qualityArray[i].indexOf("V") == -1 ? ".mp4" : ".webm")
	$.ajax(videoFileURL, {
		type: 'head',
		async: false,
		timeout: 1800,
		success: function (e) {
//			console.log(videoFileURL)
			document.getElementById(qualityArray[i]).style.display = "inline-block"
		}
	})
}

