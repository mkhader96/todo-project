var name = prompt("Please enter your name");
var gender = prompt("Please enter your gender(male or female)");
var age = prompt("Please enter your age");
ageCheck(age);
var welcomeMessage = confirm("Skip the welcoming message?");
welcomeMessageCheck(welcomeMessage,name);
var firstQuestion = prompt("Do you like Python? (Yes or No)")
var secondQuestion = prompt("Do you like Javascript? (Yes or No)")
var thirdQuestion = prompt("Do you like Java? (Yes or No)")


function ageCheck (age){
    while (1){
        if (age <= 0){
          alert("Age entered is not correct");
          age = prompt("Please enter your age")
        } else {
            break;
        }
    }
}

function welcomeMessageCheck (welcomeMessage,name){
    if (welcomeMessage == false){
        welcome (gender,name);
        
    }
}
function welcome (gender,name){
    if (gender == "male") {
        alert("Welcome Mr " + name)
    } else if (gender == "female" ){
        alert("Welcome Ms " + name)
    } else {
        alert("Welcome " + name)
    }
}

    if (firstQuestion.length == 0){
        firstQuestion = "invalid"}


    if (secondQuestion.length == 0){
        secondQuestion = "invalid";
    }

    if (thirdQuestion.length == 0){
        thirdQuestion = "invalid";
    }

var answerArray = [firstQuestion,secondQuestion,thirdQuestion];

for (var i = 0; i < answerArray.length; i++){
    console.log(answerArray[i])
}







