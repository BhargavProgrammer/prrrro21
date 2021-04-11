var canvas;
var music;
var surface1, surface2, sutface3, surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(610,600);

    //create 4 different surfaces
    surface1 = createSprite(80,580,140,10);
    surface1.shapeColor = "blue";

    surface2 = createSprite(230,580,140,10);
    surface2.shapeColor = "red";

    surface3 = createSprite(380,580,140,10);
    surface3.shapeColor = "green";

    surface4 = createSprite(530,580,140,10);
    surface4.shapeColor = "yellow";

     


    //create box sprite and give velocity
    box = createSprite(Math.round(random(100,500)),300,30,30);
    box.shapeColor = "white";
    box.velocityY = 6;
    box.velocityX = -5;

}

function draw() {
    background("pink");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);




    //add condition to check if box touching surface and make it box
    bounceOff();
    drawSprites();
}

function bounceOff(){

    if(box.isTouching(surface1)){
        box.shapeColor = "blue"
        box.bounceOff(surface1);
        music.play();
    }

    if(box.isTouching(surface2)){
        box.shapeColor = "red"
        box.bounceOff(surface2);
    }

    if(box.isTouching(surface3)){
        box.shapeColor = "green"
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(box.isTouching(surface4)){
        box.shapeColor = "yellow"
        box.bounceOff(surface4);
    }

}
