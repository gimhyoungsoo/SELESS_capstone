import {SoundPlayer} from './sound.js';
import {Random} from '../js/games/random.js';
import {Ladder} from '../js/games/ladder.js';
import {Roulette} from '../js/games/roulette.js';

class App {
    constructor() {
        this.soundPlayer = new SoundPlayer();
        this.game_random = new Random();
        this.game_ladder = new Ladder();
        this.game_roulette = new Roulette();

        const menu = document.querySelector('.menu');
        const random = document.getElementsByTagName('button')[0];
        const ladder = document.getElementsByTagName('button')[1];
        const roulette = document.getElementsByTagName('button')[2];

        random.addEventListener('click', () => {
            this.soundPlayer.playSoundOf('click');
            this.soundPlayer.soundResources['click'].addEventListener('ended',()=>{
                location.href = './random.html'
            })
            // if(this.soundPlayer.soundResources['click'].ended){
            //     location.href = './random.html'
            // }
            
            // this.game_random.show();
            // menu.style.display = 'none';
        });

        ladder.addEventListener('click', () => {

            this.game_ladder.show();
            menu.style.display = 'none';
        });

        roulette.addEventListener('click', () => {

            this.game_roulette.show();
            menu.style.display = 'none';
        });
    }
}

window.onload = () => {
    new App()
}