function setup(){
    createCanvas(600,400);
    background(100,100,100);
    
}

function draw(){
 line(35, 80, 400, 200);
 line(40, 90, 500, 300);
 line(-10,585,10000,-9000);
 line(-200, 215, 30050, 980);
 line(399, -.1, 91, 499990);
 
 
 stroke(255,255,255);
 fill(250,0,0);
 rect(290,100,250,250);
 stroke(255,255,255);
 fill(0,250,0);
 rect(270,100,240,240);
 stroke(255,255,255);
 fill(0,0,250);
 rect(260,100,230,230);

 stroke(0,0,0);
 strokeWeight(4);
 fill(0,0,255);
 ellipse(50,250,80,80);
 stroke(0,0,0);
 strokeWeight(4);
 fill(0,255,0);
 ellipse(80,150,90,90);
 stroke(0,0,0);
 strokeWeight(4);
 fill(255,0,0);
 ellipse(50,50,100,100);
  
}
    
   /* draw me 2 ellipses 
        draw me 2 rectangles
        draw me 4 lines (1 with a positive slope, 1 with a neg slope,)
        1 with a slope of 0, and 1 with a slope of undefined.*/