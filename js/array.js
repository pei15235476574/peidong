// // 数组的方法
// // filter 过滤  返回条件为真的新数组 不操作原数组 
//  let ary = [2,3,4,5,7,9,11];
//  let newary = ary.filter(item=>item > 4 && item <9)
//  console.log(newary)
//  // map 映射 把一个数组映射成另一个新数组
//  let arr = [1,2,3];
//  let newarr = arr.map(item=>`<li>${item}</li>`)
//  let ar1 = arr.map(item=>item*2);
//  console.log(ar1);
//  console.log(newarr.join(' '))
//  //reduce 收敛
//  // 特点  1. return 后面的值会作为下一次的prev
//    //     2.next 第一次是数组的第二项 第二次是数组的第三项 以此类推
//    //     如果有传入参数就会把当前的数组的第一项作为next
//  let arry = [1,2,3,4];
// //  console.log(eval(arry.join('+')));
// let ar2 = arry.reduce((prev,next,index,array)=>{
//     console.log(prev,next)
//     return prev+next
// })
//  console.log(ar2);
//    let arrt = [{
//       name:'白菜',
//       price:30,
//       count:5
//     },
//     {
//         name:'鼠标',
//         price:70,
//         count:3  
//     },
//     {
//         name:'包',
//         price:200,
//         count:2
//     }
// ]
// //第一种解决方案 数组前面加个0 为了保证每个prev是个数字
// let ar3 = arrt.reduce(function(prev,next,index,array){
//    return prev + next.price*next.count
// },0)
// console.log('总价为:'+ ar3);
// let key = ['name','age','is'];
// let val = ['高鹏',30,'老男人'];
// let ob = key.reduce((prev,next,index)=>{
//     prev[next] = val[index];
//     return prev;
// },{})
// //第一次的prev是一个空对象 函数后面的参数就是第一次的prev
// console.log(ob);
// //数组去重
// let set = Array.from(new Set([1,1,1,1,2,5,5,6,5,2,5]));
// console.log(set);
// let a = [1,2,3,4,5];
// let b =a.every(item=>item>0);
// console.log(b);
// // let a = [1,2,3,4,5];
// function fn(...a){
//     console.log(a);
// }
// fn(1,2,3);
// function gun({a,b}){
//     return a+b;
// }
// console.log(gun({a:1,b:2}));

// // let promise1 = new Promise(function(resolve,reject){
// //         setTimeout(()=>{
// //             reject('reject');       
// //         },2000);
// //         setTimeout(()=>{
// //             resolve('success');
// //         },1000)
// // })
// // //如果请求成功就不会执行catch
// // promise1.then(function(data){
// //     console.log(data);
// // }).catch(function(err){
// //     console.log('链式调用'+err);
// // })
// // function runAsync(){
// //     let url = {
// //         name:'白菜',
// //         price:20,
// //         count:5
// //     };
// //     var p = new Promise(function(resolve,reject){
// //         setTimeout(function(){
// //             console.log('执行完成');
// //             resolve(url);
// //         },2000)
// //     })
// //     return p;
// // }
// // runAsync().then(function(data){
// //     console.log(data);
// // });
// let obj1 = {name:'zhangsan',age:30,b:function(age){age = 20}};
// let obj3 = {...obj1};
// console.log(obj3)
// let obj2 = JSON.parse(JSON.stringify(obj1));
// console.log(obj2);



// function deepClone(obj){
//     if(typeof obj === 'Object') return obj;
//     if(typeof obj === null) return null;
//     if(Object.prototype.toString.call(obj) === '[Object Date]') return new Date(obj);
//     if(Object.prototype.toString.call(obj)== '[Object Array]') return new Array(obj);
//     let cloneObj1 = new obj.constructor();
//     for(key in obj){
//             console.log(obj[key]);
//         cloneObj1[key] = typeof obj[key] === 'Object'?deepClone(obj[key]):obj[key];
//     }
//     return cloneObj1;
// }
// console.log(deepClone(obj1));


// let obj4 = obj1;
// console.log(obj4);

// // 转unicode
// function codetostring(name){
//     var result = String();
//     if(name == '' || name == null || name == undefined)return name;
//     for(var i = 0; i < name.length; i++){
//         result += name.charCodeAt(i)+',';
//     }
//     result = result.substring(0,result.length-1);
//     return result;
// }
// console.log(codetostring('裴栋'));
// //把unicode转换对应的值
// function stringtocode(cod){
//     var result = '',a = new Array();
//     a = cod.split(',');
//     for(var i = 0; i < a.length;i++){
//         result += String.fromCharCode(a[i]);
//     }
//     return result;
// }
// console.log(stringtocode('35060,26635'));

