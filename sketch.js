const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Batman
var particles = [];
var ground

function preload() {
    
}

function setup(){
    var canvas = createCanvas(480,750);
    engine = Engine.create();
    world = engine.world;
    var ground = createSprite(220,650,600,200)
    ground.shapeColor = "brown"

    Batman = new Division(200,220,82.5,50)  
   
    
}

function draw(){
    background("black")  
    Engine.update(engine);
    //strokeWeight(4);
       
     

    

    if(frameCount%5===0){
        particles.push(new Particle(random(0,480),10,10))
    }


    
    
    Batman.display()

    for(var o=0; o < particles.length; o++){
        particles[o].display()
    }
    
drawSprites()
    
   console.log(mouseX)

}





