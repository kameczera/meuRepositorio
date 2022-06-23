/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 47.16666999999998,
        y: 44.35893000000004
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 40.5,
        y: 80.05472667119903
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "inicio" },
        this.whenIReceiveInicio
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "inicio" },
        this.whenIReceiveInicio2
      ),
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "clickA" },
        this.whenIReceiveClicka
      ),
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola1),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
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

  *whenIReceiveInicio2() {
    this.visible = false;
  }

  *whenIReceiveBola2() {
    this.visible = true;
    this.effects.ghost = 50;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveClicka() {
    this.costume = "costume2";
    yield* this.wait(0.07);
    this.costume = "costume1";
  }

  *whenIReceiveBola1() {
    this.visible = true;
    this.effects.ghost = 50;
  }

  *whenKeyAPressed() {
    if (!this.touching(Color.rgb(255, 0, 0))) {
      while (!!this.keyPressed("d")) {
        yield;
      }
      this.stage.vars.pontos += -1;
    }
  }

  *whenIReceiveTutorial() {
    this.visible = true;
    this.effects.ghost = 50;
  }
}
