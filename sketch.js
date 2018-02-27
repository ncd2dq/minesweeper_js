let Canvas_x =800;
let Canvas_y = 800;
let Tiles = 50;
let Tile_Dimension = Canvas_x / Tiles;
let FPS = Canvas_x / 53;


function setup() {    
    createCanvas(Canvas_x, Canvas_y);
    frameRate(FPS);

}


function draw() {
    background(0, 0, 0);
    fill(255,0,0);

    // Score counter
    textSize(score_size);
    fill(0, 102, 153);
    text(score, Canvas_x / 2 - score_size, score_y_offset);

}


function mousePressed(){
    // Have access to mouseX and mouseY

}