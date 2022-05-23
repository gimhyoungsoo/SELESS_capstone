import * as module from './component/module.js'

const headerTag = document.querySelector('header')
const footerTag = document.querySelector('footer')
const navbar_list = document.getElementsByClassName('navbar_list')
const homeBtn = document.getElementsByClassName('navbar_item')[0]
const ladderBtn = document.getElementsByClassName('navbar_item')[1]
const contentWrap = document.getElementById('contentWrap');
const routes = {
    '/': module.home,
    '/contact': module.ladder 
};
contentWrap.innerHTML = routes['/'];
headerTag.innerHTML = module.header;
footerTag.innerHTML = module.footer;
footerTag.style.visibility = 'hidden'
// window.history.state = {data: '/'}
//초기화 끝---------------------------------------------------------------------------


function onNavigate(pathname) {
    window.history.pushState(
        { data: pathname },
        'title을 pushState로',
        window.location.origin + pathname //  `http://127.0.0.1:5500` + `/index.html`
    )
    contentWrap.innerHTML = routes[pathname]
    return false;
}

function displayOnOff(param){
    param.style.visibility == 'hidden'? param.style.visibility = 'visible' : param.style.visibility = 'hidden' 
}



// 이벤트리스너---------------------------------------------------------------------------
homeBtn.addEventListener('click',()=>{
    displayOnOff(footerTag) // navbar_list도 visibility onoff 설정하기
    onNavigate('/')
})
ladderBtn.addEventListener('click',()=>{
    displayOnOff(footerTag)
    onNavigate('/contact')
})

window.addEventListener('popstate',()=>{
    //맨처음 랜더링 됐을때 history.state가 null이여서 뒤로가기 시 오류 발생함
    if(window.history.state['data'] != null){
        contentWrap.innerHTML = routes[window.history.state['data']] 
    }    
})