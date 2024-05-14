var board=document.getElementById("board")
var ctx=board.getContext("2d")
var rows=40
var cloumns=25
var intersect=20
var shipPace=intersect
//
var battlecruiser;
var ship={
  x:400,
  y:cloumns*intersect-5*intersect,
  width:2.4*intersect,
  height:2.4*intersect
  }

///
board.height=cloumns*intersect
board.width=rows*intersect
var boardx=rows
var boardy=cloumns
// mainCannon
var mainCanon=[]
var mainCanonwidth=.25*intersect
var mainCanonHeight=.25*intersect
var maincannonVelocity=-5
//
//Drawing enemy fighhtes
var enemy=[]
var enemyWidth=2*intersect
var enemyHight=2*intersect
var alienx=intersect
var alient=intersect
var enemyRows=20
var enemyColms=5
 var fighterImg;
 var enemyCount=0

//

window.onload=function(){



//draw image 
 battlecruiser=new Image()
battlecruiser.src="$RFFXG1E.png"
battlecruiser.onload=function(){
ctx.drawImage(battlecruiser,ship.x,ship.y,ship.width,ship.height)}
fighterImg=new Image()
fighterImg.src="enemyf.png"
InboaudingEnmies()




requestAnimationFrame(update)

document.addEventListener("keydown",ShipMovment)
document.addEventListener("keyup",Shoot)

}


//handling movment

function ShipMovment(){
  alert
if(event.keyCode==39&&ship.x +shipPace + ship.width <=board.width){
  
    ship.x+=shipPace}

else if(event.keyCode==37&&ship.x-shipPace>=0){
  ship.x-=shipPace
}
}
function update (){
  requestAnimationFrame(update)
  ctx.clearRect(0,0,board.width,board.height)
  ctx.drawImage(battlecruiser,ship.x,ship.y,ship.width,ship.height)
  // Enemies drawings
  for(i=0;i<enemy.length;i++){

    var fighters=enemy[i]
    if(fighters.isAlive){
    ctx.drawImage(fighterImg,fighters.x,fighters.y,fighters.width,fighters.height)}
 
    
    }

  //Drawing bullets

  for(i=0;i<mainCanon.length;i++){
    var bull=mainCanon[i]
    bull.y +=-5

    ctx.fillStyle="red"
    ctx.beginPath();
    ctx.arc(bull.x,bull.y,10,0,Math.PI)
    ctx.fill();
    
        for(c=0;c<enemy.length;c++){

          var fighterss=enemy[c]
         
          if(!bull.isFired  &&  fighterss.isAlive&&   FighterPlanesGEtsShot(bull,fighterss)){
           
            fighterss.isAlive=false;
             bull.isFired=true
    
             enemyCount--


      }


    }
   
  }
  while (mainCanon.length>0 && (mainCanon[0].isFired||mainCanon[0].y<0)){


    mainCanon.shift()
  }

}

//main cannon shots object
function Shoot(){
if(event.keyCode==32){
  var bullet={
x:ship.x+ship.width*60/130,
y:ship.y,
width:mainCanonwidth,
height:mainCanonHeight,
isFired:false
}
mainCanon.push(bullet)

}}
//enemies object
function InboaudingEnmies(){
for (i=0;i<enemyColms;i++){
//refrenig to enemy as fighte planes
for(j=0;j<enemyRows;j++){
var fightepalnes={
img:fighterImg,
  x:enemyWidth+j*enemyWidth,
  y:enemyHight+i*enemyHight,
  width:enemyWidth,
  height:enemyHight,
  isAlive:true
}
enemy.push(fightepalnes)
}

}
enemyCount=enemy.length
}
//manging the palen damge function
function FighterPlanesGEtsShot(a,b){
  
    return a.x<b.x+b.width&&
    
          a.x+a.width>b.x&&
          a.y<b.y+b.height&&
          a.y+a.height>b.y
        }
    