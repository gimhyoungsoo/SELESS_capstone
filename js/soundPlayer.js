export class SoundPlayer{
    constructor(){
        const obj = {
            click:'audio/click.mp3'        
        }
    }
    play(param){
        // console.log(obj.param)
        const audio = new Audio('../media/audio/click.mp3');
        audio.play();
    }
}