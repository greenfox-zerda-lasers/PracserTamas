// setTimeout
//
// setTimeout(() => { console.log('wait 3 sec'); }, 3000);
// console.log('immediately');

// setInterval
//
// setInterval(() => { console.log('every half sec'); }, 500);
// console.log("hey just once");


// CALLBACKHELL

// setTimeout(() => {
//   console.log('after 3 sec');
//   setTimeout(() =>{
//     console.log('after 3 + 5 sec');
//   }, 5000
// );
// }, 3000);
// console.log('immediately');
// setInterval(() => { console.log('every sec'); }, 1000);
