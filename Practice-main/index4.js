// const cartItems = [
//     {
//       ksin: '362',
//       pack_id: '362-1',
//       quantity:3
//     },
//     {
//       ksin: '231',
//       pack_id: '231-1',
//       quantity:4
//     },
//     {
//       ksin: '231',
//       pack_id: '231-3',
//       quantity:1
//     }
//   ];
   
//   const prices = [
//     {
//       ksin: '231',
//       prices: [
//         {
//           pack_id: '231-1',
//           price: {
//             cent_amount: 1000,
//             fraction: 100
//           }
//         },
//         {
//           pack_id: '231-3',
//           price: {
//             cent_amount: 1400,
//             fraction: 100
//           }
//         }
//       ]
//     },
   
//     {
//       ksin: '362',
//       prices: [
//         {
//           pack_id: '362-1',
//           price: {
//             cent_amount: 1600,
//             fraction: 100
//           }
//         }
//       ]
//     }
//   ];

   let result=cartItems.reduce((acc,curr)=>{
     //  console.log(curr.quantity);
     let ksin=curr.ksin;
    let pricedetails=prices.filter(item=>item.ksin==ksin);
     let id=curr.pack_id;
     let packprice=pricedetails[0].prices.filter(item=>item.pack_id==id);
     // console.log(packprice);
     let amount=packprice[0].price.cent_amount/packprice[0].price.fraction;
     acc +=amount*curr.quantity;
     return acc;
   },0)

   console.log(result)


// //   16*3=48
// //   40
// //   14

// let data={
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
   let totalAmount=data.methods.reduce((acc,curr)=>{
     let data1=curr.lines.reduce((acc,curr)=>{
         //  console.log(curr);
         acc +=curr.amount.cent_amount/curr.amount.fraction*curr.quantity
         return acc;
     },0)
    
 return acc+data1;
   },0)
   
   console.log(totalAmount)
const axios=require("axios");
const { promises } = require("dns");
async function fetch(){
    try {
        const promises=[];
        const calls=3;
        for(let i=0;i<calls;i++){
            promises.push(axios.get("https://randomuser.me/api/"))
        }
        
        const res=await Promise.all(promises);
        const data=res.data;

        console.log(data.results[0].name);

 console.log(data.results[0].email);
    } catch (error) {
        console.log(error)
    }
}
fetch();
let a=3;



