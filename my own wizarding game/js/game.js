class Game {
    constructor(){

      


    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    
   async start(){
      if(gameState === 0){
          
        player = new Player();
        var playerCountRef= await database.ref('playerCount').once("value")
        if(playerCountRef.exists ()){
          playerCount=playerCountRef.val();
          player.getCount();
        }
        
        form = new Form()
        form.display();
      }
  
      Ron1=createSprite(100,200 , 20 , 20)
        //car1.addImage(car1Img)
      Ron2=createSprite(200,200 , 20 , 20)
      
  
      rons = [Ron1 , Ron2]
      
    }
  
    play(){
      form.hideForm();
      //text ("GAME STARTED" , width/2 , height/2);
      Player.getPlayerInfo();
      player.getFinishedPlayers();
      
      if(allPlayers !== undefined){
        //background ("red")
        //image (trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
          var yPosition
          var xPosition 
          var index = 0
          
        for(var plr in allPlayers){
          index=index+1
          //x=x+200;
        //y= displayHeight-allPlayers[plr].distance
            xPosition = allPlayers[plr].distanceX
            yPosition = allPlayers[plr].distanceY

            rons[index-1].x=xPosition;
            rons[index-1].y=yPosition;
                  
          
  
        }
      }
  
      if(keyIsDown(LEFT_ARROW)){
        player.distanceX -= 1
        player.update();
    }
    else if(keyIsDown(RIGHT_ARROW)){
      player.distanceX += 1
        player.update();
    }
    else if(keyIsDown(UP_ARROW)){
      player.distanceY -= 1
        player.update();
    }
    else if(keyIsDown(DOWN_ARROW)){
      player.distanceY += 1
        player.update();
    }
    //player bullets
    if(keyIsDown(32)){

      this.createBullet();
      player.update();

    }
  

  
  }

createBullet(){
  bullet = createSprite(rons[player.index-1].x , rons[player.index-1].y , 20 , 20)
  bullet.VelocityX
  bulletGroup.add(bullet)
}



}