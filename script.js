const button = document.querySelector(".card--button");
const adviceId = document.querySelector(".adviceId");
const cardContent = document.querySelector(".card--content");

button.addEventListener("click", getNewAdvice);

// Empty is bad so...
window.addEventListener("load", getNewAdvice);

async function getNewAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  adviceId.innerText = data.slip.id;
  cardContent.innerText = `“${data.slip.advice}”`;
}
