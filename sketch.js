function setup() {
    createCanvas(600, 600);
    blackground("black");
  }
  
  function draw() {
    strock("blue");
    fill("red");
    
    if(mouseIspressed){
      rect(mouseX, mouseY, 20, 35);
    }
    
  }
  