class Player{
    constructor(){
        this.index =null;
        this.distance =0;
        this.name = null;
        this.rank = null;
    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            myplayerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }

    update(){
        var playerIndex = "Players/Player" + this.index;
        database.ref(playerIndex).set({
            Name :this.name,
            Dist:this.distance
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref("Players");
        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }

    getCarsAtEnd(){
        database.ref("CarsAtEnd").on("value",(data)=>{
            this.rank=data.val();
            finishedplayers=this.rank;
        })
    }

    static updateCarsAtEnd(rank){
        database.ref("/").update({
            CarsAtEnd: rank
        })
    }
}