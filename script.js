shortenText("h1", 5);
shortenText("h2", 5);
shortenText("h3", 20);

function shortenText(elem, len) {
//첫 번째 인수로 받은 문자값으로 DOM요소 선택

const el = document.querySelector(elem);
//해당 요소의 문자값 변수에 할당

const el_text = el.innerText;
//해당 돔요소에 innerText 프로퍼티에 대입되는 우항을 3항연산자로 연산 처리후 대입

el.innerText = 
el_text.length > len ? el_text.substring(0, len) + "..." : el_text;
}