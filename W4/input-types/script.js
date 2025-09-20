input = document.querySelector("#textInput");
button = document.querySelector("#textColorBtn");
numinput = document.querySelector("#numInput");
numbtn = document.querySelector("#numBtn");
body = document.querySelector("body");

button.addEventListener("click", ()=>{
    body.style.color = input.value;
});

numbtn.addEventListener("click", changeSize);

function changeSize(){
    // body.style.fontSize = numinput.value + "px";
    body.style.fontSize = `${numinput.value}em`;
};
