var beans = [];

function bean(stage) {
    this.pos = Math.floor(Math.random() * 20);
    this.speed = (((Math.random() * 10) + 1)/10)+0.5;
    
    var ssheet = new createjs.SpriteSheet({
        framerate: 1,
        "images": [loader.getResult("bean1")],
        "frames": {"regX": 0, "height": 63.7, "regY": 0.05, "width": 64},
        "animations": {
            "normal": [0, 3, "normal", 0.04*(speed)]
        }
    });
    
    this.sprite = new createjs.Sprite(ssheet, "normal");
    this.sprite.x = (this.pos*32)-16;
    this.sprite.y = -64;
    
    beans.splice(beans.length, 0, this);
    stage.addChild(this.sprite);
}

function updateBeans(stage, dt) {
    for(b=0; b<beans.length; b++){
        var s = beans[b];
        s.sprite.y += dt*100*(speed*0.7)*s.speed;
        
        if (s.sprite.y > 484 && tiles[s.pos].placed == true) {
            new explosion(stage, s.pos*32-16, 504);
            stage.removeChild(tiles[s.pos].sprite);
            tiles[s.pos].placed = false;
            
            stage.removeChild(s.sprite);
            beans.splice(b, 1);
        }
        
        if (s.sprite.y > 576) {
            stage.removeChild(s.sprite);
            beans.splice(b, 1);
        }
    }
}