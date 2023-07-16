const url = "https://opentdb.com/api.php?amount=10";
const button = document.querySelector("button");
const centered = document.querySelector(".centered");

button.addEventListener("click", (e) => {
  e.preventDefault();
  getData();
});

function getData() {
  fetch(url)
    .then((data) => data.json())
    .then((json) => {
      console.log(json);

      for (let i = 0; i < json.results.length; i++) {
        const card = document.createElement("article");
        const question = document.createElement("p");
        const answerButton = document.createElement("button");
        const answer = document.createElement("p");

        card.classList.add("card");
        question.innerText = json.results[i].question;
        answerButton.innerText = "Show Answer";
        answerButton.addEventListener("click", () => {
          answer.innerText = json.results[i].correct_answer;
        });

        card.appendChild(question);
        card.appendChild(answerButton);
        card.appendChild(answer);
        centered.appendChild(card);
      }
    });
}
