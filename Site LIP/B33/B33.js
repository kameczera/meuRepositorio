/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class B33 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./B33/costumes/costume1.svg", {
        x: 23.125000000000057,
        y: 12.871462264150978
      })
    ];

    this.sounds = [new Sound("pop", "./B33/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "tutorial2" },
        this.whenIReceiveTutorial2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed)
    ];
  }

  *whenIReceiveTutorial2() {
    this.visible = true;
    this.goto(-32, 167);
    yield* this.glide(3, -126, -168);
    this.visible = false;
    this.broadcast("inicio");
  }

  *whenGreenFlagClicked() {
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
    } else {
      0;
    }
  }
}
