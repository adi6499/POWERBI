let answers = document.querySelector(".answers")
async function data(){
    const response = await fetch("./data.json")
    let data= await response.json()
    data.forEach((d,i)=>{
        console.log()
        answers.innerHTML+=`<div class="question"><b>${i+1}</b>. ${d.QUESTION}</div>
        <div class="answer"><b>ANS</b> :- ${d.ANSWER}</div>` 
    })
}
data()

let contain = document.querySelector(".contain")
let mode = document.querySelector(".mode")
let ding = document.querySelector(".ding")
mode.addEventListener("click",(e)=>{
        if(ding.innerHTML=="white"){
            contain.classList.add("backgroundDark")
            ding.classList.add("dingTranslate")
            ding.innerHTML = "black"
        }
        else if(ding.innerHTML=="black"){
            contain.classList.remove("backgroundDark")
            ding.classList.remove("dingTranslate")
            ding.innerHTML = "white"
        }
})


setTimeout(()=>{
    alert("Hey There Thankyou for opening hope you enjoyed it 😊")
},2000)