function drawScore(){
  push();
  fill(255);
  stroke(0);
  textSize(32);
  textAlign(LEFT, TOP);
  text(`Coins: ${score} / ${goal}`, 0, 0);
  pop();
}