var today = new Date();

var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
document.getElementById('datum').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + today.getFullYear();


var minutes = today.getMinutes;

document.getElementById('tijd').innerHTML = today.getHours() + ':' + today.getMinutes();


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
  document.getElementById("weer").style.width = "20%";
  document.getElementById("weer").style.top = "22%";
}
else {
document.getElementById("groet").innerHTML = "Goedeavond mensen!";
document.getElementById("icon").innerHTML = "💤";
document.body.style.backgroundImage = "url('avond_bg.jpg')";
document.getElementById("weer").src = "moon.png";
document.getElementById("weer").style.width = "100px";
document.getElementById("weer").style.left = "45%";
document.getElementById("weer").style.top = "25%";
}

var plusminut = addLeadingZero(today.getMinutes());
var plushour = addLeadingZero(today.getHours());

function addLeadingZero(number){
  if(number < 10){
      return '0' + number;
  }
  return number
}

