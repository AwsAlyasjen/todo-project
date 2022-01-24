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
//for task 6
function askQuestion(question){
    let answer =prompt(question);
    if(answer.toUpperCase()==("YES")){
           
        return answer;
    }
     else if(answer.toUpperCase()==("NO")){
       
        return answer;

    }
    else {
        
        return "Invalid";

          }}
          let questionOne =askQuestion("Do you live in Jordan? (note that all the answers should be (Yes/No):");
          let questionTwo =askQuestion("Are you an IT graduate?? (note that all the answers should be (Yes/No):");
          let questionThree =askQuestion("Did you receive your username and password?? (note that all the answers should be (Yes/No):");
          
          let answerArray =[questionOne,questionTwo,questionThree];
          console.log(answerArray);
          let traverse =(arr)=>{
              for(let i=0;i<arr.length;i++){
                  console.log(arr[i]);
              }
          }
          traverse(answerArray);



/*let answers = [];
for(let i=0; i<3;i++){
    if(i==0){
        var checkAddress = prompt("Do you live in Jordan? (note that all the answers should be (Yes/No):)");
        if(checkAddress.toUpperCase()==("YES")){
           
            answers.push(checkAddress);
        }
         else if(checkAddress.toUpperCase()==("NO")){
           
            answers.push(checkAddress);
        }
        else {
            answers.push("valid");
        }
        
        
        }
        if(i==1){
            var checkSpecialty = prompt("Are you an IT graduate?? (note that all the answers should be (Yes/No):)");
            if(checkSpecialty.toUpperCase()==("YES")){
           
                answers.push(checkSpecialty);
            }
             else if(checkSpecialty.toUpperCase()==("NO")){
               
                answers.push(checkSpecialty);
            }
            else {
                answers.push("valid");
            }
        
        }
        if(i==2){
                var checkUser = prompt("Did you receive your username and password?? (note that all the answers should be (Yes/No):)");
                if(checkUser.toUpperCase()==("YES")){
           
                    answers.push(checkUser);
                }
                 else if(checkUser.toUpperCase()==("NO")){
                   
                    answers.push(checkUser);
                }
                else {
                    answers.push("valid");
                }
        }

       
    }
    console.log(answers);*/
   
    
