// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);



function drawTreeTop() {
  const canvas = document.getElementById('canvas');
  const c = canvas.getContext('2d');

  c.beginPath();
  c.ellipse(midX, midY, canvas.width/20, canvas.height/3, 0, Math.PI/2+0.5, Math.PI/2-0.5);
  c.stroke();
  c.fillStyle = "green";
  c.fill();
  }


function drawTreeStem() {
  var c = document.getElementById("canvas");
  var c = c.getContext("2d");

  c.beginPath();
  c.lineWidth = "3";
  c.strokeStyle = "black";
  c.rect(midX-canvas.width/60, midY+canvas.height/3.45, canvas.width/30, canvas.height/3);
  c.stroke();
  c.fillStyle = "brown";
  c.fill();
  }


function drawLeftHouse() {
  var c = document.getElementById("canvas");
  var c = c.getContext("2d");

  c.beginPath();
  c.lineWidth = "1";
  c.strokeStyle = "black";
  c.rect(midX-canvas.width/2.15, midY+canvas.height/3.8, canvas.width/4, canvas.height/4.3);
  c.stroke();
  }


function drawRightHouse() {
  var c = document.getElementById("canvas");
  var c = c.getContext("2d");
 
  c.beginPath();
  c.lineWidth = "1";
  c.strokeStyle = "black";
  c.rect(midX+canvas.width/2.15-canvas.width/4, midY+canvas.height/3.8, canvas.width/4, canvas.height/4.3);
  c.stroke();
  }  


function drawLeftRoof() {
c.beginPath();
c.moveTo(midX-canvas.width/2.15, midY+canvas.height/3.8);
c.lineTo(midX-canvas.width/2.15+canvas.width/4, midY+canvas.height/3.8);
c.lineTo(midX-canvas.width/2.15+canvas.width/8, midY);
c.closePath();

c.lineWidth = 1;
c.strokeStyle = 'black';
c.stroke();
}


function drawRightRoof() {
 c.beginPath();
 c.moveTo(midX+canvas.width/2.15-canvas.width/4, midY+canvas.height/3.8);
 c.lineTo(midX+canvas.width/2.15, midY+canvas.height/3.8);
 c.lineTo(midX+canvas.width/2.15-canvas.width/8, midY);
 c.closePath();
 
 c.lineWidth = 1;
 c.strokeStyle = 'black';
 c.stroke();
 }


drawTreeTop();
drawTreeStem();
drawLeftHouse();
drawRightHouse();
drawLeftRoof();
drawRightRoof();