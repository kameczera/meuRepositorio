/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class B4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./B4/costumes/costume1.svg", {
        x: 23.125000000000057,
        y: 12.871462264150978
      })
    ];

    this.sounds = [new Sound("pop", "./B4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola1),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveBola1() {
    yield* this.wait(1.56);
    this.visible = true;
    this.goto(-32, 167);
    yield* this.glide(1, -126, -168);
    this.visible = false;
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

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
