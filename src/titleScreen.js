function menu() {
    menuScreen = new createjs.Stage(canvas);
    //createjs.Sound.play("menuMusic");
    
    var backdrop = loader.getResult("background");
    var background = new createjs.Bitmap(backdrop);
    background.y = -576*6;
    menuScreen.addChild(background);
    
    title = new createjs.Bitmap(loader.getResult("title"));
    title.zIndex = 10;
    title.y = 32;
    title.x = (640-548)/2;
    menuScreen.addChild(title);
    
    cont = new createjs.Bitmap(loader.getResult("controls"));
    cont.y = 452;
    cont.x = 640-368;
    menuScreen.addChild(cont);
    
    options = new createjs.Bitmap(loader.getResult("opt"));
    options.y = 204;
    options.x = 640-700;
    menuScreen.addChild(options);
    
    selectorMove = 0;
    selectorChoice = 1;
    selector = new createjs.Bitmap(loader.getResult("select"));
    selector.y = 238;
    selector.x = 80;
    menuScreen.addChild(selector);
    
    generateTiles(menuScreen);
    
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.framerate = 30;
    createjs.Ticker.addEventListener("tick", Tick);
}

function mTick(event) {
    selectorMove += dt*7;
    selector.x += Math.cos(selectorMove)/4;
    
    if (bWait < 0) {
        new bean(menuScreen);
        bWait = (Math.random() * 4) + 2;
    } else {
        bWait -= dt*(speed);
    }
    menuScreen.setChildIndex(title, menuScreen.getNumChildren()-1);
    menuScreen.setChildIndex(cont, menuScreen.getNumChildren()-1);
    menuScreen.setChildIndex(options, menuScreen.getNumChildren()-1);
    menuScreen.setChildIndex(selector, menuScreen.getNumChildren()-1);
    
   // speed += 0.005;
    updateBeans(menuScreen, dt);
    menuScreen.update();
}