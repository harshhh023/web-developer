// function step1(fn){

//     setTimeout(()=>{
//         console.log('photo selected');
// fn()
//     } , 5000);
// }

// function step2(fn){
//     setTimeout(()=>{
//         console.log('filteer');
//         fn()
//     } , 4000);
// }

// function step3(fn){
//     setTimeout(()=>{
//         console.log('captions added');
//           fn()
//     } , 3000);
// }

// function step4(fn){
//     setTimeout(()=>{
//         console.log('photo  posted');
//           fn()
//     } , 2000);
// }


// // // note= callbackhall topic
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4(()=>{

//             })
//         })
//     })

// })


// step1()
// step2()
// step3()
// step4()

//  note promisses topic=

// let promise= new Promise((resolve, reject) => {
//     let reason='barish'
//     if(reason==='barish'){
//         reject('err')
//     }
//     else{
//         resolve('res')
//     }


//     // setTimeout(()=>{
//         // reject()
//     //    res()
    
// })

// console.log(promise,"hello harsh");

// promise.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })



// note2= 2nd method

// let step1= function(fn){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('photo selected')
//         },4000)
//     })
// }

// let step2= function(fn){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('photo filterred')
//         },3000)
//     })
// }
// let step3= function(fn){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('photo filterred')
//         },2000)
//     })
// }
// let step4= function(fn){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('photo filterred')
//         },1000)
//     })
// }

// step1().then((data)=>{
//     console.log('data');
//     return step2()
//     .then((filtered)=>{
//         console.log('filterd')
//     })

// })

// step1().then((data)=>{
//     console.log (data)
//     return step2().then((data)=>{
//         console.log(data)
//         return step3().then((data)=>{
//             console.log(data)
//             return step4().then((data)=>{
//                 console.log(data)

//             })
//         })
//     })
// })

// const func=async function (){ 
//     const data1=await step1()
//     console.log(data1)

    

// }
// func()

// async function kalajadu (){
//     let data= await step1()
//     console.log(data);
//     let data1= await step2()
//     console.log.apply(data1)
// }
// kalajadu()
    

// note= dom document Object modal



document.getElementById('one')

// let btn= document.getElementsByClassName('two')
// let bnt= document.getElementById('one')
let btn= document.querySelectorAll('h1')
for(let i of btn){
    i.style.color='red'
}

console.log(btn,"btnnn");



