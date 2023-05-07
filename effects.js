function canvasTint(){
  push();
  let tintLevel = map(hero.y, ground.y*0.8, height - hero.h, 0, 180);
  
  fill(0, 0, 0, tintLevel);
  noStroke();
  rect(0, 0, width, height);
  pop();
}