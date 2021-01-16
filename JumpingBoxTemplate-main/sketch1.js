var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box=createSprite(random(20,750),50,50,50);
    box.shapeColor=color(255,255,255);
    box.velocityY=5;
    surface1=createSprite(120,500,100,20);
    surface1.shapeColor=color(255,0,0);
    surface2=createSprite(240,500,100,20);
    surface2.shapeColor=color(0,255,0);
    surface3=createSprite(360,500,100,20);
    surface3.shapeColor=color(0,0,255);
    surface4=createSprite(480,500,100,20);
    surface4.shapeColor=color(255,255,0)

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(hasCollided1(box,surface1)){
        box.shapeColor=color(255,0,0);



    }
    if(hasCollided2(box,surface2)){
        box.shapeColor=color(0,255,0);



    }
    if(hasCollided3(box,surface3)){
        box.shapeColor=color(0,0,255);



    }
    if(hasCollided4(box,surface4)){
        box.shapeColor=color(255,255,0);



    }

  



    //add condition to check if box touching surface and make it box
    drawSprites();
}

function hasCollided1(box1, surface11)
{
	box1BottomEdge=box1.x +box1.width;
	surface11RightEdge=surface11.x;
	if (box11BottomEdge>=surface11TopEdge)
	{
		return true
	}
	return false;
}

function hasCollided2(box1, surface22)
{
	box1BottomEdge=box1.x +box1.width;
	surface22TopEdge=surface22.x;
	if (box1BottomEdge>=surface22TopEdge)
	{
		return true
	}
	return false;
}

function hasCollided3(box1, surface33)
{
	box1BottomEdge+box1.x +box1.width;
	surface33TopEdge=surface33.x;
	if (box1BottomEdge>=surface33TopEdge)
	{
		return true
	}
	return false;
}

function hasCollided4(box1, surface44)
{
	box1BottomEdge=box1.x +box1.width;
	surface44TopEdge=surface44.x;
	if (box1BottomEdge>=surface44TopEdge)
	{
		return true
	}
	return false;
}
