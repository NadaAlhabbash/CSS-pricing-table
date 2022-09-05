const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const p = document.querySelectorAll(".price>p");
const h1 = document.querySelectorAll(".price>h1");
const cards = document.querySelectorAll(".card");

const prices1 = ["US$68.97", "US$209.97", "US$299.97"];
const prices2 = ["US$215.88", "US$599.88", "US$899.88"];

btn1.addEventListener("click", () => {
  btn.style.left = "0";
  p.forEach((p) => {
    p.innerHTML = `every<br>3 months`;
  });

  for (let i = 0; i < prices1.length; i++) {
    h1[i].innerHTML = prices1[i];
  }
});

btn2.addEventListener("click", () => {
  btn.style.left = "150px";
  p.forEach((p) => {
    p.innerHTML = `per<br> year`;
  });

  for (let i = 0; i < prices2.length; i++) {
    h1[i].innerHTML = prices2[i];
  }
});
