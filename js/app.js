import {
    SoundPlayer
} from './SoundPlayer.js';

class App {
    constructor() {
        this.soundPlayer = new SoundPlayer();

        const random = document.getElementsByTagName('button')[0]
        const ladder = document.getElementsByTagName('button')[1]
        const roulette = document.getElementsByTagName('button')[2]

        random.addEventListener('click', () => {
            this.soundPlayer.play('click')
            location.href = 'random.html'
        });

        ladder.addEventListener('click', () => {
            location.href = 'random.html'
        });

        roulette.addEventListener('click', () => {
            location.href = 'random.html'
        });
    }
}

window.onload = () => {
    new App()
}