// var btn = document.getElementsByClassName('btn')[0];
// var arr = ['张飞','曹操','赵四','刘备','关羽','李逵'];
// btn.onclick = function(){
//     //splice 数组的添加与删除 第一个参数指的 删除开始的位置 第二个参数是删除的个数
//     var num = arr.splice(parseInt(Math.random()*arr.length),1);
//     var span = document.createElement('span');
//     span.innerHTML = num;
//     document.body.appendChild(span);
// }
// let names = ['name','age'];
// let vals = ['西昌市',30];
// let ok = names.reduce((prev,next,index)=>{
//     prev[next] = vals[index]
//     return prev;
// },{})
// console.log(ok);
Array.prototype.myreduce = function(cb,prev){
    for(let i = 0; i< this.length;i++){
        if(!prev){
            prev = cb(this[i],this[i+1],i,this);
            i++;
        }else{ //第二次进来或者有传入prev 如果有传值会直接走此方法 所以i++放在上面
            //cd的四个参数是对照reduce的prev next index array
            prev = cb(prev,this[i],i,this);
        }
    }
    return prev;
}


Array.prototype.myreduce = function(cb,prev){
    for(let i=0;i<this.length;i++){
        if(!prev){
            prev = cb(this[i],this[i+1],i,this);
            i++;
        }else{
            prev = cb(prev,this[i],i,this);
        }
    }
    return prev;
}
let arew = [1,2,3,4];
let s = arew.myreduce((prev,next,index)=>{
    console.log(prev,next,index);
    return prev+next
},10);
console.log(s);


let ares = [1,2,3,4,5,6];
// 不能使用箭头函数 箭头函数的this指向window
Array.prototype.myMap = function(callback){
    let newArrs = [];
    for(let i = 0; i < this.length;i++){
        newArrs.push(callback(this[i],i,this));
    }
    return newArrs;
}
let newarr = ares.myMap((item,index,array)=>{
   return item*2
});
console.log(newarr);
let ak = [1,2,3,4,5,6];
Array.prototype.myFind = function(cb){
    let newa = [];
    for(let i = 0; i < this.length; i++){
        // cb(this[i],i,this);
        if(cb(this[i],i,this)){
            newa.push(this[i]);
        }
    }
    return newa;
}
let at = ak.myFind(item=>item>2);
console.log(at);
// find
//找到条件为真就返回 不再继续查找
// let at = [1,2,3,4,5].find(item=>item>2);
// console.log(at);
// inclueds  找到是否有条件为真的项 如果有返回true 没有返回false
let aw = [1,2,3,4,5].includes(1);
console.log(aw);
// some   只要有一项条件为真 就返回true 否则返回false
//every   只要有一项条件不成立 就返回false
// let op = [1,2,3,4,5].some(item=>item>3);
// console.log(op);

let op = [1,2,3,4,5].every(item=>item>3);
console.log(op);
let uary = Array.from(new Set([1,2,2,5,5,2,5,5,2]));
console.log(uary);
//对象的属性名不可以重复
var arrq = [1,2,3,4,5,5,6,7];
var newObj = {}
var newArr = [];
for(var i = 0; i < arrq.length;i++){
    if(!newObj[arrq[i]]){
        newObj[arrq[i]] = true;
        newArr.push(arrq[i]);
    }
}
console.log(newArr);

let objr={name:1,o:{name:2}}
// let obje = {...objr};
// console.log(obje.o.name='4');
// console.log(objr);
//深拷贝 不可以改变原始对象  浅拷贝可以改变原始对象
// let get = JSON.parse(JSON.stringify(objr));
// console.log(get.o.name='5');
// console.log(get.o.name);
// console.log(objr.o.name);

var obj = {name:1,o:{name:2},b:function(age){this.age = age}};
function deep(obj){
    if(typeof obj === 'Object') return obj;
    if(typeof obj == null) return null;
    let clone = new obj.constructor();
    for(key in obj){
        clone[key] = typeof obj[key] === 'Object'?deep(obj[key]):obj[key];
    }
    return clone;
}
let aa = deep(obj);
aa.name = 'r';
aa.o.name = 'o';
console.log(obj);