// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: SHEM
// Created on: May 2020
// This file contains the JS functions for index.html
/* global Phaser */
//* Game scene

import splashScene from "./splashScene"
// This is our game scene
    const splashScene = new splashScene()
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    backgroundColor: 0x5f6e7a,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
}
const game = new Phaser.Game(config);

// Load scene
// NOTE: remember any "key" is global and can not be reused
game.scene.add('splashScene', splashScene);

//start Title
game.scene.start('splashScene');