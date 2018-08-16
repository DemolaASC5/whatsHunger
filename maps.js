
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
    '&zoom=13&size=400x400&markers=color:red%7Clabel:A%7C10026%7C10038%7C10029';
    document.querySelector("#demo").innerHTML = "<img src='" + img_url+"'>";
}



// function initMap() {
//     var directionsService = new google.maps.DirectionsService;
//     var directionsDisplay = new google.maps.DirectionsRenderer;
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 7,
//       center: {lat: 41.85, lng: -87.65}
//     });
//     directionsDisplay.setMap(map);

//     var onChangeHandler = function() {
//       calculateAndDisplayRoute(directionsService, directionsDisplay);
//     };
//     document.getElementById('start').addEventListener('change', onChangeHandler);
//     document.getElementById('end').addEventListener('change', onChangeHandler);
//   }

//   function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//     directionsService.route({
//       origin: document.getElementById('start').value,
//       destination: document.getElementById('end').value,
//       travelMode: 'WALKING'
//     }, function(response, status) {
//       if (status === 'OK') {
//         directionsDisplay.setDirections(response);
//       } else {
//         window.alert('Directions request failed due to ' + status);
//       }
//     });
//   }

// var map;
//       var infowindow;

//       function initMap() {
//         var pyrmont = {lat: -33.867, lng: 151.195};

//         map = new google.maps.Map(document.getElementById('map'), {
//           center: pyrmont,
//           zoom: 15
//         });

//         infowindow = new google.maps.InfoWindow();
//         var service = new google.maps.places.PlacesService(map);
//         service.nearbySearch({
//           location: pyrmont,
//           radius: 500,
//           type: ['store']
//         }, callback);
//       }

//       function callback(results, status) {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//           for (var i = 0; i < results.length; i++) {
//             createMarker(results[i]);
//           }
//         }
//       }

//       function createMarker(place) {
//         var placeLoc = place.geometry.location;
//         var marker = new google.maps.Marker({
//           map: map,
//           position: place.geometry.location
//         });

//         google.maps.event.addListener(marker, 'click', function() {
//           infowindow.setContent(place.name);
//           infowindow.open(map, this);
//         });
//       }