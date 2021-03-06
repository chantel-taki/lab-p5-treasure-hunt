class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
  
  
    for (let i = 0; i <= WIDTH; i += 100) {
      strokeWeight("light grey");
      stroke(100);
      line(i, 0, i, HEIGHT);
      line(WIDTH, i, 0, i);
    
    }
  }
}

class Player{
  constructor(col, row){
    this.col = col;
    this.row = row;
  }
  moveUp(){
    if (this.row > 0) {
			this.row -= SQUARE_SIDE;
		}
   console.log(this.col, this.row);
  }
  moveDown(){
    if (this.row < HEIGHT - SQUARE_SIDE) {
			this.row += SQUARE_SIDE;
		}
   console.log(this.col, this.row);
  }
  moveLeft(){
    if (this.col > 0) {
			this.col-= SQUARE_SIDE;
		}
   console.log(this.col, this.row);
  }
  moveRight(){
    if (this.col < WIDTH - SQUARE_SIDE) {
			this.col += SQUARE_SIDE;
		}
  console.log(this.col, this.row);
  }
  drawPlayer(){
    image(img,this.col,this.row,SQUARE_SIDE,SQUARE_SIDE);
  }

}

class Treasure{
  constructor(col, row){
    this.col = col;
    this.row = row;
  }
  setRandomPosition(){
   this.row = Math.floor(Math.random() * 10) * 100;
   this.col = Math.floor(Math.random() * 10) * 100;
   this.drawTreasure();
  }
  drawTreasure(){
    image(treasure,this.col,this.row,SQUARE_SIDE,SQUARE_SIDE);
  }
}


//newPlayer.moveDown();
//newPlayer.moveDown();
//newTreasure.setRandomPosition();


