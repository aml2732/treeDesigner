
var points = [
  {x:170, y:120},{x:195, y: 125},{x:225, y: 128},
  {x:225, y:145}, {x: 195, y: 170}, {x: 160, y: 185},
  {x:120,y:200}, {x: 150,y:220}, {x:180,y:230},{x:210,y:235},{x:240,y:235}, {x:270,y:230},
  {x:245, y:250},{x:215, y:270},{x:185, y:290}, {x:155, y:305}, {x:125, y:315}, {x:90, y:320}
];

var ornamentPlacement = [
  {x: 190, y: 120}, {x: 250, y:160}, {x: 150,y: 190}, {x:220, y:210},
  {x:280,y:260}, {x:165, y: 250}, {x:110, y: 280}, {x:150,y:330},
  {x:225,y:290}, {x:280,y:330}
];

function base_cct(){
  if(ctx){
    //stump
    ctx.fillStyle = '#9c6129';
    ctx.beginPath();
    ctx.moveTo(220,340);
    ctx.lineTo(220,360);
    ctx.lineTo(180,360);
    ctx.lineTo(180,340);
    ctx.closePath();
    ctx.fill();

    //folliage
    ctx.fillStyle = '#228B22';
    ctx.beginPath();
    ctx.moveTo(200, 60);
    ctx.lineTo(240, 110);
    ctx.lineTo(230, 130);
    ctx.lineTo(290, 200);
    ctx.lineTo(270, 230);
    ctx.lineTo(330, 320);
    ctx.lineTo(200, 350);
    ctx.lineTo(70, 320);
    ctx.lineTo(130,230);
    ctx.lineTo(110,200);
    ctx.lineTo(170,130);
    ctx.lineTo(160,110);
    ctx.closePath();
    ctx.fill();
  }
}

function base_ht(){
  ctx.fillStyle= '#9c6129';
  ctx.beginPath();
  ctx.moveTo(220,360);
  ctx.lineTo(210,360);//
  ctx.lineTo(190,360);//
  ctx.lineTo(180,340);//
  ctx.lineTo(70,320);//
  ctx.lineTo(130,325);
  ctx.lineTo(90,310);
  ctx.lineTo(150,326);
  ctx.lineTo(180,325);
  ctx.lineTo(210,360);
  ctx.lineTo(190,250);
  ctx.lineTo(150,210);
  ctx.lineTo(130,230);//
  ctx.lineTo(150,205);
  ctx.lineTo(110, 200);//
  ctx.lineTo(150,200);
  ctx.lineTo(190,240);
  ctx.lineTo(185,200);
  ctx.lineTo(175,180);
  ctx.lineTo(170,130);//
  ctx.lineTo(160,140);
  ctx.lineTo(170,130);
  ctx.lineTo(140,110);
  ctx.lineTo(175,125);
  ctx.lineTo(180,175);
  ctx.lineTo(190,190);
  ctx.lineTo(210,165);
  ctx.lineTo(205,110);
  ctx.lineTo(190,60);
  ctx.lineTo(175,40);
  ctx.lineTo(150,50);
  ctx.lineTo(180,35);
  ctx.lineTo(200,60);//
  ctx.lineTo(230,40);
  ctx.lineTo(235,50);
  ctx.lineTo(230,45);
  ctx.lineTo(205,65);
  ctx.lineTo(215,120);
  ctx.lineTo(240,110);//
  ctx.lineTo(230,130);//
  ctx.lineTo(220,130);
  ctx.lineTo(225,165);
  ctx.lineTo(255,170);
  ctx.lineTo(290,200);//
  ctx.lineTo(275,190);
  ctx.lineTo(260,200);
  ctx.lineTo(270,190);
  ctx.lineTo(250,175);
  ctx.lineTo(220,175);
  ctx.lineTo(200,220);
  ctx.lineTo(220,330);
  ctx.lineTo(240,300);
  ctx.lineTo(270, 230);//
  ctx.lineTo(245,310);
  ctx.lineTo(330, 320);//
  ctx.lineTo(240,320);
  ctx.closePath();
  ctx.fill();
}

