function Coin(x, y){
  this.d = 50;
  this.x = x || 0;
  this.y = hero.y + hero.h*0.2;
  
  this.resize = function(){
    this.y = hero.y + hero.h*0.2;
  }
  
  this.draw = function(){
    push();
    ellipseMode(CORNER);
    fill(200, 200, 0);
    noStroke();
    ellipse(this.x, this.y, this.d, this.d);
    pop();  
  }
  
  this.grabbed = function(){
    if(hero.x + hero.w >= this.x + worldX && hero.x <= this.x + this.d + worldX &&
      hero.y + hero.h >= this.y && hero.y <= this.y + this.d){
      return true;
    }
    
    return false;
  }

}