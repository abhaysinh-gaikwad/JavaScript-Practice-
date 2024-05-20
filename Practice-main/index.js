// let s="Abhaysinh  Gaikwad    a"
// let ans=s.trim().split(' ');
// console.log(ans);
// let n=ans.length;
// console.log(ans[n-1].length);


// let arr=[1,2,3,4,5];
// let res=arr.map((ele)=>{
//   return ele*2;
// })
// let res = arr.map((ele)=> ele* 2)
// console.log(res);


// let res2=arr.filter((ele)=>{
//     return ele>2;
// })
// let res2 = arr.filter((ele)=> ele > 2);
// console.log(res2);


// let res3=arr.reduce((acc,curr)=>{
//     return  acc + curr
// },0)
// let  res3 = arr.reduce((acc, curr)=> acc + curr, 0)
// console.log(res3);


// IFFE
// (function square(num){
//     console.log( num*num)
// })(5);

// (function cube(num){
//   console.log(num*num*num);
// })(3);

//  console.log(a);
// const a=10;//can't acess before

// console.log(b);
// let b=10;//can't acess before 

// console.log(c);
// var c=10;//undefined



// var x=10;
// var fun=function(){
// console.log(x);
// var x=20;
// }
// fun();//undefined

// //rest spread
// function sum(...nums){ //...nums is rest
// console.log(nums)

// }
// var arr=[5,6];
// sum(...arr)//here it is called spread 


// let str = "Abhaysinh Gaikwad";
// rev=''
// for(let i=str.length-1; i>=0; i--){
//   rev += str.charAt(i);
// }
// console.log(rev)

// let str = "Abhaysinh Gaikwad";
// let reversedStr = str.split('').reverse().join('');
// console.log(reversedStr);


// process.next
// Promise
// setImidiate
// setInterval


//  function fun(){
//    console.log(arguments)
// }
//  fun(1,2,3)
// let fun=()=>{
//     console.log(arguments)
// }
// fun(1,2,3)

// function outerFunction() {
//     let outerVariable = 'I am outer!';
    
//     function innerFunction() {
//         console.log(outerVariable);
//     }
    
//     return innerFunction;
// }

// let closure = outerFunction();
// closure(); // Output: I am outer!

//  let arr=[1,2,3,4,5,6];
// let res=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         res.push(arr[i]);
//     }
// }
// let res = arr.filter((ele)=> {
//   return ele%2==0;
// })
// console.log(res);


// Create a Promise
// let myPromise = new Promise((resolve, reject) => {
   
//     setTimeout(() => {
       
//         resolve("Data fetched successfully!");
    
//     }, 2000); // Simulate a delay of 2 seconds
// });

// myPromise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

//  0 undefined null false NaN ""   falsy values


//  let str = "Abhay This is a good day";
//   function reverseString(str) {
//       let reversed = '';
//       let word = '';
//       for (let i = str.length - 1; i >= 0; i--) {
//           if (str[i] !== ' ') {
//               word = str[i] + word;
//           } else {
//               reversed += word + ' ';
//               word = '';
//           }
//       }
//       reversed += word;
//       return reversed;
//   }

//  console.log(reverseString(str));


//  let inputString="This is a good day";
//  function reverseString(str){
//      let res=inputString.split(' ').reverse().join(' ');
//      return res
//  }
//  console.log(reverseString(inputString));

//using inbuilt function
// function replaceWord(sentence) {
//     sentence = sentence.replace(/\bHunting\b/g, "xyz");
//     sentence = sentence.replace(/\bHunt\b/g, "123"); 
//     return sentence;
// }

// let input = "Hunt in Hunting";
// let replacedSentence = replaceWord(input);
// console.log(replacedSentence); 

// function replaceWords(sentence) {
//     let words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === "Hunt") {
//             words[i] = "123";
//         } else if (words[i] === "Hunting") {
//             words[i] = "xyz";
//         }
//     }
//     return words.join(' ')
// }

// let input = "Hunt in Hunting";
// let replacedSentence = replaceWords(input);
// console.log(replacedSentence); 

// function Split(sentence, delimiter) {
//     let result = [];
//     let word = '';
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] !== delimiter) {
//             word += sentence[i];
//         } else {
//             result.push(word);
//             word = '';
//         }
//     }
//     if (word !== '') {
//         result.push(word);
//     }
//     return result;
// }

// function replaceWords(sentence) {
//     let words = Split(sentence, ' ');
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === "Hunt") {
//             words[i] = "123";
//         } else if (words[i] === "Hunting") {
//             words[i] = "xyz";
//         }
//     }
//     return words.join(" ");
// }

// let input = "Hunt in Hunting";
// let replacedSentence = replaceWords(input);
// console.log(replacedSentence); 


// function foo(x) {
//     if(x>0){
//         return Math.abs(x);
//     }else{

//         return  x;
//     }
// }

// // Test cases
// console.log(foo(foo(10))); // Output: -10
// console.log(foo(foo(-5))); // Output: 5

// function foo(x) {
//     if(x>0){
//         return Math.abs(x)
//     }
//  }
//  function foo(x) {
//      let original=x;
//      let ans=Math.abs(x);
//      if(original==ans){
//           return -ans;
//      }else{
//          return -ans;
//      }
//  }

// let funcount=0;
//   function foo(x) {
//     if(x>0){
//       return -x
      
//     }else{
//       return x;
      
//     }
//     funcount++;
//   }


// // Test cases
//  console.log(foo(foo(10)));  // Output: -10

//  console.log(foo(foo(-5)));
//  console.log(funcount)  // Output: 5

//  const http=require('http');
//  const server=http.createServer((req,res)=>{
//    res.end("hello world")
//  })
//  const port =3000;
//  server.listen(port,()=>{
//    console.log("server is running")
//  })

// console.log(x);

// let x=10;

// const array = [1, 2, 3, 4, 5,6];
// const slicedArray = array.slice(1, 4);

// console.log(slicedArray); // [2, 3, 4]
// console.log(array);       // [1, 2, 3, 4, 5] (original array remains unchanged)

// function add(x,y){
//   return x+y;
// }
// var a=0;
// var b=0;
// function curriedAdd(x) {
//   return function(y) {
//     a=x;
//     b=y;
//       return x + y;
//   };
// }

// // Usage
// const add5 = curriedAdd(5); // Create a specialized function that adds 5 to its argument
// console.log(add5(3)); // Output: 8
// console.log(a,b)


function fun(a,b){
  return a*b;
}

let result=function (a,b){
  return a*b;
}
console.log(fun(5,10));

