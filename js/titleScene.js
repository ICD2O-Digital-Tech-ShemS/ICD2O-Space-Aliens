/* global phaser */
// Created by: Shem
// Created on: May 2025
// This is the title Scene for the game

/**
 * This class is the title Scene for the game
 */
class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'titleScene' });
    }


    init (data) {
    this.cameras.main.setBackgroundColor("eb3a15");
    }

    preload() {
        console.log('Title Scene');
    }

    create (data) {
    }

    update (time, delta) { 
    }
}
    export default TitleScene