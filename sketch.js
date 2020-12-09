var dog, happyDog
var database, foodS, foodStock

function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
   database = firebase.database()

  foodStock = database.ref('Food')
  foodStock.on("value", readStock)

  var dogSprite = createSprite(250, 250)
  dogSprite.addImage(dog)
  dogSprite.scale=0.15
}



function draw() {  
background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  
}

  drawSprites();
  //add styles here
}

 function readStock(data){
    foodS=data.val()
  }

  function writeStock(x){

    if(x<=0){
      x = 0;
    }else{
      x=x-1
    }
  
    database.ref('/').update({
      food:x
    })
  }