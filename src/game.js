function gInit() {
    menuScreen.removeAllChildren();
    state = "Game";
    gScreen = new createjs.Stage(canvas);
    
    background = new bg(gScreen);
    
    generateTiles(gScreen);
    
    plr = new pyoro(gScreen);
}

function gTick() {
    pyoroUpdate(plr);
    
    gScreen.update();
}