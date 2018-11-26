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
function flatten(arr) {  
    return arr.reduce((prev, next)=> {
        return prev.concat(Array.isArray(next) ? flatten(next) : next);
    }, []);
}
console.log(flatten(arr));