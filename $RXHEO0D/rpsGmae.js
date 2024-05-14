//Selections 

var player=document.getElementById("player")
var computer=document.getElementById("computer")
//imgs
var rock=document.getElementById("rock")
var paper=document.getElementById("paper")
var sciores=document.getElementById("sciores")
//score &&resukt
var reuslt=document.getElementById("reuslt")
var playeScore=document.getElementById("pscore")
var comScore=document.getElementById("comscore")
//imgs selection
var rockimg=document.getElementById("rockimg")
var paperimg=document.getElementById("paperimg")
var scieores=document.getElementById("scioresimg")
//
var playerBar=document.getElementById("playerprogress")
var computerprogress=document.getElementById("computerprogress")


// global varibels
var pscore=0
var cosscore=0
var playerChoice;
var computerChoice;
//var imgs=[rock,paper,sciores]
var imgs=[rockimg,paperimg,scieores]
//health bars ha d;img
var currentplayerhp=400
var computer=400
var prog=document.getElementById("progress")

 var x=100

playerBar.style.width=currentplayerhp+"px"
computerprogress.style.width=computer+"px"





 

//handlig results 
function result (){
  playerBar.style.width=currentplayerhp+"px"
  computerprogress.style.width=computer+"px"


if (playerChoice==imgs[0]&&computerChoice==imgs[1] ){
  reuslt.textContent="com won"
  cosscore++
  currentplayerhp=currentplayerhp-x
  comScore.textContent=cosscore
}
if (playerChoice==imgs[1]&&computerChoice==imgs[0] ){
  reuslt.textContent="player won"
  pscore++
  computer=computer-x
  playeScore.textContent=pscore
}
else if (playerChoice==imgs[1]&&computerChoice==imgs[2]) {
  reuslt.textContent="com won"
  
  cosscore++
  currentplayerhp=currentplayerhp-x
comScore.textContent=cosscore}
else if (computerChoice==imgs[1]&&playerChoice==imgs[2]) {
  reuslt.textContent="player won"
  pscore++
  computer=computer-x
    playeScore.textContent=pscore}
else if (playerChoice==imgs[2]&&computerChoice==imgs[0]) {
  reuslt.textContent="com won"
  cosscore++
   currentplayerhp=currentplayerhp-x

  computerChoice.textContent=cosscore
}
else if (computerChoice==imgs[2]&&playerChoice==imgs[0]) {
  reuslt.textContent="player won"
  pscore++
  computer=computer-x
  playeScore.textContent=pscore
}
else if (computerChoice==playerChoice) {
  reuslt.textContent="tie"

}}
 
  


      //computer coice 
function computerCjoice(){
  computerChoice=Math.floor(Math.random()*2+1)
  for(i=0;i<imgs.length;i++){
    if(computerChoice==i){

      computerChoice=imgs[i]

    }
   
 
  }}


  function choice(){

    for (i=0;i<imgs.length;i++){
    
    if(event.target==imgs[i]){
      
      playerChoice=imgs[i]
      
      computerCjoice()
      result()
    }}}

 
rockimg.addEventListener("click",choice)
paperimg.addEventListener("click",choice)
scieores.addEventListener("click",choice)

