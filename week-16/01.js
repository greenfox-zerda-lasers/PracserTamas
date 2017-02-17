// Create a function that counts the cars by colors
// With an output like: {red: 3, yellow: 2, white: 1, green: 1}


const cars = [{
    color: 'red',
    type: 'Volvo'
  }, {
    color: 'yellow',
    type: 'VW'
  }, {
    color: 'red',
    type: 'Ferrari'
  }, {
    color: 'white',
    type: 'Tesla'
  }, {
    color: 'yellow',
    type: 'Toyota'
  }, {
    color: 'red',
    type: 'Lada'
  }, {
    color: 'green',
    type: 'Trabant'
}];

function colorCounter(arr){
    const carsByColors = {};
    const colors = arr.map((e) => {
        // console.log(e.color);
        return e.color;
    });
    // console.log(x);
    colors.forEach((color) => {
        if (carsByColors[color]) {
            carsByColors[color] += 1;
        } else {
            carsByColors[color] = 1;
        }
    });
    // console.log(carsByColors);
    return carsByColors;
}
console.log(colorCounter(cars));

///////////////////////////////////////////////////////////////////////////

numbers = [4, 2, 10, 4, 8]

function reverser(arr){
    const newArr = [];
    for(i = arr.length-1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr
}
console.log(reverser(numbers));

// numbers.reverse()
// console.log(numbers);
