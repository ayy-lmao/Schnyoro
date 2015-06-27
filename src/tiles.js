var tiles = [];

function tile(stage, pos) { 
    this.placed = true;
    
    this.sprite = new createjs.Bitmap(loader.getResult("tiles"));
    this.sprite.y = 576-32;
    this.sprite.x = (pos*32);
    var mask = new createjs.Shape();
    
    mask.graphics.drawRect(0, 0, 32, 32);
    mask.x = 32*pos;
    mask.y = 544;
    this.sprite.mask = mask;
    
    stage.addChild(this.sprite);
    
    tiles.splice(tiles.length, 0, this);
}

function generateTiles(stage) {
    tiles = [];
    for (i = 0; i < 20; i++) {
        var t = new tile(stage, i);
    }
}