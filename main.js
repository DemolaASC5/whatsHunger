const logobar = document.querySelector('#logo'); 
logobar.addEventListener('click', onClick); 
let logo_counter = 0; 
let button1; 

const foods = []; 
const logoname = document.querySelector('#Title');
const margin = screen.width/4 -50;  
logoname.style.marginLeft = margin + "px"; 
// logoname.style.marginRight = "auto"; 
// console.log(logoname.style.width.length); 

function onClick(event){ 
    createNewNav();
    logo_counter++;  
}

function createNewNav(){
    if(logo_counter < 1 ){
        const navbar1 = document.querySelector('#navbar1');
        const links1 = document.createElement('div'); 
        links1.setAttribute("id","links1");
        const home1div = document.createElement('div');  
        const home1 = document.createElement('a'); 
        home1.innerText = "Home"; 
        home1.setAttribute('href',"#Home");
        home1div.appendChild(home1); 
        const about1div = document.createElement('div'); 
        const about1 = document.createElement('a'); 
        about1.innerText = "About"; 
        about1.setAttribute('href',"#About");
        about1div.appendChild(about1); 
        const donate1div = document.createElement('div'); 
        const donate1 = document.createElement('a'); 
        donate1.innerText = "Donate";
        donate1div.appendChild(donate1); 
        donate1.setAttribute('href',"#Donate"); 
        home1div.style.backgroundColor = "black"; home1div.style.paddingTop= "25px"; 
        about1div.style.backgroundColor = "black"; about1div.style.paddingTop= "25px"; 
        donate1div.style.backgroundColor = "black"; donate1div.style.paddingTop= "25px";
        donate1div.style.paddingBottom = "25px";  
        home1div.style.textAlign = "center"; 
        about1div.style.textAlign = "center"; 
        donate1div.style.textAlign = "center"; 
        links1.appendChild(home1div);
        links1.appendChild(about1div);
        links1.appendChild(donate1div);
        home1div.style.width = "20%"; 
        about1div.style.width = "20%"; 
        donate1div.style.width = "20%"; 
        links1.style.display = "float"; 
        links1.style.flexDirection= "column"; 
        // home1.style.marginLeft = "10px"; 
        // home1.style.marginRight = "10px";
        // about1.style.marginLeft = "10px"; 
        // about1.style.marginRight = "10px";
        // donate1.style.marginLeft = "10px"; 
        home1.style.color = "white"; home1.style.textDecoration = "none"; 
        about1.style.color = "white"; about1.style.textDecoration = "none"; 
        donate1.style.color = "white"; donate1.style.textDecoration = "none";  
        navbar1.appendChild(links1); 
        // logoname.innerText = "What's Hunger"; logoname.style.color ="white"; 
        // logoname.style.marginLeft = "" + screen.width/8 + "px" //"auto"; 
        // logoname.style.marginRight = "" +69+ "px";//"auto"; 
        // document.body.appendChild(logoname);
        // document.body.appendChild(links1);
        // document.body.appendChild(navbar1); 
        // const navbar = document.querySelector('#navbar'); 
        // navbar.appendChild(logoname); 
        navbar.appendChild(navbar1); 
        console.log(margin); 
    }
    else if (logo_counter % 2 == 0){
        navbar1.style.display = 'none'; 
    }
    else if (logo_counter % 2 != 0 && logo_counter > 1){
        navbar1.style.display = "initial"; 
    }
}

const video = document.querySelector('video');
const button = document.querySelector('button');
const canvas = document.querySelector('canvas');

canvas.width = 640;
canvas.height = 480;

button.addEventListener("click", snapShot)

function snapShot(){
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    let img1 = document.querySelector('canvas'); 
    img1 = canvas.toDataURL();
    img1 = img1.replace("data:image/png;base64,", "");

    const app = new Clarifai.App({
        apiKey: 'b9cc00249dc74a449cbdef1d7b0b82a5'
    });
    app.models.predict("bd367be194cf45149e75f01d59f77ba7", {base64: img1}).then(
        function(response) {
            const definefood = document.createElement('p'); 
            definefood.innerText = "Please choose an option that best identifies your food.";
            document.body.appendChild(definefood); 
            for (let i = 0; i < response.outputs[0].data.concepts.length; i++){
                if(response.outputs[0].data.concepts[i].value > 0.9){
                    foods.push(response.outputs[0].data.concepts[i].name); 
                    const food = document.createElement('button');
                    food.innerText = foods[i]; 
                    document.body.appendChild(food);   
                }
            }
            const none = document.createElement('button');
            none.setAttribute("id", "none");
            none.innerText = "None of the above"; 
            document.body.appendChild(none);    
            let button1 = document.querySelector('#none'); 
            button1.addEventListener('click', gotoMaps);  
            // do something with response
        },
        function(err) {
            console.log('it failed'); 
            console.log(err); 
        // there was an error
        }
    );
}

const constraints = {
    audio: false,
    video: true
}

function handleSuccess(stream){
    video.srcObject = stream;
    window.stream = stream;
}
 
 if(navigator.mediaDevices){
    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess);
 } else {
    alert("Sorry, try again.");
 } 

 
// const Clarifai = require('clarifai');
// function gotoMaps(){
//     console.log("hi"); 
//     document.querySelector('button').style.display = "none";
// }

function initMap() {
    console.log('this happens');
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}
