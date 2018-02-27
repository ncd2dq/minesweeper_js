function Cell(x, y){
    this.x = x;
    this.y = y;
    this.bomb = false;
    this.revealed = false;
    this.neighbor_bombs = 0;
    
    
    this.show = function(){
        // All of them are blank rects until revealed
        if (this.revealed == false){
            fill(cell_unrevealed_color);
            rect(this.x, this.y, Tile_Dimension, Tile_Dimension);
        }
        
        if (this.revealed == true){
            fill(cell_revealed_color);
            rect(this.x, this.y, Tile_Dimension, Tile_Dimension);
        }
    }
}