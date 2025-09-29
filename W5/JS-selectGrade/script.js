let grade = document.querySelector('#grade');
let submitBtn = document.querySelector('#submit');
let scoreBoard = document.querySelector('#scoreBoard');


submitBtn.addEventListener("click",() => {
    let score = grade.value;
    if(score == "A+"){
        scoreBoard.textContent = "A+";
        scoreBoard.style.color = "#77FF77";
    }else if(score == "A"){
        scoreBoard.textContent = "A";
        scoreBoard.style.color = "Green";
    }else if(score == "B"){
        scoreBoard.textContent = "B";
        scoreBoard.style.color = "Salmon";
    }else if(score == "C"){
        scoreBoard.textContent = "C";
        scoreBoard.style.color = "red";
    }
});