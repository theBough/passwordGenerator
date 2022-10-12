var passwordHolder = document.getElementById("showPassword");

function generate(){
  //get a random number from 33 -127
  //the 96 indicates the range of values.
  var newLetter = Math.random()*96
  //get rid of the decimals
  //the number 33 represents what number to start with.
  newLetter = Math.floor(newLetter)+33
  passwordHolder.innerHTML = String.fromCharCode(newLetter)
}//end generate
