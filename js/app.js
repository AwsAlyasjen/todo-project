"use strict";
var yourName = prompt("What is your name?");
var yourgender = prompt("What is your gender? (male or female :)");
if (yourgender.toUpperCase() == "MALE" || "FEMALE") {
    
} else {
    var yourgender = prompt("What is your gender? make sure to be one of these choices  (male or female :)");
}
var yourAge = prompt("What is your age?");
if (yourAge > 0) {
    
} else{
    alert("your age is less than or equal to zero");
}
var skipWelcomingMessage = confirm("Do you wants to skip the welcoming message ");
if (skipWelcomingMessage==false && yourgender.toUpperCase()=="MALE" ) {
    alert(`Welcome Mr ${yourName}`) ;
} else if (skipWelcomingMessage==false && yourgender.toUpperCase()=="FEMALE" ) {
    alert(`Welcome Ms ${yourName}`) ;
}
else if (skipWelcomingMessage==false && yourgender.toUpperCase()=="FEMALE"|| yourgender.toUpperCase()=="MALE"  ) {
    alert("") ;
}else{
    ;
}