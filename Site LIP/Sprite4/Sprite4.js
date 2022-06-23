/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 23.125,
        y: 12.871460000000013
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [];
  }
}
