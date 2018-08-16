const logobar = document.querySelector('#logo'); 
logobar.addEventListener('click', onClick); 
let logo_counter = 0;
const logoname = document.querySelector('#Title');
const margin = screen.width/4 -50;  
logoname.style.marginLeft = margin + "px"; 

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