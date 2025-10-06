let bg = document.querySelector("body");
let bgSelect = document.querySelector("#bgSelect");
let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click",async function() {
    let pixabayResponse = 
    await fetch("https://pixabay.com/api/?key=20426927-497d14db9c234faf7d0df8317&per_page=50&orientation=horizontal&q="
        +bgSelect.value);
    let pixabayData = await pixabayResponse.json();
    console.log(pixabayData.hits[0].webformatURL);
    bg.style.backgroundImage = `url('${pixabayData.hits[0].webformatURL}')`;
    

    
    
    // alert(bgSelect.value);
})