import {
  onScript
} from "../logic/numberlogic.js";
import Footer from "./footer.js";

export default class Number {
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
      <div class="countBox">
        <img class="bg" src="../src/resource/img/number_bg.svg">
        <h1>1~10 랜덤 뽑기</h1>
        <p class="countNumber">0</p>
        <div class="countButtonWrap">
          <button class="generate">Start!</button>
        </div>
      </div>
      `;
      this.section.appendChild(div);
    $(".countBox").css({
      "position": "absolute",
      "top": "57.6%",
      "left": "53.1%",
      "transform": "translate(-50%,-50%)",
      "padding": "52px 50px",
      "box-sizing": "border-box",
      "background-color": "#fff",
      "border-color": "#2f2e41",
      "border-radius": "7px",
      "box-shadow": "1px 1px 15px #2f2e41",
      "width": "100%",
      "max-width": "360px",
      "display": "flex",
      "flex-direction": "column",
      "justify-content": "center",
      "text-align": "center",
      "Background-color": "red",
      "z-index": "2"
    });
    $("h1").css({
      "background-color": "#00ff0000",
      "color": "#fff",
      "font-size": "18px",
      "z-index": "2"
    });
    $(".countButtonWrap > button").css({
      "color": "#fff",
      "font-weight": "bold",
      "border-radius": "5px",
      "background-color": "#0d47a1",
      "padding": "5px 10px",
      "z-index": "2"
    });
    $(".countButtonWrap > button:hover").css({
      "color": "#fff",
      "background-color": "#0d47a1",
      "box-shadow": "1px 1px 5px #2f2e41",
      "cursor": "pointer",
      "transition": "all ease 0.3s",
      "z-index": "2"
    });
    $(".bg").css({
      "position": "absolute",
      "bottom": "-99%",
      "left": "-63%",
      "margin": "auto",
      "width": "700px",
      "height": "950px",
      "z-index": "1"
    })
    
    onScript()
    Footer()
  }
}