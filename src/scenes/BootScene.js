import createAnimations from '../util/animations';

class BootScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'BootScene'
        });
    }

    preload() {
        this.load.on('complete', () => {
            createAnimations(this);
            this.scene.start('GameScene');
        });

        // Load assets here
        this.load.image('logo', './../assets/logo.png');
    }

}

export default BootScene;
