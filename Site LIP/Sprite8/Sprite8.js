/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 131.357105,
        y: 51.47333999999998
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite8/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola1),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "inicio" },
        this.whenIReceiveInicio
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenIReceiveBola2() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    yield* this.broadcastAndWait("tutorial");
  }

  *whenIReceiveBola1() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.effects.ghost = 50;
  }

  *whenIReceiveInicio() {
    this.visible = true;
  }

  *whenthisspriteclicked2() {
    this.visible = false;
  }
}
