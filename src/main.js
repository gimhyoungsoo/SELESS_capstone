import App from './app.js';

export function Main() {
    const app = new App(document.querySelector('.contents_warp'));

    document.querySelector('.toNumber').addEventListener('click', () => {
        app.Number(document.querySelector('.contents_warp'));

    })
}
window.onload=()=>{new Main()}
    
