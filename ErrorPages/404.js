/* 浏览器大小适应 */
function ChangeSize() {
	var ScreenHeight = document.documentElement.clientHeight
	document.getElementById("content-wrapper").style.height = ScreenHeight + "px"
	document.getElementById("main-bgpic").style.height = ScreenHeight + "px"
}
ChangeSize()
window.onresize = ChangeSize

//document.getElementById("main-bgpic").setAttribute("src", "bingWallpaper/2016/2016_" + Math.floor(Math.random() * 396) + ".jpg")
document.getElementById("main-bgpic").style.backgroundImage = "url(http://ttqf.tech/bingWallpaper/2016/2016_" + ("00" + Math.floor(Math.random() * 396)).slice(-3) + ".jpg)"


/*
var xhr = new XMLHttpRequest()
xhr.open('GET', 'http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', true)
xhr.send(null)

$.ajax("http://cn.bing.com/HPImageArchive.aspx", {
	data: {
		format: 'js',
		index: '0',
		n: '1'
	},
	dataType: 'jsonp',
	crossDomain: true,
	success: function(data) {
		if(data && data.resultcode == '200') {
			console.log(data.result);
		}
	}
})
*/