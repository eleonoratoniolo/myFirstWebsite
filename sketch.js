let r = 200;
function setup() {
  // put setup code here
  createCanvas(innerWidth, innerHeight)
  background(0)
}

function draw() {
  let x = mouseX;
  let y = mouseY;
  background(x%255, y%255, 255);
  fill(x, y, mouseX % 255);

 // if(x > width/2 && y < height/2) { rect(x - r/2, y - r/2, r, r);
  // } else {
   //  ellipse(x, y, r);  }
 

   let vertices = map(mouseX, r, width - r, 4, 10);
   let start = 0;
   
strokeWeight(x / 10)
stroke(y, x, y % 255)

   beginShape();
   for(let i = start; i < vertices; i++) {
     let angle = map(i, start, vertices, 0, TWO_PI);
     let posX = r * cos(angle) + x;
     let posY = r * sin(angle) + y;
   vertex(posX, posY);

}

endShape();


}

//background(x%255, y%255, random(255));

 // if(x < width/2) { ellipse(x,y, r, r)
  
 // random (255) = random numbers between 0 and 255
   // ellipse( x, y, 100, 100);
  // put drawing code here
 // 100 % 30 = 10
 // 10 % 3 = 3
 // 10 % 2 = 0



  function windowResized(){
    resizedCanvas(innerWidth, innerHeight)
}