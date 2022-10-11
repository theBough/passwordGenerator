var passwordHolder = document.getElementById("showPassword");

function generate(){
  //get a random number from 33 -127
  var newLetter = Math.random()*96
  //get rid of the decimals
  newLetter = Math.ceil(newLetter)+33
  passwordHolder.innerHTML = String.fromCharCode(newLetter)
}//end generate
