// // const Clarifai = require('clarifai');

// const foods = []; 
// const app = new Clarifai.App({
//  apiKey: 'b9cc00249dc74a449cbdef1d7b0b82a5'
// });

// app.models.predict("bd367be194cf45149e75f01d59f77ba7", "https://cdn.cnn.com/cnnnext/dam/assets/171027052520-processed-foods-exlarge-tease.jpg").then(
//     function(response) {
//         console.log(response.outputs[0].data.concepts[0].value); 
//         for (let i = 0; i < response.outputs[0].data.concepts.length; i++){
//             if(response.outputs[0].data.concepts[i].value > 0.9){
//                 foods.push(response.outputs[0].data.concepts[i].name); 
//                 const food = document.createElement('button');
//                 food.innerText = foods[i];
//                 document.body.appendChild(food);   
//             }
//             // console.log(response.outputs[0].data.concepts[i].name); 
//         }
//         // do something with response
//     },
//     function(err) {
//         console.log('it failed'); 
//       // there was an error
//     }
//   ); 
