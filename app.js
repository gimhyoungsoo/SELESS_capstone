import * as module from './component/module.js'

const routes = {
    '/': module.home,
    '/contact': module.ladder 
};

//초기화
const homeBtn = document.getElementsByClassName('navbar_item')[0]
const ladderBtn = document.getElementsByClassName('navbar_item')[1]
const contentWrap = document.getElementById('contentWrap');
contentWrap.innerHTML = routes['/'];
// window.history.state = {data: '/'}


const onNavigate = (pathname) => {
    window.history.pushState(
        { data: pathname },
        'title을 pushState로',
        window.location.origin + pathname //  `http://127.0.0.1:5500` + `/index.html`
    )
    contentWrap.innerHTML = routes[pathname]
    return false;
}

homeBtn.addEventListener('click',()=>{
    console.log('home clicked')
    onNavigate('/')
})
ladderBtn.addEventListener('click',()=>{
    console.log('ladder clicked')
    onNavigate('/contact')
})

window.addEventListener('popstate',()=>{
    if(window.history.state['data'] != null){
        contentWrap.innerHTML = routes[window.history.state['data']] 
    }
    
    //맨처음 랜더링 됐을때 history.state가 null이여서 뒤로가기 시 오류 발생함
})