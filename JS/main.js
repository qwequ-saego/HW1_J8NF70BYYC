const date_btn= document.getElementById('dateBtn');

const date2= document.getElementById('date');


// function setDate(e) {
// document.getElementById('date').innerHTML= Date();

// setTimeout(()=>{
//     date.innerHTML=''
// },3000)
// }

date_btn.addEventListener('click', e=>{
    document.getElementById('date').innerHTML= Date();

setTimeout(()=>{
    date.innerHTML=''
},3000)
});