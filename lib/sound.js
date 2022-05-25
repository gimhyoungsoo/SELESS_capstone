export class SoundPlayer {
    constructor() {
        this.resources = {
            'click': new Audio( './resource/audio/click.mp3')
        }
    }
    playSoundOf(param) {
        const sound = this.resources[param]
        sound.load();
        const promise = sound.play();
        if (promise !== undefined) { // On older browsers play() does not return anything, so the value would be undefined.
            promise
                .then(() => {
                    // Audio is playing.
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}