// import {
//     SoundPlayer
// } from '../lib/sound.js'

export class NumberDraw {
    constructor() {
        // const soundPlayer = new SoundPlayer()
        document.querySelector('#contentWrap').insertAdjacentHTML(
            'beforeend',
            `<div id="numberDraw_total">
                <div class="numberDraw_countBox">
                    <img class="numberDraw_bg" src="../resource/image/numberDraw_bg.svg">
                    <h1>1~10 랜덤 뽑기</h1>
                    <p class="numberDraw_countNumber">0</p>
                    <div class="numberDraw_countButtonWrap">
                        <button class="numberDraw_generate">Start!</button>
                    </div>
                </div>
            </div>`
        );
    }

    run() {
        const generateNum = document.querySelector(".numberDraw_countNumber");
        const button = document.querySelector(".numberDraw_generate");

        function generator() {
            console.log('스타트 버튼 클릭')
            const randomNum = Math.floor(Math.random() * 10 + 1);
            //Math.random 0~1 사이의 난수 생성
            //Math.floor 소수점을 내림시켜 정수로 만듦
            generateNum.innerHTML = randomNum;
        }
        button.addEventListener("click", generator);
    }

}