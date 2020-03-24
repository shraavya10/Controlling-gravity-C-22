
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 
var boxes = [];
var gSlider;
var object; 
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
     engine=Engine.create();
     world=engine.world;

    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(100, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
     
    // Create a ground rectangle that would hold all the boxes and add it to the world.
   var ground_options ={
      isStatic:true
   }

     ground=Bodies.rectangle(200,350,400,20,ground_options);
     World.add(world,ground);


     mousePressed();
}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        box=Bodies.rectangle(200,0,20,20);
        World.add(world,box);
    }
}
 
function draw() {
    
    background(51);

    // Draw all the elements including the slider that 
    //Drawing the ground
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

  

    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    
    // Use a for loop to show all the boxes
    for (var i = 0; i < 100; i++) {
       rectMode(CENTER);
       rect(box.position.x,box.position.y,20,20);
    
        
          
    }
    console.log(box.position.x);

    
      
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
function Box(x, y, w, h, options) {

    // add options such as friction and restitution. Experiment with the values
    var options = {
       restitution :110
     //'friction':0.5
    
    }
    
 
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;

    World.add(world,this.body);

}
//create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    function display(){

     
    var pos=this.body.position;
    var angle= this.body.angl;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.width,this.height);
    pop();

    }


