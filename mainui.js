//selections
var statConsole=document.getElementById("gamestart")
var rps=document.getElementById("rps")
var ui=document.getElementById("section")
var rpsmain=document.getElementById("main")
var imges=document.getElementsByClassName("tickect")
var xoMain=document.getElementById("xoMain")
var xogame=document.getElementById("xo")
var aloneInsapceMain=document.getElementById("aloneInSpaceMain")
var  aloneInSpaceGame=document.getElementById("aisgame")
var btn=document.getElementById("hideShow")
var aside=document.getElementById("aside")
var body=document.getElementById("main-aside")
var comingsoon=document.getElementById("comingSoone")
var bfv=document.getElementById("bfv")
var bfvgame=document.getElementById("bfvgame")
var snakeGame=document.getElementById("snakeGame");
var snakeBtn=document.getElementById("snake");
var arrowdown=document.getElementById("ArrowDown");
var Exit=document.getElementById("Exit");


//array of event listeners 
var listners =[startplaying,rpsgame,xogam,comingSoon,snakegamestart]


// aray of main 
var uiS=[ui,rpsmain,xoMain,aloneInsapceMain,snakeGame,comingsoon]
//console handelrs
function startplaying(){
  for (i=0;i<imges.length;i++){
    imges[i].style.boxShadow="0 50px 70px 0 rgba(0, 0, 0, 0.7)"
    imges[i].style.transition="1s"

  }
statConsole.style.display="none"
}

function block(){ 
  
  for(var i=0;i<uiS.length;i++){

    uiS[i].style.display="none"
    
    }  //   snakeBtn.removeEventListener("click",snakegamestart)

  rpsmain.style.display="block"
  Exit.style.display="block"
}
function rpsgame(){

  bfvgame.pause()

 

  ui.style.visibility="hidden"
  ui.style.opacity="0"
  ui.style.transition="1s ease-in-out"
  rpsmain.style.visibility="visible"
  setTimeout(block,900)

  
}
function xogam(){for(var i=0;i<uiS.length;i++){

  uiS[i].style.display="none"
  bfvgame.pause()


} 

//snakeBtn.removeEventListener("click",snakegamestart)


xoMain.style.display="block"
Exit.style.display="block"


}

function snakegamestart(){
  for(var i=0;i<uiS.length;i++){

    uiS[i].style.display="none"
    bfvgame.pause()

  } 
  

  snakeGame.style.display="flex"
  Exit.style.display="block"


}
function aisgame(){
  for(var i=0;i<uiS.length;i++){

    uiS[i].style.display="none"
    bfvgame.pause()

  } 
  //snakeBtn.removeEventListener("click",snakegamestart)

  
  aloneInsapceMain.style.display="block"
  Exit.style.display="block"

  
}

function comingSoon(){
  for(var i=0;i<uiS.length;i++){
    uiS[i].style.display="none"
    Exit.style.display="none"
    } 
    //snakeBtn.removeEventListener("click",snakegamestart)

    
    comingSoone.style.display="block"
    bfvgame.play()
   
    

}
function coming_soon(){
  arrowdown.style.scale="120%"
  arrowdown.style.transition=".9s"
  arrowdown.style.visibility="visible%"
}
function fading(){
  arrowdown.style.scale="100%"
  arrowdown.style.transition=".9s"
  arrowdown.style.visibility="visible%"
}
function returnToMainMenu(){
  for(var i=0;i<uiS.length;i++){
    uiS[i].style.display="none"
    bfvgame.pause()

    } 
    
    ui.style.display="block"



}

//event linters
statConsole.addEventListener("click",startplaying)
rps.addEventListener("click",rpsgame)
xogame.addEventListener("click",xogam)
aloneInSpaceGame.addEventListener("click",aisgame)
snakeBtn.addEventListener("click",snakegamestart)
bfv.addEventListener("click",comingSoon)
bfv.addEventListener("mouseover",coming_soon)
bfv.addEventListener("mouseout",fading)
Exit.addEventListener("click",returnToMainMenu)