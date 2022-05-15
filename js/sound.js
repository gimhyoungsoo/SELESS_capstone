export class SoundPlayer {
    constructor() {
        this.soundResources = {
            'click': new Audio('../media/audio/click.mp3')
        }
    }
    playSoundOf = (resourceName) => {
        const temp = this.soundResources['click'].play()
    }
}