
/**
 * Start clock
 */
 function initClock() {

	// init
	renderClock();

	// run every second
	setInterval(renderClock, 1000);
}

/**
 * Render clock
 */
function renderClock() {

	// get HTML elements
	var clock = document.getElementById('time');
	var date  = document.getElementById('date');

	// time logic
	var time  = getCurrentTime(new Date());
	var sep   = flashSeperator(time['seconds']);

	// display date
	date.innerHTML = time['dayMonth'] + ' ' +  getCurrentMonth(time['month'])+ ' ' + time['Year'];

	// display time
	clock.innerHTML = time['hours'] + sep +  time['minutes'];
}

/**
 * Flash seperator 
 * @param integer - seconds
 * @return string
 */
function flashSeperator(seconds) {
	var sepClass = '';

	// toggle class
	if (seconds % 2 === 1) {
		sepClass = ' class="trans"';
	}

	return '<span' + sepClass + '">:</span>';
}

/**
 * Parse the time
 * @param date object - current time 
 * @return date array
 */
function getCurrentTime(date) {
	var time = [];

	// fill array
	time['seconds'] = date.getSeconds();
	time['minutes'] = date.getMinutes(),
	time['hours']   = date.getHours();
	time['month']   = date.getMonth();
	time['day']     = date.getDay();
  time['Year']    = date.getFullYear();
  time['dayMonth']    = date.getDate();

	// hours: add leading zero
	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	// minutes: add leading zero
	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	return time;
}

/**
 * Get current Month
 * @param integer - month number
 * @return string
 */
function getCurrentMonth(monthNumber) {
	var months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

	return months[monthNumber];
}

// start
initClock();

var time  = new Date();
var hour = time.getHours();

if ( hour >= 6 && hour < 12){
	document.getElementById("groet").innerHTML = "Goedemorgen mensen!";
	document.getElementById("icon").innerHTML = "⏰";
	document.body.style.backgroundImage = "url('ochtend_bg.jpg')";
	document.getElementById("weer").src = "sun.png";

  }
  else if ( hour >= 12 && hour < 18){
	document.getElementById("groet").innerHTML = "Goedemiddag mensen!";
	document.getElementById("icon").innerHTML = "🚀";
	document.body.style.backgroundImage = "url('middag_bg.jpg')";
	document.getElementById("weer").src = "weer.png";
	document.body.style.backgroundPosition = " right center";
	//document.body.style.backgroundPositionX = " -500px";
  }
  else {
  document.getElementById("groet").innerHTML = "Goedeavond mensen!";
  document.getElementById("icon").innerHTML = "💤";
  document.body.style.backgroundImage = "url('space.jpg')";
  document.getElementById("weer").src = "moon.png";
  document.getElementById("weer").style.width = "50px";
  
  }
