/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class B24 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./B24/costumes/costume1.svg", {
        x: 18.072033009464434,
        y: 10.058960000000013
      })
    ];

    this.sounds = [new Sound("pop", "./B24/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola1),
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola2),
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola3),
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola4),
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenKeyAPressed() {
    while (!!this.keyPressed("a")) {
      yield;
    }
    if (this.touching(this.sprites["Sprite1"].andClones())) {
      this.visible = false;
      this.broadcast("clickA");
      /* TODO: Implement music_setInstrument */ null;
      /* TODO: Implement music_playNoteForBeats */ null;
      this.stage.vars.pontos += 2;
    }
  }

  *whenIReceiveBola1() {
    yield* this.wait(6.76);
    this.visible = true;
    this.goto(-32, 167);
    yield* this.glide(1, -126, -168);
    this.visible = false;
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

  *whenIReceiveBola4() {
    yield* this.wait(8);
    if (this.stage.vars.pontos > 36) {
      this.stage.costume = "backdrop3";
    } else {
      this.stage.costume = "backdrop4";
    }
    yield* this.wait(3);
    this.broadcast("inicio");
    this.broadcast("medio");
    this.stage.costume = "backdrop4";
    this.stage.vars.pontos = 0;
  }

  *whenIReceiveBola5() {
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

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
