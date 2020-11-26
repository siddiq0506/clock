


function setup() {
  createCanvas(1600,800);
  // createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background("black");  


  var hours = hour();
  var minutes = minute();
  var seconds = second();
  
  translate(width/2,height/2)
  rotate(-90)
  
  
 
 
 
 noFill();
 strokeWeight(7);
 stroke(50,255,255);
 secondsDegree = map(seconds,0,60,0,360)
 arc(0,0,500,500,0,secondsDegree);
push();
rotate(secondsDegree)
 line(0,0,170,0);
 pop();



 noFill();
 strokeWeight(7);
 stroke(255,50,255);
 minutesDegree = map(minutes,0,60,0,360)
 arc(0,0,450,450,0,minutesDegree);

 push();
rotate(minutesDegree)
 line(0,0,150,0);
 pop();

 noFill();
 strokeWeight(7);
 stroke("orange");
 hoursDegree = map(hours,0,24,0,360)
 arc(0,0,400,400,0,hoursDegree);

 push();
rotate(hoursDegree)
 line(0,0,100,0);
 pop();




  drawSprites();
}