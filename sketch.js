var title
var form,player,game
var background
var playerCount
var database
var ss1
var ss2
var aster1
var aster2
var blaster1
var blaster2
var gameState

function preload(){
titleimg = loadImage("./images/title-.PNG")
bgimg = loadImage("./images/backgroudimg.jpg")
spaceship1img = loadImage("./images/ship1-.png")
spaceship2img = loadImage("./images/ship2-.png")
aster1img = loadImage("./images/asteriod1-.png")
//aster2img = loadImage("./images/asteriod2-.png")
blaster = loadImage("./images/blaster-.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database()
  form = new Form()
  player = new Player()
  playerCount = player.getCount()
  game = new Game()
  imageMode(CENTER)
}

function draw() {
 
  image(bgimg,width/2,height/2,width,height) 
  if(playerCount == 2){
    game.update(1)
  }
  if(gameState == 1){
    game.play()
  }
  
  form.display()
  
}