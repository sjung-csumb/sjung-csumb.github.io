let submitButton = document.querySelector("#submit");
let a1Message = document.querySelector("#a1-result");

let score = 0;
//generate random number order answers
let question3Options = [1, 2, 3];

//shuffle 
// let shuffledOptions = _.shuffle(question3Options);
// console.log(shuffledOptions);

// let question3Space = document.querySelector("#question3-space");

//create option 1. radio button
//repeat this using a for loop
//ramdonmize order could be used in midterm
// let radioInput1 = document.createElement("input");
// radioInput1.id = "1";
// radioInput1.type = "radio";
// radioInput1.name = "a3-answers";
// radioInput1.value = "1";
// question3Space.appendChild(radioInput1);

// let radioLabel = document.createElement("label");
// radioLabel.htmlFor = "1";
// radioLabel.innerText = "1";
// question3Space.appendChild(radioLabel);


submitButton.addEventListener('click', function(){
    // Question 1
    let answer1 = document.querySelector("#a1").value;
    if(answer1.toLowerCase() === "blue"){
        a1Message.innerText = "Correct!";
        document.querySelector('#q1').style.backgroundColor = "green";
        score += 20;
    } else {
        a1Message.innerText = "Incorrect, try again.";
        document.querySelector('#q1').style.backgroundColor = "red";
    }

    // Question 2
    let answer2 = document.querySelector("input[name=colors]:checked")?.value;
    if(answer2 === "green") {
        score += 20;
        document.querySelector('#q2').style.backgroundColor = "green";
    } else {
        document.querySelector('#q2').style.backgroundColor = "red";
    }


    // Question 3
    //for chekckboxes, you need to use querySelectorAll
    let answer3 = document.querySelectorAll('input[name=sql]:checked');
    let bothSelected = 0
    for (const node of answer3) {
        if (node.value === 'SELECT' || node.value === 'WHERE') {
            bothSelected += 1;
        }
    }
    if (bothSelected === 2 && answer3.length === 2) {
        score += 20;
        document.querySelector('#q3').style.backgroundColor = "green";
    } else {
        document.querySelector('#q3').style.backgroundColor = "red";
    }

    // Question 4
    let answer4 = document.querySelector("#math").value;
    if(answer4 === "100") {
        score += 20;
        document.querySelector('#q4').style.backgroundColor = "green";
    } else {
        document.querySelector('#q4').style.backgroundColor = "red";
    }

    //Question 5
    let answer5 = document.querySelector('#fruit')?.value;
    if(answer5 === "mango") {
        score += 20;
        document.querySelector('#q5').style.backgroundColor = "green";
    } else {
        document.querySelector('#q5').style.backgroundColor = "red";
    }

    //Display Score
    document.querySelector("#score").innerText = score;
    score=0;


});
