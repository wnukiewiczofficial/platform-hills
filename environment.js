function drawBackground(){
  let c1 = color(0, 150, 240);
  let c2 = color(63, 191, 191);
  
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
}

function Ground(){
  this.y = height * 0.7;
  this.pathH = height * 0.1;
  this.partsX = [0, width];
  
  this.resize = function(){
    this.y = height * 0.7;
    this.pathH = height * 0.1;
  }
  
  this.backLayerDraw = function(){
    noStroke();
    for(let i in this.partsX) {
      fill(0, 100, 0);
      rect(this.partsX[i], this.y*0.85, width, height - this.y*0.85);
      fill(255, 255, 20);
      rect(this.partsX[i], this.y - this.pathH*0.5, width, this.pathH);
    }
  }
  this.frontLayerDraw = function(){
    noStroke();
    for(let i in this.partsX) {
      fill(255, 255, 20);
      rect(this.partsX[i], ground.y * 1.05, width, ground.y * 0.05/2);
    }
  }
  this.update = function(){
    for(let i in this.partsX) {
      if(this.partsX[i] <= -width) this.partsX[i] = width;
      else if(this.partsX[i] >= width*2) this.partsX[i] = -width;
    }
  }
}

function Forest(){
  this.y = ground.y*0.95;
  this.trees = [];
  for(let i = 0; i < 100; i++){
    this.trees[i] = {
      x: i * round(random(320, 360)) - width*10,
      y: this.y*0.9 + floor(random(0, this.y*0.08)),
      h: random(height*0.1, height*0.3)
    };
  }
  
  this.resize = function(){
    this.y = ground.y*0.95;
    for(let i = 0; i < this.trees.length; i++){
      this.trees[i].y = this.y*0.9 + floor(random(0, this.y*0.08));
      this.trees[i].h = random(height*0.1, height*0.3);
    }
  }
  
  this.draw = function(){
    push();
    for(let i = 0; i < this.trees.length; i++){
      fill(50, 0, 0);
      rectMode(CORNER);
      rect(this.trees[i].x, this.trees[i].y - this.trees[i].h, this.trees[i].h*0.2, this.trees[i].h, 10);
      fill(0, 120, 0);
      rectMode(CENTER);
      rect(this.trees[i].x + this.trees[i].h*0.1, this.trees[i].y - this.trees[i].h, this.trees[i].h*0.6, this.trees[i].h*0.6, this.trees[i].h*0.2);
    }
    pop();
  }
}

function Sky(){
  this.y = 0;
  this.clouds = [];
  for(let i = 0; i < 100; i++){
    this.clouds[i] = {
      x: i * round(random(320, 360)) - width*10,
      y: this.y + floor(random(0, height*0.1)),
      d: random(height*0.1, height*0.15),
      radius: round(random(30, 60))
    };
  }
  
  this.resize = function(){
    for(let i = 0; i < this.clouds.length; i++){
      this.clouds[i].y = this.y + floor(random(0, height*0.1));
      this.clouds[i].h = random(height*0.1, height*0.15);
    }
  }
  
  this.draw = function(){
    fill(255);
    noStroke();
    for(let i = 0; i < this.clouds.length; i++){
      rect(this.clouds[i].x, this.clouds[i].y, this.clouds[i].d, this.clouds[i].d, this.clouds[i].radius);
    }
    
  }
}