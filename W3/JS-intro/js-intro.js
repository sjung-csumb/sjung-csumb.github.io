// alert("Hello World!");
// alert(new Date());
// h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "black";
// h1.style.textAlign = "center";
// h1.style.fontFamily = "Arial, sans-serif";
// h1.style.padding = "20px";
// h1.style.border = "5px solid blue";
// h1.style.borderRadius = "15px";
// h1.style.boxShadow = "5px 5px 15px rgba(0, 0, 0, 0.3)";
// h1.style.textTransform = "uppercase";
// h1.style.letterSpacing = "2px";
// h1.style.wordSpacing = "5px";
// h1.style.lineHeight = "1.5";
// h1.style.opacity = "0.9";
// h1.style.transition = "all 0.3s ease";
// h1.addEventListener("mouseover", function() {
//     h1.style.color = "yellow";
//     h1.style.backgroundColor = "blue";
//     h1.style.transform = "scale(1.2)";
// });
// h1.addEventListener("mouseout", function() {
//     h1.style.color = "red";
//     h1.style.backgroundColor = "black";
//     h1.style.transform = "scale(1)";
// });
// h1.style.cursor = "pointer";
// h1.style.userSelect = "none";
// h1.style.zIndex = "10";
// h1.style.position = "relative";


// let year = today.getFullYear();
// console.dir(today);
// console.dir(year);
let today = new Date();
let month = getMonthName(today.getMonth());
console.log(month);

document.getElementById("btn").addEventListener("click", displayDate);

function getMonthName(monthIndex){
    if(monthIndex == 8){
        return "September";
    }else{
        return "Not September";
    }
}


function displayDate(){
    today = new Date();
    let dateElement = document.getElementById("output");
    dateElement.textContent = today.toDateString();
    dateElement.style.color = "green";
    dateElement.style.textAlign = "center";
    dateElement.style.fontFamily = "Arial, sans-serif";
    dateElement.style.padding = "10px";
    dateElement.style.border = "3px solid green";
    dateElement.style.borderRadius = "10px";
    dateElement.style.backgroundColor = "lightgray";

    let fullDateElement = document.getElementById("fullDate");
    fullDateElement.textContent = today;
    fullDateElement.style.color = "blue";
    fullDateElement.style.textAlign = "center";
    fullDateElement.style.fontFamily = "Arial, sans-serif";
    fullDateElement.style.padding = "10px";
    fullDateElement.style.border = "3px solid blue";
    fullDateElement.style.borderRadius = "10px";
    fullDateElement.style.backgroundColor = "lightgray";
}

