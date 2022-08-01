var name = prompt("Please enter your name");
var gender = prompt("Please enter your gender(male or female)");
var age = prompt("Please enter your age");
ageCheck(age);
var welcomeMessage = confirm("Skip the welcoming message?");
welcomeMessageCheck(welcomeMessage);
var firstQuestion = prompt("Do you like Python? (Yes or No)")
var secondQuestion = prompt("Do you like Javascript? (Yes or No)")
var thirdQuestion = prompt("Do you like Java? (Yes or No)")


function ageCheck (age){
    if (age <= 0){
        alert("Age entered is not correct");
    }
}

function welcomeMessageCheck (welcomeMessage){
    if (welcomeMessage == false){
        welcome (gender);
        
    }
}
function welcome (gender){
    if (gender == "male") {
        alert("Welcome Mr ")
    } else if (gender == "female" ){
        alert("Welcome Ms")
    } else {
        alert("Welcome")
    }
}

    if (firstQuestion.length == 0){
        firstQuestion = "invalid"}


    if (secondQuestion == ""){
        secondQuestion = "invalid";
    }

    if (thirdQuestion == ""){
        thirdQuestion = "invalid";
    }

var answerArray = [firstQuestion,secondQuestion,thirdQuestion];

for (var i = 0; i < answerArray.length; i++){
    console.log(answerArray[i])
}







