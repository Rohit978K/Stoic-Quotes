const button = document.querySelector("button");

const cardBody = document.querySelector(".card-body");

const quoteElem = document.querySelector(".quote");
const authorElem = document.querySelector(".author");

let quotesArr = [];
const getQuotesData = async () => {
  const res = await fetch("./data.json");
  const data = await res.json();
  const { quotes } = data;
  quotesArr = quotes;
};
getQuotesData();

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotesArr.length);
  console.log(quotesArr[randomIndex]);
  return quotesArr[randomIndex];
}

button.addEventListener("click", () => {
  const quoteData = getRandomQuote();
  quoteElem.textContent = quoteData.text;
  authorElem.textContent = "- " + quoteData.author;
});
