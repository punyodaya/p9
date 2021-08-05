
function setup() {
  createCanvas(400,400);
}

function draw() 
{
      background("green");
    if(keyIsDown(DOWN_ARROW)){
      background(30);
    }
    if(keyIsDown(UP_ARROW)){
      background("blue");
    }
    if(keyIsDown(RIGHT_ARROW)){
      background('white')
    }
    if(keyIsDown(LEFT_ARROW)){
      background('red')
    }
}




