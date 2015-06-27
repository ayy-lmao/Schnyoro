function pyoro(stage) {
    this.move = false;
    this.facedRight = true;
    this.faceRight = true;
    this.x = 64;
    this.y = 576-96;
    
    var ssheet = new createjs.SpriteSheet({
        framerate: 1,
        "images": [loader.getResult("pyoro")],
        "frames": {"regX": 0, "height": 63.7, "regY": 0.05, "width": 64},
        "animations": {
            "idle": [0, 0, "idle", 0.04*speed],
            "walk": [0, 1, "walk", 0.13*speed],
        }
    });
    
    this.sprite = new createjs.Sprite(ssheet, "idle");
    this.sprite.setTransform(0, 0, -1);
    this.sprite.x = this.x+(64*this.faceRight);
    this.sprite.y = this.y;
    stage.addChild(this.sprite)
}

function pyoroUpdate(p) {
    if (p.faceRight != p.facedRight) {
        switch(p.faceRight) {
            case true:
                p.sprite.setTransform(0, 0, -1);
                break;
            case false:
                p.sprite.setTransform(0, 0, 1);
                break;
        }
        p.facedRight = p.faceRight;
    }
    
    if (p.move) {
        var movement = dt*80;
        if (p.faceRight == false) movement *= -1;
        p.x += movement;
    }
    
    p.sprite.x = p.x+(64*p.faceRight);
    p.sprite.y = p.y;
}