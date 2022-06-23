/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 131.357125,
        y: 51.473344999999995
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite6/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "tutorial" },
        this.whenIReceiveTutorial
      ),
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola1),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "inicio" },
        this.whenIReceiveInicio
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveTutorial() {
    this.visible = false;
  }

  *whenIReceiveBola1() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("bola2");
    /* TODO: Implement data_showvariable */ null;
    this.visible = false;
  }

  *whenIReceiveInicio() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.effects.ghost = 50;
  }
}
