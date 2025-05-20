/* global phaser */

const config = {
    type: phaser.AUTO;
    width: 1920;
    height: 1080;
    backgroundColor: 0x5f6e7a;
}

const game = new phaser.Game(config);
console.log(game);
