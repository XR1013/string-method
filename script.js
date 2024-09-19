console.log("test");

const h1 = document.querySelector("h1");
h1.innerText = "Test";

const h2 = document.querySelectorAll("h2");
const linkURL = "https://www.naver.com";
h2.innerHTML = `<a href =${linkURL}>naver</a>`;

const h3 = document.querySelector("h3");
// console.log(h3.innerText.length);
const h3_text = h3.innerText;
// h3문자열을 0위치에서부터 50번째 위치까지 자른 뒤
//  자른 문자열을 다시 h3.innerText 프로퍼티에 대입해서 적용
h3.innerText = h3_text.substring(0, 50);

// 미션 - 조건문을 활용해서 h3에 들어가는 문자 값이 50글자가 안되면 해당 문자를 그대로 출력하고 50글자가 넘어가면 50글자까지 자른 뒤 그 뒤에 ... 말줄임표 추가

/*
if (h3_text.length > 30) {
    h3.innerText = h3_text.substring(0, 30) + "...";
    } else {
    h3.innerText = h3_text;
}
*/

/*
if (h3_text.length > 30) h3.innerText = h3_text.substring(0, 30) + "...";
    else h3.innerText = h3_text;
*/

h3.innerText = h3_text.length > 30 ? h3_text.substring(0, 30) + "..." : h3_text;

//미션 - 위의 기능을 재사용하기 편하도록 함수로 패키징
// shortenText('h3', 30); 9시 30분까지