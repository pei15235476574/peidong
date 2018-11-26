"use strict"; //严格模式b

//把多维数组转换成一维数组
// let ary = [1,2,[3,4],[5,6]];
// let a = [].concat.apply([],ary);
// let ar1 = [].concat(...ary);    
// function flag(arr){
//     let flagary = [];
//     for(let i = 0; i < arr.length; i++){
//         // console.log(arr[i]);
//          Array.isArray(arr[i])?flagary = flagary.concat(flag(arr[i])):flagary.push(arr[i]);
//     }
//     return flagary;
// }
// console.log(flag(ary));
// let obj = {};

// console.log(ar1);
// let re = ary.reduce(function(prev,next,index,array){},[])
// console.log(re);
function multiply(x,y){
    return x *y
}
var result = multiply(20,1);
console.log(result) 