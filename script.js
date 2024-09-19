console.log("test");

const h1 = document.querySelector("h1");
h1.innerText = "Test";

const h2 = document.querySelectorAll("h2");
const linkURL = "https://www.naver.com";
h2.innerHTML = '<a href =${linkURL}>naver</a>';