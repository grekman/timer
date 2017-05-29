$(document).ready(function() {

});

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pi = Math.PI;

var radius = 0;
var angle1 = 3*Math.PI/2;
var angle2 = 0;
var count = 0;



var runAnimation;

$('.my-reset').click(function() {
  runAnimation = true;
	ctx.clearRect(0, 0, 1200, 600);

  // setTimeout(myAnimation, 15);
	radius = 0;
	angle1 = 3*Math.PI/2;
	angle2 = 0;
	spiralArchimedean();
  // spiro();
});

$('.my-stop').click(function() {
  runAnimation = false;
  // spiro();
	spiralArchimedean();
});

$('.my-start').click(function() {
  runAnimation = true;
  // spiro();
	spiralArchimedean();
});




// function spiro() {
//   r = $('#range-r').val(); //80
//   R = $('#range-bir-r').val(); //50
//   d = $('#range-d').val(); //70
//   x = (R - r) * Math.cos(u) + d * Math.cos(u * (R - r) / r);
//   y = (R - r) * Math.sin(u) - d * Math.sin(u * (R - r) / r);
//   ctx.fillRect(2 * x + 250, 2 * y + 250, 5, 5);
//   u = u + 0.1;
// 	if (runAnimation == true){
// 		setTimeout(spiro, 30);
// 	} else return;
//   // setTimeout(spiro, 30);
// }


function spiralArchimedean() {
	ctx.beginPath();
	ctx.strokeStyle = 'green';
	ctx.lineWidth = '10';
	ctx.arc(910, 305, radius, angle1, angle2, false);
  count++;
	radius = 200;
	angle1 = angle1 + 1/30*Math.PI;
	angle2 = angle1 + 0.02*Math.PI;
	// ctx.fill();
	ctx.stroke();
	if (runAnimation == true){
		setTimeout(spiralArchimedean, 100);
	}
  if (count== 61) {
    ctx.clearRect(0, 0, 1200, 600);
    count=0;
  }

  else return;

}
spiralArchimedean();
