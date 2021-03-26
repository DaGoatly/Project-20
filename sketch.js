var cat1,cat2,cat3,cat4,cat;
var garden,gardenBackground;
var mouse1,mouse2,mouse3,mouse4,mouse;

function preload() {
    //load the images here
//catAnimation=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png");
cat1=loadImage("images/cat1.png");
cat2=loadImage("images/cat2.png");
cat3=loadImage("images/cat3.png");
cat4=loadImage("images/cat4.png");
garden=loadImage("images/garden.png");
//mouseAnimation=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
mouse1=loadImage("images/mouse1.png");
mouse2=loadImage("images/mouse2.png");
mouse3=loadImage("images/mouse3.png");
mouse4=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 //   gardenBackground = createSprite(width/2,height/2-50,width,height);
 //   gardenBackground.addImage(garden);
 //   gardenBackground.scale=1;
    cat = createSprite(700,600,10,10);
    cat.addImage(cat1);
    cat.scale=.2;
    mouse = createSprite(200,600,10,10);
    mouse.addImage(mouse1);
    mouse.scale=.15;
}

function draw() {
    background(garden);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2)
    {
    cat.velocityX=0;
    cat.addAnimation("catLastImage",cat4);
    cat.x=300;
    cat.scale=.2;
    cat.changeAnimation("catLastImage");

    mouse.addAnimation("mouseLastImage",mouse4);
    mouse.scale=.15;
    mouse.changeAnimation("mouseLastImage");
    }
    //Write condition here to evalute if tom and jerry collide
    

    drawSprites();
}


function keyPressed()
{
    if(keyCode === LEFT_ARROW)
    {
        mouse.addAnimation("mouseTeasing",mouse2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
        
        cat.addAnimation("catWalking",cat2);
        cat.changeAnimation("catWalking");
        cat.velocityX=-2;
    }
}