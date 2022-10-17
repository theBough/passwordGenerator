var passwordHolder = document.getElementById("showPassword");

function startHere(){
  passwordHolder.innerHTML = ""
  var rndNum;
  for(i=0 ; i<25 ; i++){
    rndNum = Math.random()*3
    rndNum = Math.floor(rndNum)
    if(rndNum == 0){
      generateCapitalLetter();
    }
    if(rndNum == 1){
      generateLowerLetter();
    }
  }//end loop
}//end startHere

function generateCapitalLetter(){
  //get a random number from 33 -127
  //the 96 indicates the range of values.
  var newLetter = Math.random()*26
  //get rid of the decimals
  //the number 33 represents what number to start with.
  newLetter = Math.floor(newLetter)+65
  passwordHolder.innerHTML += String.fromCharCode(newLetter)
}//end generate
function generateLowerLetter(){
  var newLetter = Math.random()*26
  newLetter = Math.floor(newLetter)+97
  passwordHolder.innerHTML += String.fromCharCode(newLetter)
}//end generate
function generateNumber(){
  var newLetter = Math.random()*10
  newLetter = Math.floor(newLetter)+48
  passwordHolder.innerHTML += String.fromCharCode(newLetter)
}