function drawColoredLights(){
  //draw the light wire
  ctx.strokeStyle = '#006400';
  ctx.beginPath();
  ctx.moveTo(160,110);
  ctx.quadraticCurveTo(180, 130, 230, 130);
  ctx.moveTo(110,200);
  ctx.quadraticCurveTo(180,250, 270, 230);

  ctx.moveTo(230,130);
  ctx.quadraticCurveTo(220, 180, 110,200);
  ctx.moveTo(270,230);
  ctx.quadraticCurveTo(170,320, 70, 320)
  ctx.stroke();

  let colors = ['#FF5733', '#FFFFCC', '#5DADE2', '#58D68D'];

  ctx.strokeStyle = 'transparent';
  points.forEach(function(pair, index){
    ctx.fillStyle = colors[index%4];
    ctx.beginPath();
    //ctx.moveTo(pair.x,pair.y)
    ctx.arc(pair.x,pair.y,4,0, 2*Math.PI, false);
    ctx.fill();
  });
}

function drawWhiteLights(){
  //draw the light wire
  ctx.strokeStyle = '#006400';
  ctx.beginPath();
  ctx.moveTo(160,110);
  ctx.quadraticCurveTo(180, 130, 230, 130);
  ctx.moveTo(110,200);
  ctx.quadraticCurveTo(180,250, 270, 230);

  ctx.moveTo(230,130);
  ctx.quadraticCurveTo(220, 180, 110,200);
  ctx.moveTo(270,230);
  ctx.quadraticCurveTo(170,320, 70, 320)
  ctx.stroke();

  //draw lights
  let grad = ctx.createRadialGradient(240,80,10,240,80,300);
  grad.addColorStop(0,'#FFFFCC');
  grad.addColorStop(1,'#FFFFFF');
  ctx.strokeStyle = 'transparent';
  ctx.fillStyle = grad;
  ctx.beginPath();
  points.forEach(function(pair){
    ctx.moveTo(pair.x,pair.y)
    ctx.arc(pair.x,pair.y,4,0, 2*Math.PI, false);
  });
  ctx.fill();
}

function drawBalls(){
  ctx.beginPath();
  ornamentPlacement.forEach(function(pair){
    ctx.moveTo(pair.x, pair.y);
    ctx.arc(pair.x, pair.y, 16, 0, 2*Math.PI, false);
  });
  ctx.fill();
}

function drawRedBalls(){
  ctx.fillStyle = '#FF5733';
  drawBalls();
}

function drawBlueBalls(){
  ctx.fillStyle = '#5DADE2';
  drawBalls();
}

function drawYellowBalls(){
  ctx.fillStyle = "#F7DC6F";
  drawBalls();
}

function drawAllBalls(){
  let colors = ['#FF5733','#5DADE2', '#F7DC6F'];

  ornamentPlacement.forEach(function(pair, index){
    ctx.fillStyle = colors[index%4]
    ctx.beginPath();
    ctx.moveTo(pair.x, pair.y);
    ctx.arc(pair.x, pair.y, 16, 0, 2*Math.PI, false);
    ctx.fill();
  });

}

function drawStar(){
  ctx.fillStyle = '#F7DC6F';
  ctx.beginPath();
  ctx.moveTo(200,10);//out
  ctx.lineTo(210,30);//in
  ctx.lineTo(225,30);//out
  ctx.lineTo(215,45);//in
  ctx.lineTo(225,70);//out
  ctx.lineTo(200,60);//in
  ctx.lineTo(175,70);//out
  ctx.lineTo(185,45);//in
  ctx.lineTo(175,30);//out
  ctx.lineTo(190,30);//in
  ctx.closePath();
  ctx.fill();

}


var tree_options = [
  {
    id: "garland",
    name: "Garland",
    children: [
      {
        id: "colorlights",
        name: "Colored Lights",
        state: false,
        draw: drawColoredLights
      },
      {
        id: "whitelights",
        name: "Classic Lights",
        state: false,
        draw: drawWhiteLights
      }
    ]
  },
  {
    id: "ornaments",
    name: "Ornaments",
    children: [
      {
        id: "redballs",
        name: "Red Balls",
        state: false,
        draw: drawRedBalls
      },
      {
        id: "blueballs",
        name: "Blue Balls",
        state: false,
        draw: drawBlueBalls
      },
      {
        id: "yellowballs",
        name: "Yellow Balls",
        state: false,
        draw: drawYellowBalls
      },
      {
        id: "allballs",
        name: "Multi Color Balls",
        state: false,
        draw: drawAllBalls
      }
    ]
  },
  {
    id: "top",
    name: "Top",
    children: [
      {
        id: "star",
        name: "Star",
        state: false,
        draw: drawStar
      }
    ]
  },
];
