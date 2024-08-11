// let div= document.querySelector('div')

// let p= document.createElement('h1')
// let h5= document.createElement('h5')
// let att=document.createAttribute('class')
// h5.innerText='hey!'
// p.innerText='hello'

// div.append(p,h5)
// console.log(div)

// // 1st
// let btn = document.querySelector('button')
// function fun1(){
//     console.log('hey!!!!!!');
// }

// 2nd
// btn.onclick=function(){
    // console.log('hey!!!!!')

// }

// 3rd
// btn.addEventlistener('click',()=>){
    // console.log('chin tapak dam');
// }

// let div= document.querySelector('div')
// let inp= document.querySelector('input')
// inp.addEventListener('input',(e)=>{
//     console.log(e.target.value);
//     div.innerText=e. target.value
// })

// method5 form sumit karte smya message show karna
let inp= document.querySelector('input')
let form= document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(inp.value);
})


