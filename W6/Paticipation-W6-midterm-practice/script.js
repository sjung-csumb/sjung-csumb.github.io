console.log("hi there");

//Variables
let body = document.querySelector("body");
let quoteGenBtn = document.querySelector("#quoteGenBtn");
let bioBtn = document.querySelector("#bioBtn");
let bioContent = document.querySelector("#bioContent");
let bioText = document.querySelector("#bioText");
let bioImg = document.querySelector("#bioImg");
let lanSelect = document.querySelector("#lanSelect");

let display=0;
//Events
quoteGenBtn.addEventListener("click",quoteUpdate);
bioBtn.addEventListener("click",displayBio);

//make sure to add async function to make api request work properly.
async function quoteUpdate(){
    console.log("f");
    let randomQuoteElement = document.querySelector("#randomQuote");
    
    let randomQuoteResponse = await fetch("https://csumb.space/api/famousQuotes/getRandomQuote.php");
    let randomQuoteData = await randomQuoteResponse.json();
    console.log(randomQuoteData);
    
    randomQuoteElement.textContent = randomQuoteData.quoteText;
    
    bioText.textContent = randomQuoteData.bio;
    bioImg.src = randomQuoteData.picture;

}

function displayBio(){
    if(display == 1){
        bioContent.style.display = "none";
        // bioText.style.display = "none";
        // bioImg.style.display = "none";
        display=0;
    }else{
        bioContent.style.display = "flex";
        // bioText.style.display = "flex";
        // bioImg.style.display = "flex";
        display=1;
    }
}
function shuffle(node) {
    for (let i = node.children.length; i >= 0; i--) {
      node.appendChild(node.children[Math.random() * i | 0]);
    }
}

async function randomBackground(){
    let pixabayResponse = await fetch("https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=space");
    let pixabayData = await pixabayResponse.json();
    console.log(pixabayData);
    body.style.backgroundImage = `url(${pixabayData.hits[Math.random()*50|0].webformatURL})`;
}
shuffle(lanSelect);
quoteUpdate();
randomBackground();