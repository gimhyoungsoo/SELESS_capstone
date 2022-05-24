import * as module from './component/module.js'
import {
    SoundPlayer
} from './lib/sound.js'


class App {
    constructor() {
        const headerTag = document.querySelector('header')
        const footerTag = document.querySelector('footer')
        const navbar_list = document.querySelector('.navbar_list')
        const randomBtn = document.querySelector('.game1')
        const ladderBtn = document.querySelector('.game2')
        const contentWrap = document.querySelector('#contentWrap');

        new module.Footer();
        const soundPlayer = new SoundPlayer() //객체 생성  
        const routes = {
            '/': module.home,
            '/randomgame': module.random,
            '/laddergame': module.ladder
        };
  
        headerTag.innerHTML = module.header; //초기화
        
        footerTag.style.visibility = 'hidden'
        window.history.replaceState({
            data: '/'
        }, '주소창 초기화,', '/')


        //함수 생성 ----------------------------------------------------------------------
        function onNavigate(pathname) { //경로 이동
            window.history.replaceState({
                    data: pathname
                },
                '주소변경',
                window.location.origin + pathname //  `http://127.0.0.1:5500` + `/index.html`
            )
            displayOnOff(pathname)
        }

        function displayOnOff(pathname) { // 요소 보이기, 감추기
            if (window.history.state['data'] === '/') { //메뉴화면 일때
                headerTag.style.visibility = 'visible'
                navbar_list.style.visibility = 'visible'
                footerTag.style.visibility = 'hidden'
                contentWrap.innerHTML = ''
            } else { //다른 화면일때
                headerTag.style.visibility = 'hidden'
                navbar_list.style.visibility = 'hidden'
                footerTag.style.visibility = 'visible'
                contentWrap.innerHTML = routes[pathname]
            }
        }

        //이벤트리스너 ↓------------------------------------------------------------------
        randomBtn.addEventListener('click', () => {
            soundPlayer.playSoundOf('click');
            onNavigate('/randomgame')
        })
        ladderBtn.addEventListener('click', () => {
            soundPlayer.playSoundOf('click');
            onNavigate('/laddergame')
        })

        document.querySelector('.backward').addEventListener('click', () => {
            console.log('뒤로가기')
            onNavigate('/')
        })
        document.querySelector('.retry').addEventListener('click', () => {
            console.log('다시하기')
            //ex) ladder.play()
        })
    }
}
window.onload = () => {
    new App()
}