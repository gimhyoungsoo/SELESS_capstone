export class Rsp {
    constructor() {
        document.querySelector('#contentWrap').insertAdjacentHTML(
            'beforeend',
            `<div class="RSP_container">
                <button id="RSP_scissors"><img class="RSP_img" src="../resource/RSP/scissors.png" alt="scissors"></button>
                <button id="RSP_rock"><img class="RSP_img" src="../resource/RSP/rock.png" alt="rock"></button>
                <button id="RSP_paper"><img class="RSP_img" src="../resource/RSP/paper.png" alt="paper"></button>
            </div>`
        );
        

    }
    run(){
        let playerStateChar = "";
        let playerState = 0;
        let comStateChar = "";
        let comState = 0;
        let result = 0;
        let win = 0;
        let defeat = 0;
        let draw = 0;

        const scissorsBtn = document.querySelector('#RSP_scissors')
        const rockBtn = document.querySelector('#RSP_rock')
        const papersBtn = document.querySelector('#RSP_paper')

        scissorsBtn.addEventListener('click',()=>{
            play(1)
        })
        rockBtn.addEventListener('click',()=>{
            play(2)
        })
        papersBtn.addEventListener('click',()=>{
            play(3)
        })

        function play(num) {
            if (num == 1) {
                playerStateChar = "가위";
                playerState = 1;
            }
            else if (num == 2) {
                playerStateChar = "바위";
                playerState = 2;
            }
            else {
                playerStateChar = "보";
                playerState = 3;
            }         
            setComState();
  
            setDistinct();
 
            showResult();
        }        
        
        
        function setComState() {
            
            var state = Math.floor(Math.random() * 3) + 1;
            comState = state;

            if (state == 1) {
                comStateChar = "가위";
            }
            else if (state == 2) {
                comStateChar = "바위";
            }
            else {
                comStateChar = "보";
            }
        }

      
        function setDistinct() {
            if (playerState == comState) {
                result = 0;
            }
            else { 
                
                if (playerState == 1) {
                    if (comState == 2) {
                        result = -1;
                    }
                    else if (comState == 3) {
                        result = 1;
                    }
                }
            
                else if (playerState == 2) {
                    if (comState == 1) {
                        result = 1;
                    }
                    else if (comState == 3) {
                        result = -1;
                    }
                }
                
                else {
                    if (comState == 1) {
                        result = -1;
                    }
                    else if (comState == 2) {
                        result = 1;
                    }
                }
            }
        }

        
        function showResult() {
            if (result == 0) {
                draw++;
                alert("당신 : " + playerStateChar + "\n컴퓨터 : " + comStateChar + "\n\n비겼습니다.");
                alert("현재 전적\n승 : " + win + "\n패 : " + defeat + "\n무 : " + draw + "\n\n승률 : " + getWinRate() + "%");
            }
            else if (result == 1) {
                win++;
                alert("당신 : " + playerStateChar + "\n컴퓨터 : " + comStateChar + "\n\n이겼습니다!");
                alert("현재 전적\n승 : " + win + "\n패 : " + defeat + "\n무 : " + draw + "\n\n승률 : " + getWinRate() + "%");
            }
            else {
                defeat++;
                alert("당신 : " + playerStateChar + "\n컴퓨터 : " + comStateChar + "\n\n졌습니다...");
                alert("현재 전적\n승 : " + win + "\n패 : " + defeat + "\n무 : " + draw + "\n\n승률 : " + getWinRate() + "%");
            }
        }

        
        function getWinRate() {
            var winRate = 0;

            if (win != 0) {
                
                winRate = (win / (win + defeat)) * 100;
            }
            else {
                winRate = 0;
            }

            return winRate;
        }
    }
      
}