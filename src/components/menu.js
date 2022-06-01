export default class Menu {
    constructor() {
        
    }
    init({$target}){
        this.section = document.createElement("section");
        console.log($target)
        $target.appendChild(this.section);
        this.render();
        console.log('메뉴 뷰 생성됨')
    }

    render() {
        const section =  document.querySelector("section")
        // "";
        // const div = document.createElement("div");
        // div.innerHTML =
        section.innerHTML = `  
        <div class="menu">
            <a href="./random/lucky.html"><button>게임 추천</button></a>
            <button class="toNumber">숫자 추첨</button>
            <a href="./RSP/RSP.html"><button>가위바위보</button></a>
            <a href="./Roulette/Roulette.html"><button>룰렛</button></a>
            <a href="./Ladder/Ladder.html"><button>사다리타기</button></a>
            
        </div>
        `;
        //<a href="./Number/Number.html"><button>숫자 추첨</button></a>
        // section.appendChild(div);
        document.querySelector("footer").innerHTML =null
    }
}