
var database 
var gameState = 0;
var playerCount;

var database , allPlayers;

var form, player, game , bullet , bulletGroup

var Ron1 , Ron2
var rons=[]

function preload() {
//preload the images here
//img = loadImage("bg workout.jpeg")

}

function setup() {
  createCanvas(1355, 670);
  // create sprites here
  bulletGroup = new Group();

database = firebase.database();
game = new Game();
game.getState();
game.start();
x=createSprite(20,100,100,100)
x.velocityX=3

}

function draw() {
  background("white");
  if(playerCount === 2){

    game.update(1);
    
      }
    
    if (gameState === 1){
    
      game.play();
    
    }
    
    if (gameState === 2){
      game.end();
    }

drawSprites();
}
