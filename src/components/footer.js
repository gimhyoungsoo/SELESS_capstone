import { Main } from "../main.js"

export default function Footer() {

    const footer = document.querySelector('footer')
    footer.innerHTML = `
        <button class="return">메뉴로 돌아가기</button>
        `
    footer.addEventListener("click", () => {
        const section = document.querySelector('section')
        document.querySelector(".contents_warp").removeChild(section)
        const main = new Main()
        
        
    })
    console.log('footer() 작동')

}