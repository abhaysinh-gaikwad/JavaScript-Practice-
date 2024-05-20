let  data=[
    {"a":1},
    {"b":1},
    {"c":1,"d":1}
]






data.forEach((ele) => {
//    console.log( Object.keys(ele))
    Object.keys(ele).forEach((key) => {
        console.log(key, ele[key]);
    });
});
