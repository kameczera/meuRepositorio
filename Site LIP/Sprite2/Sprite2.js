/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 47.03845615384617,
        y: 44.35893000000004
      }),
      new Costume("costume2", "./Sprite2/costumes/costume2.svg", {
        x: 40.5,
        y: 80.05472302485354
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "inicio" },
        this.whenIReceiveInicio
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "clickS" },
        this.whenIReceiveClicks
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola1),
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola2),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
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

  *whenIReceiveClicks() {
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

  *whenKeySPressed() {
    if (!this.touching(Color.rgb(60, 0, 255))) {
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
