class Player {
    constructor() {
      this.name = null
      this.index = null
      this.positiony = 0
      this.positionx = 0
    }
    getCount(){
        database.ref("playerCount").on("value",function(data){
          playerCount = data.val()
        })
    }
    updateCount(count){
      database.ref("/").update({
        playerCount:count
        })
    }
    addPlayer(){
        var playerindex = "players/player"+this.index
        if (this.index === 1) {
          this.positionx = width/2 - 100
        } else {
          this.positionx = width/2 + 100
        }
        database.ref(playerindex).set({
          name:this.name, 
          positionx:this.positionx,
          positiony:this.positiony,
          
        })
      }
      
       
        
      
}