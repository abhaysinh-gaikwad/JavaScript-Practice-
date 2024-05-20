// var Person =function(pName){
//     var name = pName;
    
//       this.getName =function(){
//     return name;
//       }
//     }
    
//  var person =new Person("Neelesh");
//     console.log(person.getName());


let str = "hello world";

str = str.replace(/l/g, 'o');

console.log(str); // Output: "heooo worod"

const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => {
  console.log("Accumulator:", accumulator, "Current Value:", currentValue);
  return accumulator + currentValue;
}, 0);

console.log("Sum:", sum); // Output: 15

// const cartItems = [
//   { ksin: '362', pack_id: '362-1', quantity: 1 },
//   { ksin: '231', pack_id: '231-1', quantity: 2 },
//   { ksin: '231', pack_id: '231-3', quantity: 3 }
// ];

// const prices = [
//   { ksin: '231', prices: [{ pack_id: '231-1', price: { cent_amount: 1000, fraction: 100 }}, { pack_id: '231-3', price: { cent_amount: 1400, fraction: 100 }}] },
//   { ksin: '362', prices: [{ pack_id: '362-1', price: { cent_amount: 1600, fraction: 100 }}] }
// ];

// let totalPrice = cartItems.reduce((acc, curr) => {
//   let ksin = curr.ksin;
//   let priceList = prices.filter(item => item.ksin === ksin);
//   let pack_id = curr.pack_id;
//   let packPrice = priceList[0].prices.filter(item => item.pack_id === pack_id);
//   let totalAmount = packPrice[0].price.cent_amount / packPrice[0].price.fraction;
//   acc += totalAmount*curr.quantity;
//   return acc;
// }, 0);

// console.log(totalPrice);


// // Custom Map function expression
// const customMap = function(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(callback(array[i], i, array));
//   }
//   return result;
// };

// // Custom Reduce function expression
// const customReduce = function(array, callback, initialValue) {
//   let accumulator = initialValue === undefined ? array[0] : initialValue;
//   let startIndex = initialValue === undefined ? 1 : 0;
//   for (let i = startIndex; i < array.length; i++) {
//     accumulator = callback(accumulator, array[i], i, array);
//   }
//   return accumulator;
// };

// // Custom Filter function expression
// const customFilter = function(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// };

// // Example arrays
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [10, 20, 30, 40, 50];

// // Example callbacks
// const multiplyByTwo = function(value) {
//   return value * 2;
// };

// const sumReducer = function(accumulator, currentValue) {
//   return accumulator + currentValue;
// };

// const isEven = function(value) {
//   return value % 2 === 0;
// };

// // Example usage
// console.log("Mapped Array (array1 * 2):", customMap(array1, multiplyByTwo)); // Output: [2, 4, 6, 8, 10]
// console.log("Mapped Array (array2 * 2):", customMap(array2, multiplyByTwo)); // Output: [20, 40, 60, 80, 100]

// console.log("Sum (array1):", customReduce(array1, sumReducer, 0)); // Output: 15
// console.log("Sum (array2):", customReduce(array2, sumReducer, 0)); // Output: 150

// console.log("Filtered Array (even numbers from array1):", customFilter(array1, isEven)); // Output: [2, 4]
// console.log("Filtered Array (even numbers from array2):", customFilter(array2, isEven)); // Output: [10, 20, 30, 40, 50]


//   let flightList = window.flightList;
//   let priceSortOrder = 'asc'; // Initially set to 'asc'
//   let ratingSortOrder = 'asc'; // Initially set to 'asc'

//   // Render initial flights
//   renderFlights();

//   // Add button click event
//   let options ={
//     "amount": {
//       "cent_amount": 12000,
//       "fraction": 100
//     },
//     "methods": [
//       {
//         "amount": {
//           "cent_amount": 1800,
//           "fraction": 100
//         },
//         "lines": [
//           {
//             "amount": {
//               "cent_amount": 900,
//               "fraction": 100
//             },
//             "quantity": 2
//           }
//         ]
//       },
//       {
//         "amount": {
//           "cent_amount": 10200,
//           "fraction": 100
//         },
//         "lines": [
//           {
//             "amount": {
//               "cent_amount": 5100,
//               "fraction": 100
//             },
//             "quantity": 2
//           }
//         ]
//       }
//     ]
//   }
// let totalAmount = options.methods.reduce((acc,curr)=>{
//     let total = curr.lines.reduce((acc,curr)=>{
//         acc += curr.amount.cent_amount / curr.amount.fraction  * curr.quantity
//         return acc;
        
//     },0)
//    acc += total;
    //    return acc
// }, 0)

// console.log(totalAmount)