var prihodki = 800;
var odhodki = 600;

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

var width = c.width;
var height = c.height;

// calculate per cent

var together = prihodki + odhodki;
var prihPer = prihodki / together;
var odhPer = odhodki / together;

// calculate angle
var prihAng = prihPer * 2 * Math.PI;
var odhAng = odhPer * 2 * Math.PI;

// calculate position
var arcSize = width > height ? height : width;
var posX = width / 2;
var posY = height / 2;

// draw prih
ctx.beginPath();
ctx.fillStyle = "#00ce14";
ctx.strokeStyle = "#00ce14";
ctx.arc(posX, posY, arcSize / 2  , 0, prihAng);
ctx.lineTo(posX, posY);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#ff2020";
ctx.strokeStyle = "#ff2020";
ctx.arc(posX, posY, arcSize / 2  , prihAng, odhAng + prihAng);
ctx.lineTo(posX, posY);
ctx.fill();

ctx.stroke();
