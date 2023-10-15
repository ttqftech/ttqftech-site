window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded() {
	var x, y;
	var theCanvas = document.getElementById("canvas");
	var context = theCanvas.getContext("2d");
	context.strokeStyle = '#CB9A61';
	context.lineWidth = 10;
	context.strokeRect(10, 10, theCanvas.width - 20, theCanvas.height - 20);
	context.fillStyle = "#FFFFFF";
	for(x = 5; x <= canvas.width; x = x + 10) {
		context.beginPath();
		context.arc(x, 5, 5, 0, Math.PI * 2, true);
		context.arc(x, canvas.height - 5, 5, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
	}
	for(y = 5; y <= canvas.height; y = y + 10) {
		context.beginPath();
		context.arc(5, y, 5, 0, Math.PI * 2, true);
		context.arc(canvas.width - 5, y, 5, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
	}
}

const vue = new Vue({
	el: '#parent',
	data: {
		info: 'hahaha'
	}
})
