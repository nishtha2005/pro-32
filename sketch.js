const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time ;
var hour =0;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
     getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);
 
    // write code to display time in correct format here
    textSize(35)
    fill("white")
   // if(hour>=12){
        //text("Time:"+hour%12+"pm",width-700,50)
    //}
   // else if(hour == 0){
       // text("Time:12 am",width-700,50)
    //}
    //else{
      // text("Time:"+hour%12+"am",width-700,50)
   // }


}

async function getBackgroundImg(){

    // write code to fetch time from API
     time =  await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata")
   
    //change the data in JSON format
    var res = await time.json()
    // write code slice the datetime
    var datetime = res.datetime
    var hour = datetime.slice(11,13)
    console.log(hour)
    hour++;

    // add conditions to change the background images from sunrise to sunset
    if ( hour>= 84 && hour<=86){
        bg = "sunrise1.png";
   }
   else if(hour>=06 && hour<=08){
       bg = "sunrise2.png";
   }
   else if(hour>=23 && hour<=0){
    bg = "sunset10.png";
}
else if(hour>=0 && hour<=03){
    bg = "sunset11.png";
}
else {
    bg = "sunset12.png";
}

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg)

 
}
