import {Footer} from './view/footer.js'

window.onload = () => {
    const main = document.querySelector("main");

    const footer = document.querySelector("footer");
    new Footer()
    footer.style.display = 'none'
    document.querySelector('.return').addEventListener('click',()=>{
            //* 주소변경 이벤트 Dispatch
        window.dispatchEvent(locationChangeEvent);
    })
    

    const handleLocationChange = (e) => {
        const {
            href
        } = e.detail;
        console.log(href);

        //* 주소변경
        window.history.pushState(undefined, "타이틀", href);
        //* 콘텐츠 렌더링
        renderContents();
    };
    //* locationchange 이벤트리스너
    window.addEventListener("locationchange", handleLocationChange);

    const homeHTML = `
    <div>
        <button type='button' class="menu_rsp">move to 가위바위보</button>
        <button type='button'>move to /some</button>
        <button type='button'>move to /some</button>
    </div>  `
    main.innerHTML = homeHTML

    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const targetUrl = "some?foo=bar";
        const { pathname } = window.location;

        //* 같은 URL 은 스택에 추가하지 않는다
        if (targetUrl === pathname) {
            return;
        }
        const locationChangeEvent = new CustomEvent("locationchange", {
            composed: true,
            detail: {
                href: "some"
            },
        });

        //* 주소변경 이벤트 Dispatch
        window.dispatchEvent(locationChangeEvent);
    });
    
    const renderContents = () => {
        const { pathname } = window.location;
        switch (pathname) {
            case "/dist/index.html":
                main.innerHTML = homeHTML;
                footer.style.display = 'none';
                break;
            case "/dist/some":
                main.innerHTML = '<div>some Contents</div>';
                footer.style.display = 'block';
                break;
            default:
                main.innerHTML = "<div>404</div>";
                footer.style.display = 'none';
        }
    };

    window.addEventListener("popstate", () => {
        renderContents();
    });

};