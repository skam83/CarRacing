var canvas,backgroundImage;

var database;
var mygameState = 0;
var myplayerCount;
var allPlayers;
var playerRank=0;
var gameover=false;

var form,player,game;
var over;
var finishedplayers=0;

var cars,car1,car2,car3,car4;
var track,car1_img,car2_img,car3_img,car4_img;

function preload(){
    track =loadImage("images/track.jpg");
   car1_img = loadImage("images/car1.png");
   car2_img = loadImage("images/car2.png");
    car3_img = loadImage("images/car3.png");
    car4_img = loadImage("images/car4.png");
    ground = loadImage("images/ground.png");

}


function setup(){
    //so that margins of the canvas are visible
   canvas= createCanvas(displayWidth-20,displayHeight-30);
   database= firebase.database();
   game = new Game();
   game.getState();
   game.start();
    
}

function draw(){
    background("lightblue");
   
  
    if(myplayerCount === 4){
        game.update(1);
    }
    if(mygameState === 1 ){
        clear ();
        game.play();
    }
    if(mygameState===2 && finishedplayers>0){
        
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
        drawSprites();
    }
    if(mygameState === 2 && finishedplayers===2){
        
        game.end();
    }
   
}

