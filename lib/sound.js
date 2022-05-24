export class SoundPlayer {
    constructor() {
        this.resources = {
            'click': new Audio('lib\resource\click.mp3')
        }
    }
    playSoundOf(param) {
        const audio = this.resources[param]
        console.dir(audio)
        audio.load()
        audio.play()
    }
}