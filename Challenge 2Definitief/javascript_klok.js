
var today = new Date();

var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('date').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + today.getFullYear();


var minutes = today.getMinutes;

document.getElementById('time').innerHTML = today.getHours() + ':' + today.getMinutes();


var hour = today.getHours();



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