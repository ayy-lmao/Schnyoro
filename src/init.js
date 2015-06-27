// Global Vars
var speed = 1;
var score = 0;
var bWait = 0;
var state = "Loading";

var KEY_LEFT = 37, 
    KEY_RIGHT = 39,
	KEY_UP = 38, 
	KEY_DOWN = 40,
    KEY_X = 88;

var objects = [
    {src:"img/backdrop.png", id:"background"},
    {src:"img/pyoro.png", id:"pyoro"},
    {src:"img/seed1.png", id:"bean1"},
    {src:"img/seed2.png", id:"bean2"},
    {src:"img/title.png", id:"title"},
    {src:"img/tiles.png", id:"tiles"},
    {src:"img/controls.png", id:"controls"},
    {src:"img/explosion.png", id:"expl"},
    {src:"img/options.png", id:"opt"},
    {src:"img/select.png", id:"select"},
    {src:"sfx/menu.ogg", id:"menuMusic"},
    //{src:"sfx/pyoro1.ogg", id:"game1Music"}
];
var objLoaded = 0;

function init() {
    canvas = document.getElementById("demoCanvas");
    loadStage = new createjs.Stage(canvas);
    
    loader = new createjs.LoadQueue(false);
    loader.installPlugin(createjs.Sound);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(objects);
    loader.onProgress = handleProgress;
    
    loadText = new createjs.Text("Loading", "20px Arial", "#000000");
    loadText.x = 320;
    loadText.y = 288;
    loadText.textAlign = "center";
    loadStage.addChild(loadText);
    
    loadPerc = new createjs.Text("0%", "48px Arial", "#000000");
    loadPerc.x = 320;
    loadPerc.y = 240;
    loadPerc.textAlign = "center";
    loadStage.addChild(loadPerc);
    
    loadStage.update();
}

function handleProgress(event) {
    console.log(event.loaded);
}

function handleFileLoad(event) {
    objLoaded += 1;
    console.log(event.item);
    
    loadPerc.text = Math.ceil((objLoaded / objects.length)*100) + "%";
    if (objLoaded != objects.length) {
        loadText.text = "Loading " + objects[objLoaded].src;
    }
    loadStage.update();
}

function handleComplete() { 
    loadStage.removeAllChildren();
    this.document.onkeydown = keyPressed;	
    this.document.onkeyup = keyUnpressed;	
    state = "Menu";
    menu();
}
