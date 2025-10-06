async function setUp(){
    try{
        let statesResponse = await fetch("https://csumb.space/api/allStatesAPI.php");
        if(!statesResponse.ok){
            throw new Error("Response failed.");
        }
        let statesData = await statesResponse.json();
        console.log (statesData);

        let statesSelect = document.querySelector("#stateSelect");
        for(let stateData of statesData){
            let stateOption = document.createElement("option");
            stateOption.id = stateData.usps;
            stateOption.value = stateData.usps;
            stateOption.textContent = stateData.state;
            stateOption.setAttribute('usps', stateData.usps)
            statesSelect.appendChild(stateOption);
        }
        

    } catch(apiError){
        console.log(apiError);
    }
    updateCounty();

}
setUp();

const stateSelect = document.querySelector('#stateSelect')
// let countySelect = document.querySelector("#countySelect");
stateSelect.addEventListener("change", updateCounty);
async function updateCounty(){
    // console.log(ev.target.usps)
    console.log(stateSelect.selectedOptions[0])
    let usps = stateSelect.selectedOptions[0].getAttribute('usps').toLowerCase();
    try{
        let countyResponse = await fetch(`https://csumb.space/api/countyListAPI.php?state=${usps}`);
        if(!countyResponse.ok){
            throw new Error("Response failed.");
        }
        let countyData = await countyResponse.json();
        console.log (countyData);

        let countySelect = document.querySelector("#countySelect");
        countySelect.innerHTML = '';
        for(let cData of countyData){
            let countyOption = document.createElement("option");
            countyOption.id = cData.county;
            countyOption.value = cData.county;
            countyOption.textContent = cData.county;

            countySelect.appendChild(countyOption);
        }
        

    } catch(apiError){
        console.log(apiError);
    }
}


//  Update values for City, Latitude, and Longitude when changing Zip Code.
const zipCode = document.querySelector("#zipCode");
zipCode.addEventListener("input",async ()=>{
    try{
        let infoResponse = await fetch(`https://csumb.space/api/cityInfoAPI.php?zip=${zipCode.value}`);
        if(!infoResponse.ok){
            throw new Error("Response failed.");
        }
        let infoData = await infoResponse.json();
        console.log (infoData);
        if(!infoData){
            document.querySelector("#zipCheckDisplay").textContent = "Zip code not found.";
            document.querySelector('#info').innerHTML = `<p><b>City:</b></p> 
            <p><b>Latitude:</b></p> 
            <p><b>Longitude:</b></p>`
            return;
        } else{
            document.querySelector("#zipCheckDisplay").textContent = "";
            document.querySelector('#info').innerHTML = `<p><b>City:</b>${infoData.city}</p> 
            <p><b>Latitude:</b>${infoData.latitude}</p> 
            <p><b>Longitude:</b>${infoData.longitude}</p>`
        }
    
    } catch(apiError){
        console.log(apiError);
    }

});

// 2) Display suggested password when clicking on "Password" text box
let pwBox = document.querySelector("#pw");
let pwMsg = document.querySelector("#pwMsg");
let pwCheck = document.querySelector("#pwCheck");
let pwCheckMsg = document.querySelector("#pwCheckMsg");
pwBox.addEventListener("click",async ()=>{
    let pwResponse = await fetch("https://csumb.space/api/suggestedPassword.php?length=8");
    let randomPW = await pwResponse.json();
    pwBox.value = randomPW.password;

});
// pwBox.addEventListener("input",async ()=>{
//     pwLenCheck();

// });

// pwCheck.addEventListener("input",async ()=>{
//     pwMatchingCheck();

// });
function pwLenCheck() {
    if(pwBox.value.length < 6){
        pwMsg.innerHTML = "Too Short!";
        pwMsg.style.color = "red";
    }
    else{
        pwMsg.innerHTML = "Good!";
        pwMsg.style.color = "green";
    }

}

function pwMatchingCheck(){
    if(pwCheck.value == "") return;

    if(pwBox.value != pwCheck.value){
        pwCheckMsg.innerHTML = "Retype Password";
        pwCheckMsg.style.color = "red";
    }
    else{
        pwCheckMsg.innerHTML = "Matching password";
        pwCheckMsg.style.color = "green";
    }

}

// 3) After entering a desired username, a message is displayed saying whether the username is available or not  (not available names are: eeny, meeny, miny, maria)
// https://csumb.space/api/usernamesAPI.php?username=eeny
let avail = document.querySelector('#avail');
let valid = document.querySelector('#valid');
let nickname = document.querySelector("#nickname");
nickname.addEventListener("input",async ()=>{
    let availableAPI = await fetch(`https://csumb.space/api/usernamesAPI.php?username=${nickname.value}`);
    let available = await availableAPI.json();
    console.log(available.available);
    if(available.available == true){
        avail.innerHTML = "available";
        avail.style.color = "green";
    }
    else{
        avail.innerHTML = "not available";
        avail.style.color = "red";
    }
});


document.querySelector("#submit").addEventListener("click",function (){
    if(nickname.value.length < 3){
        valid.innerHTML = "Username must have at least 3 characters.";
        valid.style.color = "red";
    }
    else{
        valid.innerHTML = "valid";
        valid.style.color = "green";
    }

    pwLenCheck();
    pwMatchingCheck();
});



/*let twoLetterAbbr = await fetch("https://csumb.space/api/countyListAPI.php?state=ca");
let checkUsername = await fetch("https://csumb.space/api/usernamesAPI.php?username=eeny");
let pwGen = await fetch("https://csumb.space/api/suggestedPassword.php?length=8");
*/
