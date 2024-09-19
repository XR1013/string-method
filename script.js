// 미션 - 위의 구문을 다음과 같은 형태의 함수로 패키징
// changeText('h2', ' ', '/') 3시 25분까지 완성

function changeText(elem, spc1, spc2) {
    const el = document.querySelector(elem);
    const el_text = el.innerText;
    el.innerText = el_text.split(spc1).join(spc2);
}

changeText("h1", "-", ".");
changeText("h2", " ", " / ");
changeText("h3", "_", "+");
