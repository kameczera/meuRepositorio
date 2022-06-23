/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 23.125000000000057,
        y: 12.871462264150978
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite5/sounds/pop.wav")];

    this.triggers = [];
  }
}
