
const demo = document.querySelector('#demo'); 
getLocation(); 
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition); 
    }
    else{
        demo.innerText = "no location access"; 
    }
}

function showPosition(position){
    console.log(position); 
    demo.innerText = position.coords.latitude + "," + position.coords.longitude; 
    let latlon = position.coords.latitude +"," + position.coords.longitude;
    // let img_url = 'https://maps.googleapis.com/maps/api/staticmap?center=Williamsburg,Brooklyn,NY&zoom=13&size=400x400&' +
    // 'markers=color:blue%7Clabel:S%7C11211%7C11206%7C11222'
    let img_url = 'https://maps.googleapis.com/maps/api/staticmap?center='+latlon+
    '&zoom=11&size=400x400&markers=color:red%7Clabel:A%7C10026%7C10038%7C10029';
    document.querySelector("#demo").innerHTML = "<img src='" + img_url+"'>";
}

