/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 43.384616153846224,
        y: 44.358930000000015
      }),
      new Costume("costume2", "./Sprite3/costumes/costume2.svg", {
        x: 40.5,
        y: 80.05472651242677
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "inicio" },
        this.whenIReceiveInicio
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "clickD" },
        this.whenIReceiveClickd
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola1),
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "tutorial" },
        this.whenIReceiveTutorial
      )
    ];
  }

  *whenIReceiveInicio() {
    this.visible = false;
  }

  *whenKeyDPressed() {
    if (!this.touching(Color.rgb(255, 253, 0))) {
      while (!!this.keyPressed("d")) {
        yield;
      }
      this.stage.vars.pontos += -1;
    }
  }

  *whenIReceiveClickd() {
    this.costume = "costume2";
    yield* this.wait(0.07);
    this.costume = "costume1";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveBola1() {
    this.visible = true;
    this.effects.ghost = 50;
  }

  *whenIReceiveBola2() {
    this.visible = true;
    this.effects.ghost = 50;
  }

  *whenIReceiveTutorial() {
    this.visible = true;
    this.effects.ghost = 50;
  }
}
