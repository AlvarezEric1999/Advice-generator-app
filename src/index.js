
const parrafo = document.getElementById('text')
const button = document.getElementById('btn')
const idText  = document.getElementById('adviceId')






getData()



function getData(){

    const randomId = Math.floor(Math.random()*100 )+1
    
    // console.log(randomId)

    fetch(`https://api.adviceslip.com/advice/${randomId}`)
    .then((res)=> res.json())
    .then((res)=> {
        const message = res.slip.advice
        const id = res.slip.id
        parrafo.innerText= message
        idText.innerText= id}
    )
    
    .catch(err => getData())
   

}


button.addEventListener('click',getData);

