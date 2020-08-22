const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score =0;

var particle;
var turn = 0;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white");
  text("Score : "+score,20,30);

  // text("500", 30, 700);
  // text("500", 110, 700);

  for(var i = 30; i< 300; i=i+80){
    text("500", i, 700);

  }

  for(var i = 330; i< 525; i=i+80){
    text("100", i, 700);

  }

  for(var i = 600; i< 800; i=i+80){
    text("200", i, 700);

  }

  Engine.update(engine);

  ground.display();
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){

    particle.display();

      if(particle.body.position.y>760){
        if(particle.body.position.x < 300){

          score = score+500;
          particle = null;
          //turn = turn +1;
          if(turn>=5){ 
            gameState = "end";
          }
        }

        else if(particle.body.position.x > 300 && particle.body.position.x <550){

          score = score+100;
          particle = null;
          //turn = turn +1;
          if(turn>=5){ 
            gameState = "end";
          }
        }
        else if(particle.body.position.x > 550 && particle.body.position.x <800){

          score = score+200;
          particle = null;
          //turn = turn +1;
          if(turn>=5){ 
            gameState = "end";
          }
        }
      }
   }

   if(gameState === "end"){
     textSize(40);
     text("GAME OVER", 300,450);
   }
}

function mousePressed(){
  if( gameState =="play"){
     turn++;
    particle = new Particle(mouseX, 10,10);
  //  particle.display();
  }
}