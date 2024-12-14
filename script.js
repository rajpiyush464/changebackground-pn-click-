const  randomcolor=function()
{
    const hex="0123456789ABCDEF"
    let col='#'
    for(let i=0;i<6;i++)
    {
        col+=hex[Math.floor(Math.random()*16)]
    }
    return col
}
let valid
const changecolour=function()
{
   if(!valid)
    {
        valid=setInterval(bg,1000)
    }  
     function bg()
    {
        document.body.style.backgroundColor=randomcolor()
    }
}
const stopchange=function()
{
    clearInterval(valid)
    valid=null
}

const start=document.querySelector('#start').addEventListener("click",changecolour)
const stop=document.querySelector('#stop').addEventListener("click",stopchange)
