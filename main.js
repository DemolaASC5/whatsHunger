const logobar = document.querySelector('#logo'); 
logobar.addEventListener('click', onClick); 
let logo_counter = 0;
const logoname = document.querySelector('#Title');
const margin = screen.width/4 -50;  
logoname.style.marginLeft = margin + "px"; 
const button_div = document.querySelector('#button_div');  
const definefood = document.querySelector('#definefood'); 
definefood.style.display =  "none"; 
let foodelement; 


const food_form = document.querySelector('#what_food'); 
food_form.style.display = "none"; 
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
        home1.setAttribute('href',"index3.html");
        home1div.appendChild(home1); 
        const about1div = document.createElement('div'); 
        const about1 = document.createElement('a'); 
        about1.innerText = "Food Banks"; 
        about1.setAttribute('href',"index2.html");
        about1div.appendChild(about1); 
        const donate1div = document.createElement('div'); 
        const donate1 = document.createElement('a'); 
        donate1.innerText = "Donate Food";
        donate1div.appendChild(donate1); 
        donate1.setAttribute('href',"index.html"); 
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
        home1.style.color = "white"; home1.style.textDecoration = "none"; 
        about1.style.color = "white"; about1.style.textDecoration = "none"; 
        donate1.style.color = "white"; donate1.style.textDecoration = "none";  
        navbar1.appendChild(links1); 
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
    definefood.style.display =  "initial"; 
    const app = new Clarifai.App({
        apiKey: 'b9cc00249dc74a449cbdef1d7b0b82a5'
    });
    app.models.predict("bd367be194cf45149e75f01d59f77ba7", {base64: img1}).then(
        function(response) {
            const foods = [];

            for (let i = 0; i < response.outputs[0].data.concepts.length; i++){
                if(response.outputs[0].data.concepts[i].value > 0.9){
                    foods.push(response.outputs[0].data.concepts[i].name);   
                }
            }
            button_div.style.display = "initial"; 
            for(let i = 0; i < foods.length; i++){
                const food = document.createElement('button');
                food.setAttribute('id', foods[i]);
                food.innerText = foods[i];
                food.addEventListener('click', gotoMaps); 
                document.body.appendChild(food);
                button_div.appendChild(food); 
            }

            const food_form = document.querySelector('#what_food'); 
            const food_formp = document.querySelector('#what_food_p'); 
            const foodInput = document.querySelector('#foodInput');
            food_form.style.display = "inline-block";
            food_form.style.textAlign = "center"; 
            food_formp.style.marginLeft = "10px"; 

            const submit = document.querySelector('#submit'); 
            submit.addEventListener('click', function(evt) {
                evt.preventDefault();
                saveFood(foodInput.value);
            }); 

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

function gotoMaps(event){ 
    saveFood(event.srcElement.id);
}

function saveFood(food){
    button_div.style.display = 'none'; 
    food_form.style.display = "none"; 
    window.location.assign("index4.html?value=" + food); 
    foodelement = window.location.search.substring(7); 
    console.log(foodelement);
}

