/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite7/costumes/costume1.svg", {
        x: 131.357125,
        y: 51.473344999999995
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola2),
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola3),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "inicio" },
        this.whenIReceiveInicio
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "tutorial" },
        this.whenIReceiveTutorial
      )
    ];
  }

  *whenIReceiveBola2() {
    yield* this.wait(25);
    if (this.stage.vars.pontos > 50) {
      this.stage.costume = "backdrop3";
    } else {
      this.stage.costume = "backdrop4";
    }
    yield* this.wait(3);
    this.broadcast("inicio");
    this.stage.costume = "backdrop4";
    this.stage.vars.pontos = 0;
  }

  *whenIReceiveBola3() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("bola1");
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

  *whenIReceiveTutorial() {
    this.visible = false;
  }
}
