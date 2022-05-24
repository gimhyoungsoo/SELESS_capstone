export class Footer{
    constructor(){
        document.querySelector('footer').insertAdjacentHTML(
            'beforeend',
            `<div>
                <button class="retry">다시하기</button>
                <button class="backward">뒤로가기</button>
            </div>`
        );
    }
}