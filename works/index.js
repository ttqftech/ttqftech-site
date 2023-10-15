function ChangeSize() {
	var ScreenHeight = document.documentElement.clientHeight
	document.getElementById("content-wrapper").style.height = ScreenHeight + "px"
}
ChangeSize()
window.onresize = ChangeSize

var filterrparacraft = true, filterrvideo = true, filterrphotograph = true, filterrprogram = true, filterflash = true, filterpresentation = true, filterrother = true
$(".filter-content1").click(function(e){
	// window 用于使用字符串调用变量
	if (window[e.target.id]) {		// 关闭
		window[e.target.id] = false
		$("#" + e.target.id).css("background-color", "#eee").css("color", "#333")
	} else {
		window[e.target.id] = true
		$("#" + e.target.id).css("background-color", "royalblue").css("color", "white")
	}
	switch(e.target.id) {
		case "filterrparacraft": { window[e.target.id] ? $(".filtparacraft").show() : $(".filtparacraft").hide() ; break; }
		case "filterrvideo": { window[e.target.id] ? $(".filtvideo").show() : $(".filtvideo").hide() ; break; }
		case "filterrphotograph": { window[e.target.id] ? $(".filtphotograph").show() : $(".filtphotograph").hide() ; break; }
		case "filterrprogram": { window[e.target.id] ? $(".filtprogram").show() : $(".filtprogram").hide() ; break; }
		case "filterrflash": { window[e.target.id] ? $(".filtflash").show() : $(".filtflash").hide() ; break; }
		case "filterrpresentation": { window[e.target.id] ? $(".filtpresentation").show() : $(".filtpresentation").hide() ; break; }
		case "filterrother": { window[e.target.id] ? $(".filtother").show() : $(".filtother").hide() ; break; }
	}
})

var filterr2010 = true, filterr2011 = true, filterr2012 = true, filterr2013 = true, filterr2014 = true, filterr2015 = true, filterr2016 = true, filterr2017 = true, filterr2018 = true, filterr2019 = true
$(".filter-content2").click(function(e){
	// window 用于使用字符串调用变量
	if (window[e.target.id]) {		// 关闭
		window[e.target.id] = false
		$("#" + e.target.id).css("background-color", "#eee").css("color", "#333")
		$("#filt" + (e.target.id).slice(-4)).slideUp()
	} else {
		window[e.target.id] = true
		$("#" + e.target.id).css("background-color", "royalblue").css("color", "white")
		$("#filt" + (e.target.id).slice(-4)).slideDown()
	}
})

var filterrbig = true, filterrmiddle = true, filterrsmall = true
$(".filter-content3").click(function(e){
	// window 用于使用字符串调用变量
	if (window[e.target.id]) {		// 关闭
		window[e.target.id] = false
		$("#" + e.target.id).css("background-color", "#eee").css("color", "#333")
	} else {
		window[e.target.id] = true
		$("#" + e.target.id).css("background-color", "royalblue").css("color", "white")
	}
	switch(e.target.id) {
		case "filterrbig": { window[e.target.id] ? $(".filtbig").show() : $(".filtbig").hide() ; break; }
		case "filterrmiddle": { window[e.target.id] ? $(".filtmiddle").show() : $(".filtmiddle").hide() ; break; }
		case "filterrsmall": { window[e.target.id] ? $(".filtsmall").show() : $(".filtsmall").hide() ; break; }
		case "filterrchild": { window[e.target.id] ? $(".filtchild").show() : $(".filtchild").hide() ; break; }
	}	
})