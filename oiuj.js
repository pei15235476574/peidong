let arr = [1,2,3,[4,5],[5,6,[6,8]]];
let flag = [].concat.apply([],arr);
let flag1 = [].concat(...arr);
// console.log(flag1);
let newArr = [];
function flat(arr){
    for(let i = 0; i < arr.length;i++){
        Array.isArray(arr[i])?flat(arr[i]):newArr.push(arr[i]);
    }
    return newArr;
}
// console.log(flat(arr));
let r = arr.join().split(',');
// console.log(r);
function faltten(arr){
    return arr.reduce((prev,next)=>{
        return prev.concat(Array.isArray(next)?faltten(next):next);
    },[])
}
console.log(faltten(arr));

// 分类 type 值相同的放在一起
let obj = [{type:1,name:'张三'},{type:2,name:'王五'},{type:1,name:'赵四'},{type:2,name:'王哈'},{type:2,name:'王哈'}];
let newArr = {};
obj.forEach(v=>{
    newArr[v.type] || (newArr[v.type]=[]);
    console.log(newArr[v.type]);
    newArr[v.type].push(v);
})
console.log(newArr);

function faltten(){
    //不管有没有异常 finally块中的代码都会执行 当try catch中有return时finally仍然会执行；
    try{
        return 1;
    }catch{
        return 2;
    }finally{
        return 3;
    }
}
console.log(faltten());

