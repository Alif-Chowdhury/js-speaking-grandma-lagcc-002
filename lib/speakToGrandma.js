'use strict';

let speakToGrandma = function(speak){
  if (speak != speak.toUpperCase()) {
    console.log("HUH?! SPEAK UP, SONNY!");
    return "HUH?! SPEAK UP, SONNY!";
  }
  console.log("NO, NOT SINCE 1938!");
  return "NO, NOT SINCE 1938!";
  
};


module.exports = speakToGrandma;