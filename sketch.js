var  database;
var gameState=0,playerCount=0,game,form,player;
var allPlayers

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game()
  game.getState()
  game.start()

}

function draw(){
  background("white");
  
    if(playerCount===4){
      game.update(1)
    }
    if(gameState===1){
      clear()
      game.play()
    }
}  


