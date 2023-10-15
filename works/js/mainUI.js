/* 顶栏自动调整 */
var currentTopbarSize = 1;
window.onscroll = function (){
	var windowPos = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||window.scrollY
	if (windowPos >= 180 && currentTopbarSize == 1) {
		$("*").stop()
		currentTopbarSize = 0;
		$("#topbar").animate({
			height: '56px'
		},500)
		$("#siteicon").animate({
			height: '40px',
			top: '8px'
		},500)
		$("#siteicon-text").animate({
			top: '48px',
			fontSize: '0px',
			height: '0px'
		},500)
		$("#topbar-site").animate({
			height: '56px'
		},500)
		$(".topbar-nav").animate({
			top: '0px',
			height: '56px'
		},500)
		$(".topbar-icon").animate({
			top: '0px',
			height: '0px'
		},500)
		$(".topbar-icon-text").animate({
			top: '20px'
		},500)
		$(".topbar-navline").animate({
			top: "0px",
			height: "56px"
		},500)
	} else if (windowPos < 180 && currentTopbarSize == 0) {
		$("*").stop()
		currentTopbarSize = 1;
		$("#topbar").animate({
			height: '120px'
		},500)
		$("#siteicon").animate({
			height: '64px',
			top: '16px'
		},500)
		$("#siteicon-text").animate({
			top: '88px',
			fontSize: '16px',
			height: '17px'
		},500)
		$("#topbar-site").animate({
			height: '120px'
		},500)
		$(".topbar-nav").animate({
			top: '26px',
			height: '86px'
		},500)
		$(".topbar-icon").animate({
			top: '16px',
			height: '32px'
		},500)
		$(".topbar-icon-text").animate({
			top: '62px'
		},500)
		$(".topbar-navline").animate({
			top: "28px",
			height: "86px"
		},500)
	}
}
