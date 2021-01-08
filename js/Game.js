class Game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            mygameState = data.val();
        })
    }
   
    update(state){
        database.ref('/').update({
            gameState:state
        });
    }

    async start(){
        if(mygameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                //check by commenting line23
                myplayerCount = playerCountRef.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }
        car1 =createSprite(100,200);
        car1.addImage("car1",car1_img);
        car2 =createSprite(300,200);
        car2.addImage("car2",car2_img);
        car3 =createSprite(500,200);
        car3.addImage("car3",car3_img);
        car4 =createSprite(700,200);
        car4.addImage("car4",car4_img);
        cars = [car1,car2,car3,car4];
        

    }

    play(){
        form.hide_elements();
        
        Player.getPlayerInfo();
        player.getCarsAtEnd();

        console.log("gamestate ", mygameState);

        if(allPlayers !== undefined ){
            background("#c68767");
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
           // var display_position = 130;

           // index of array
           var index=0;

           // x and y positions of the car
           var x=225;
           var y;

           

           

            for(var plr in allPlayers){
               //add 1 to the index for every loop
               index = index+1;

                //position the cars a little away from each other in x direction
                x = x+220;
               
                //use data from the database to display the cars in y direction

                y = displayHeight - allPlayers[plr].Dist;
                //console.log(index);
                cars[index-1].x = x;
                cars[index-1].y = y;

                //console.log("hehe");

                if(index === player.index){
                    fill ("red");
                    ellipse(x,y,70,70);
                    cars[index-1].shapeColor = "red";
                   camera.position.x = displayWidth/2;
                   camera.position.y = cars[index-1].y;
                }
                
                
            textSize(20);
            textAlign(CENTER);
            text(allPlayers[plr].Name,cars[index-1].x,cars[index-1].y+75);
            //give the values as stored in the database like Name and Dist
           // text(allPlayers[plr].Name + ": " + allPlayers[plr].Dist,120,display_position);
            }
        }
        //keyWentDown if u want to slow the process of speeding
        //keyDown works fast.
        if(keyIsDown(UP_ARROW) && player.index !==null && player.distance<4250){
            player.distance = player.distance + 50;
            player.update();
        }

        if(player.distance>= 4250 ){
            mygameState = 2;
            gameover = true;
           

            player.rank+=1;
            //we need this global variable to display rank at the end. since player.rank doesn't reflect 
            //since the end function is called with game object and not player object
            playerRank=player.rank;
            Player.updateCarsAtEnd(player.rank);
            console.log("rank :",+player.rank);
           // player.updateCarsAtEnd(playerRank);
        }
        drawSprites();
    }

    end(){
        
        textSize(30);
        text("Game Over",displayWidth/2-50,-displayHeight*4-200);
      /*  stroke ("green");
        strokeWeight(5);
        text("your rank is : "+player.rank,displayWidth/2-80,-displayHeight*4-170)*/
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
        drawSprites();
        over = createElement('h2');
        over.position(displayWidth/2,200);
        over.html("your rank is : "+player.rank);
       // over.html("your rank is : "+PlayerRank);
        console.log("in console "+player.rank);
        

    }

};