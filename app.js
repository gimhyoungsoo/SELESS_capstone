import * as module from './component/module.js'
import { SoundPlayer } from './lib/sound.js'

class App {
    constructor() {
        const headerTag = document.querySelector('header')
        const footerTag = document.querySelector('footer')
        const navbar_list = document.querySelector('.navbar_list')
        const randomBtn = document.querySelector('.game1')
        const ladderBtn = document.querySelector('.game2')
        const rouletteBtn = document.querySelector('.game3')
        const rspBtn = document.querySelector('.game4')
        const numDrawBtn = document.querySelector('.game5')
        const contentWrap = document.querySelector('#contentWrap');

        const soundPlayer = new SoundPlayer() // 객체 생성
        new module.Footer();
        const routes = {
            '/': module.home,
            '/randomgame': module.random,
            '/laddergame': module.ladder,
            '/rspgame' : module.rsp
        };
  
        headerTag.innerHTML = module.header; // 초기화
        footerTag.style.visibility = 'hidden'
        window.history.replaceState({
            data: '/'
        }, '주소창 초기화,', '/')

        //함수 생성 ----------------------------------------------------------------------
        function onNavigate(pathname) { //경로 이동
            window.history.replaceState(
                {data: pathname},
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
                contentWrap.innerHTML = null
            } else { //다른 화면일때
                headerTag.style.visibility = 'hidden'
                navbar_list.style.visibility = 'hidden'
                footerTag.style.visibility = 'visible'
                // contentWrap.innerHTML = routes[pathname]
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

        rouletteBtn.addEventListener('click',()=>{
            soundPlayer.playSoundOf('click');
            onNavigate('/roulettegame')
            this.rouletteObj = new module.Roulette()           
            this.rouletteObj.run()
        })

        rspBtn.addEventListener('click',()=>{

            console.log('클릭')

            soundPlayer.playSoundOf('click');
            onNavigate('/rspgame')
            this.rspObj = new module.Rsp()           
            this.rspObj.run()
        })

        numDrawBtn.addEventListener('click',()=>{

            console.log('클릭')

            soundPlayer.playSoundOf('click');
            onNavigate('/numberDraw')
            this.numDrawObj = new module.NumberDraw()           
            this.numDrawObj.run()
        })

        document.querySelector('.backward').addEventListener('click', () => {
            console.log('뒤로가기')
            onNavigate('/')
        })
        
    }
}
window.onload = () => {
    new App()
}