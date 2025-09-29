let submitButton = document.querySelector("#submit");
let a1Message = document.querySelector("#a1-result");
let a2Message = document.querySelector("#a2-result");
let a3Message = document.querySelector("#a3-result");
let a4Message = document.querySelector("#a4-result");
let a5Message = document.querySelector("#a5-result");

let a1Image = document.querySelector("#a1-img");
let a2Image = document.querySelector("#a2-img");
let a3Image = document.querySelector("#a3-img");
let a4Image = document.querySelector("#a4-img");
let a5Image = document.querySelector("#a5-img");
a1Image.style.display = "none";
a2Image.style.display = "none";
a3Image.style.display = "none";
a4Image.style.display = "none";
a5Image.style.display = "none";
//localStorage.setItem("attempts",0);
let attempts = localStorage.getItem("attempts");
if (!attempts) {
    attempts = 0;
  } else {
    attempts = parseInt(attempts, 10);
}
let playTime = document.querySelector("#playtime");
playTime.innerText = `TotalPlayTime: ${attempts}`;
localStorage.setItem("attempts",attempts + 1);

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


function shuffle(node) {
    for (let i = node.children.length; i >= 0; i--) {
      node.appendChild(node.children[Math.random() * i | 0]);
    }
}
  
shuffle(document.getElementById("q3Cover"));
shuffle(document.getElementById("fruit"));


submitButton.addEventListener('click', function(){
    // Question 1
    let answer1 = document.querySelector("#a1").value;
    if(answer1.toLowerCase() === "blue"){
        a1Message.innerText = "Correct!";
        a1Image.style.display = "inline";
        a1Image.src = "./asset/img/check.png";
        document.querySelector('#q1').style.backgroundColor = "green";
        score += 20;
    } else {
        a1Message.innerText = "Incorrect, try again.";
        a1Image.style.display = "inline";
        a1Image.src = "./asset/img/xmark.png";
        document.querySelector('#q1').style.backgroundColor = "red";
    }

    // Question 2
    let answer2 = document.querySelector("input[name=colors]:checked")?.value;
    if(answer2 === "green") {
        a2Message.innerText = "Correct!";
        a2Image.style.display = "inline";
        a2Image.src = "./asset/img/check.png";
        score += 20;
        document.querySelector('#q2').style.backgroundColor = "green";
    } else {
        a2Message.innerText = "Incorrect, try again.";
        a2Image.style.display = "inline";
        a2Image.src = "./asset/img/xmark.png";
        document.querySelector('#q2').style.backgroundColor = "red";
    }


    // Question 3
    //for chekckboxes, you need to use querySelectorAll
    let answer3 = document.querySelectorAll('input[name=sql]:checked');
    let bothSelected = 0;

    
    for (const node of answer3) {
        if (node.value === 'SELECT' || node.value === 'WHERE') {
            bothSelected += 1;
        }
    }
    if (bothSelected === 2 && answer3.length === 2) {
        a3Message.innerText = "Correct!";
        a3Image.style.display = "inline";
        a3Image.src = "./asset/img/check.png";
        score += 20;
        document.querySelector('#q3').style.backgroundColor = "green";
    } else {
        a3Message.innerText = "Incorrect, try again.";
        a3Image.style.display = "inline";
        a3Image.src = "./asset/img/xmark.png";
        document.querySelector('#q3').style.backgroundColor = "red";
    }

    // Question 4
    let answer4 = document.querySelector("#math").value;
    if(answer4 === "100") {
        a4Message.innerText = "Correct!";
        a4Image.style.display = "inline";
        a4Image.src = "./asset/img/check.png";
        score += 20;
        document.querySelector('#q4').style.backgroundColor = "green";
    } else {
        a4Message.innerText = "Incorrect, try again.";
        a4Image.style.display = "inline";
        a4Image.src = "./asset/img/xmark.png";
        document.querySelector('#q4').style.backgroundColor = "red";
    }

    //Question 5
    let answer5 = document.querySelector('#fruit')?.value;
    if(answer5 === "mango") {
        a5Message.innerText = "Correct!";
        a5Image.style.display = "inline";
        a5Image.src = "./asset/img/check.png";
        score += 20;
        document.querySelector('#q5').style.backgroundColor = "green";
    } else {
        a5Message.innerText = "Incorrect, try again.";
        a5Image.style.display = "inline";
        a5Image.src = "./asset/img/xmark.png";
        document.querySelector('#q5').style.backgroundColor = "red";
    }

    //Display Score
    if(score >= 80){
        document.querySelector("#score-result").textContent = "Congratulations!";
    }else{
        document.querySelector("#score-result").textContent = "";
    }

    document.querySelector("#score").innerText = score;
    score=0;


});
