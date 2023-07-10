const url = "https://opentdb.com/api.php?amount=10"
const button = document.querySelector("button");
const centered = document.querySelector(".centered")

button.addEventListener("click", (e) => {
    e.preventDefault()
   
    getData()
    
})
function getData() {
    fetch(url).then(data => data.json()).then(json => {
        console.log(json)
        
        for(i=0; i < json.results.length ; i++) {
        centered.innerHTML += `<article class="card">
        <h2>${json.results[i].category}</h2>
        <p>${json.results[i].question}</p>
        <button>Show Answer</button>
        <p "class="hidden"${json.results[i].correct_answer}</p>
        </article>`
        const answerButton = document.querySelector("button")
        answerButton.addEventListener("click", (e) => {
            centered.innerHTML = `<article class="card">
            <p >${json.results[i].correct_answer}</p>`
    })
}
    }
)}