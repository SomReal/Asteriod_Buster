class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("Play");
      this.title = createImg("./images/title-.PNG", "titleimg");
      this.greeting = createElement("h2");
      
    }
    setElementsStyle(){
      this.title.class("gameTitle")
      this.input.class("customInput")
      this.playButton.class("customButton")
      this.greeting.class("greeting")
    }
    handleMousePressed(){
      this.playButton.mousePressed(()=>{
        this.input.hide()
        this.playButton.hide()
        var message = `Hello ${this.input.value()}
        </br> Wait for another player to join`
        this.greeting.html(message)
        playerCount += 1
      player.name = this.input.value()
      console.log(playerCount)
      player.index = playerCount
      player.addPlayer()
      player.updateCount(playerCount)
      })
    }
    


    display(){
      this.title.position(350,50)
      this.input.position(550,200)
      this.playButton.position(765,200)
      this.greeting.position(475,200)
      this.setElementsStyle()
      this.handleMousePressed()
    }
}