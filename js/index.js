// let arr = [1,2,3,[5,[8,9,10,11]]];
// let [,a,,[b,[,,...c]]] = arr;
// console.log(a,b,c);
// let sum = b=>c=>b+c;
// //有大于两个箭头函数以上的叫做高阶函数
// console.log(sum(1)(2));
//模板字符串 ``
// 变量用${}解析
let a = 'word';
let str = `<div>hello ${a}</div>`;
console.log(str);
// (padEnd padStart) 补全 
// padStart 往前补 padEnd 往后补
let  n = '1';
//第一个参数是表示不足几位补全 第二个参数是不足补什么
console.log(n.padStart(2,0));
//includes  是否包含 返回布尔值
let v = 'abc';
console.log(v.includes('a'));
//剩余运算符
let [r,...ars] = [1,2,3,4,5,6];
function fn(x,...arg){
    console.log(arg);
}
fn(1,2,3,4,5)
//展开运算符
// console.log([3,4].concat([5,6]));
// console.log([...[3,4],...[5,6]]);
// // {name:'lilei'} {age:30}
// console.log({...{name:'lilei'},...{age:30}});
// let obj = {name:'lilei'};
//浅拷贝
// let cloneObj = {...obj};
// cloneObj.name = 'lili';
// // console.log(obj.name);
// console.log(cloneObj);
//如何对一个对象进行深拷贝
let obj1 = {name:'lilei',age:30,like:{name:'lili'},b:function(){},c:new Date()};
cloneObj1 = JSON.parse(JSON.stringify(obj1));
//上面这种方式不可以拷贝函数 undefined null ......
console.log(cloneObj1);
function deepClone(obj){
    if(typeof obj === 'Object') return obj; // 如果不是Object 直接返回
    if(typeof obj ===  null) return null;
    if(Object.prototype.toString.call(obj) === '[Object Date]') return new Date(obj);
    if(Object.prototype.toString.call(obj) === '[Object RegExp]') return new RegExp(obj);
    let cloneObj1 = new obj.constructor();//保留原始继承
    for(key in obj){
        cloneObj1[key] = typeof obj[key] === 'Object'?deepClone(obj[key]):obj[key];
    }
    return cloneObj1;
}
console.log(deepClone(obj1));