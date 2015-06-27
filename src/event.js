function keyPressed(event) {
    if (state == "Menu") {
        menuEvent(event);
    } else if (state == "Game") {
        gameEvent(event);
    }
    console.log(event.keyCode);
}

function keyUnpressed(event) {
    if (state == "Game") {
        gameKU(event);
    }
}

function gameEvent(event) {
    if ((event.keyCode == KEY_LEFT && plr.move != true) || (event.keyCode == KEY_LEFT && plr.faceRight == true)) {
        console.log("LEFT");
        plr.faceRight = false;
        plr.sprite.play("walk");
        plr.move = true;
    }
    if ((event.keyCode == KEY_RIGHT && plr.move != true) || (event.keyCode == KEY_RIGHT && plr.faceRight == false)) {
        plr.faceRight = true;
        plr.sprite.play("walk");
        plr.move = true;
    }
}

function gameKU(event) {
    if (event.keyCode == KEY_LEFT) {
        plr.sprite.play("idle");
        plr.move = false;
    }
    if (event.keyCode == KEY_RIGHT) {
        plr.sprite.play("idle");
        plr.move = false;
    }
}

function menuEvent(event) {
    if (event.keyCode == KEY_DOWN && selectorChoice < 3) {
        selectorChoice++;
    }
    if (event.keyCode == KEY_UP && selectorChoice > 1) {
        selectorChoice--;
    }
    selector.y = 238+(46*(selectorChoice-1));
    
    if (event.keyCode == KEY_X && selectorChoice == 1) {
        gInit();
    }
}

function Tick(event) {
    dt = event.delta/1000;
    switch(state) {
        case "Menu":
            mTick(event);
            break;
        case "Game":
            gTick(event);
            break;
    }
}