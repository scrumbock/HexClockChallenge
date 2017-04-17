var date;
var minute; 
var second;
var millisecond;
var color;

function showTime() {
	date = new Date();
	hour = date.getHours();
	minute = date.getMinutes();
	second = date.getSeconds();
	// millisecond = date.getMilliseconds();

		if (hour <= 9) hour = "0" + hour;
		if (minute <= 9) minute = "0" + minute;
		if (second <= 9) second = "0" + second;
		// if (millisecond <= 9) millisecond = "0" + millisecond;

	color = "#" + hour + minute + second;

	document.body.style.background = color;

	document.getElementById("clockface").innerHTML = color;

	setTimeout(showTime, 1000);
}

showTime();
