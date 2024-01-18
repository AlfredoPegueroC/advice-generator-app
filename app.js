const btn = document.querySelector("#btn");
const adviceNumber = document.querySelector("#adviceNumber");
const advicetxt = document.querySelector(".advice");


 async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const {slip: {id, advice}} = await res.json();
  console.log(advice)
  adviceNumber.innerHTML = id;
  advicetxt.innerHTML = advice;
};
getAdvice();
btn.addEventListener("click", (e) => {
  e.preventDefault();
  getAdvice();
});
