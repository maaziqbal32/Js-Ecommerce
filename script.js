const bar=document.getElementById('bar')
const btn=document.getElementById('close')
const nav=document.getElementById('navbar')
if(bar){
    bar.addEventListener('click',() =>{
    nav.classList.add('active')
    })
}

if(close){
    btn.addEventListener('click',() =>{
    nav.classList.remove('active')
    })
}

