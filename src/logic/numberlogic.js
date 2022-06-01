export function onScript() {
    console.log('script activate')
    let generateNum = document.querySelector(".countNumber");
    let button = document.querySelector(".generate");

    function generator() {
        const randomNum = Math.floor(Math.random() * 10 + 1);
        //Math.random 0~1 사이의 난수 생성
        //Math.floor 소수점을 내림시켜 정수로 만듦
        generateNum.innerHTML = randomNum;
    }
    button.addEventListener("click", generator);
}