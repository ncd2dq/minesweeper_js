let Canvas_x = 801;
let Canvas_y = 801;
let Tiles = 20;
let Tile_Dimension = 40;
let cells = new Array(Tiles);
let cell_unrevealed_color = (245, 245, 245);
let cell_revealed_color = (200, 200, 200);

function setup() {    
    createCanvas(Canvas_x, Canvas_y);
    
    // Create a 2D array with dimension Tiles x Tiles
    for (i = 0; i < Tiles; i++){
        cells[i] = new Array(Tiles);
    }
    
    // Fill the 2D array with cells
    for (i = 0; i < Tiles; i++){
        for (j = 0; j < Tiles; j++){
            cells[i][j] = new Cell(i * Tile_Dimension, j * Tile_Dimension);
        }
    }
}


function draw() {
    background(0, 0, 0);
    fill(255,0,0);
    
    for (i = 0; i < Tiles; i++){
        for (j = 0; j < Tiles; j++){
            cells[i][j].show();
        }
    }    
    
    /* / Score counter
    textSize(score_size);
    fill(0, 102, 153);
    text(score, Canvas_x / 2 - score_size, score_y_offset);
    */
}


function mousePressed(){
    // Have access to mouseX and mouseY
    for (i = 0; i < Tiles; i++){
        for (j = 0; j < Tiles; j++){
            if (mouseX >= cells[i][j].x 
                && mouseX < (cells[i][j].x + Tile_Dimension) 
                && mouseY >= cells[i][j].y 
                && mouseY < (cells[i][j].y + Tile_Dimension)){
                cells[i][j].revealed = true;
            }
        }
    }
}