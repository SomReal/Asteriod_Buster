class Game {
    constructor() {
      this.resettitle = createElement("h2")
    
    }
    handlelements(){
        form.hide()
        form.titleImg.position(40,50)
        form.titleImg.class("gameTitleAfterEffect")
        }
    getState(){
      database.ref("gameState").on("value",function(data){
          gameState = data.val()
          })
        
        }
        update(state){
          database.ref("/").update({
            gameState:state
            
          })
        }
        play(){
          ss1 = createSprite(width/2-50,height-100)
          ss1.addImage("spaceship1img",ss1)
          drawSprites();
        }
          
    }
    