class Form{
    constructor(){
   // this.input = createInput("Name");
    this.input=createInput("").attribute("placeholder","Name");
    this.button = createButton("Play");
    this.greeting = createElement('h3');
    this.title = createElement('h2');
    this.reset =createButton("reset");
    }

    hide_elements(){
    this.button.hide();
    this.input.hide();   
    this.greeting.hide();
    //this.title.hide();
    }

    display(){
        //title is shifted in constructor in c38,note
    //var title = createElement('h2');
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50,0);
    this.reset.position(displayWidth-100,50);
        console.log("here");
       // this.input.size(250,20);
      //  this.button.size(40,20);
        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);

         this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();

        myplayerCount=myplayerCount+1;
        player.index=myplayerCount;
       // console.log(player.index);
        player.update();
        player.updateCount(myplayerCount);

        this.greeting.html("Hello " + player.name);
        this.greeting.position(displayWidth/2-70,displayHeight/4);
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            Player.updateCarsAtEnd(0);
            
            database.ref("/").update({
                Players: null
            })
            /*
                for(var plr =1;plr<=4;plr++){
                    console.log("hi");
                
                    var playerIndex= "Players/Player"+ plr;
                    database.ref(playerIndex).set({
                        Name:" ",
                        Dist:0
                    });
                }*/
            
            
            })
        
    }

        

}