// import {
//     onScript
// } from "../logic/numberlogic.js";
import Footer from "./footer.js";

export default class Rsp {
    constructor({
        $target
    }) {
        this.section = document.querySelector("section");
        // $target.appendChild(this.section);
        this.render();
    }

    render() {
        this.section.innerHTML = "";
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="container">
            <img class="bg" src="../src/resource/img/rsp_bg.svg">
            <button class="button" type="button" onclick="play(1)"><img src="../src/resource/img/scissors.png" alt="scissors"></button>
            <button class="button" type="button" onclick="play(2)"><img src="../src/resource/img/rock.png" alt="rock"></button>
            <button class="button" type="button" onclick="play(3)"><img src="../src/resource/img/paper.png" alt="paper"></button>
        </div>
        `;
        this.section.appendChild(div);
        
        // CSS 적용 예시
        // $(".container").css({ 
        //     "position": "absolute",
        //     "width": "1000px",
        //     "height": "auto",
        //     "top" :"calc(60% - 155px)",
        //     "left": "calc(65% - 500px)"
        // });
        
        
        Footer()
    }
}