
//  move(ball1,200,function(){
//     move(ball2,200,function(){
//         move(ball3,200,function(){});
//     })
// })
function move(ele,target){
    return new Promise(function(resolve,reject){
           let m = 0;
            window.trim = setInterval(()=>{
                    m+=5;
                    ele.style.left =m+'px';
                if(parseInt(ele.style.left) > target){
                    clearInterval(window.trim);
                    ele.style.left = target + 'px';
                    resolve('成功');
                }
               
            },13)
    })
}
// function move(ele,target){
//     return new Promise(function(resolve,reject){
//         let m = 0;
//         window.timer = setInterval(()=>{
//             m+=5;
//             ele.style.left = m+ 'px';
//            if(parseInt(ele.style.left) > target){
//                clearInterval(window.timer);
//                ele.style.left = target + 'px';
//                resolve();
//            }
//         },13)
       
//     })
// }
//     // move(ball1,200).then(function(data){
//     //     return move(ball2,200)
//     // }).then(function(data){
//     //     return move(ball3,200);
//     // }).then(function(data){
//     //     return move(ball4,200);
//     // }).then(function(data){
//     //     move(ball5,200);
//     // })



// // async 表示函数里面有异步操作 返回Promise 和await 配合使用 await 后面通常跟着Promise (也可以是普通值)
// //await 等待
// async function m(){
//     await move(ball1,200);
//     await move(ball2,200);
//     await move(ball3,150);
//     await move(ball4,160);
//     await move(ball5,170);
// }
// m();

// Promise.reject('');//直接失败
// Promise.resolve('');//直接成功
// Promise.all();// 接受由Promise 组成的数组 都成功之后才会走then方法

let p1 = new Promise((resolve,reject)=>{
    console.log(1);
    resolve('1')
})
let p2 = new Promise((resolve,reject)=>{
    console.log(2);
    resolve('2')
})

Promise.race([p1,p2]).then(function([r1,r2]){ //r1 r2 相当于解构赋值
    console.log(r1,r2 +' race');
});
// Promise.all([p1,p2]).then(function(data){
//     console.log(data);
// });

function* g(){
    yield 'a';
    yield 'b';
    yield 'c';
    return 'ending';
}
var gen = g();
console.log(gen.next());