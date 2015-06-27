// Explosion Object

function explosion(stage, xPos, yPos) {
    var ssheet = new createjs.SpriteSheet({
        framerate: 1,
        "images": [loader.getResult("expl")],
        "frames": {"regX": 0, "height": 64, "count": 3, "regY": 0, "width": 64},
        "animations": {
            "explosion": [0, 2, 0, 0.15],
        }
    });
    
    this.s = stage;
    
    this.sprite = new createjs.Sprite(ssheet, "explosion");
    this.sprite.x = xPos;
    this.sprite.y = yPos;
    this.sprite.on("animationend", handleAnimationEnd);
    this.s.addChild(this.sprite);
}

function handleAnimationEnd(event) {
    if (event.name == "explosion") {
        menuScreen.removeChild(event.target);
        event.remove();
    }
}

// Background Object

function bg(stage) {
    this.backdrop = 1;
    
    this.back = new createjs.Bitmap(loader.getResult("background"));
    this.fade = new createjs.Bitmap(loader.getResult("background"));
    
    stage.addChild(this.back, this.fade);
}