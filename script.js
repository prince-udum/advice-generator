const tossDice = document.querySelector(".dice-container");
const count = document.querySelector("#count");
const adviceText = document.querySelector("#advice");

const url = "https://api.adviceslip.com/advice";

const fetchAdvice = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const { id, advice } = data.slip;
    count.innerText = id;
    adviceText.innerText = advice;
  } catch (error) {
    console.log(error);
  }
};

tossDice.addEventListener("click", fetchAdvice);
