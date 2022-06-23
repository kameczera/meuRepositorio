/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class B29 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./B29/costumes/costume1.svg", {
        x: 18.072033009464405,
        y: 10.058960000000013
      })
    ];

    this.sounds = [new Sound("pop", "./B29/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenKeyDPressed() {
    while (!!this.keyPressed("d")) {
      yield;
    }
    if (this.touching(this.sprites["Sprite3"].andClones())) {
      this.visible = false;
      this.broadcast("clickD");
      /* TODO: Implement music_setInstrument */ null;
      /* TODO: Implement music_playNoteForBeats */ null;
      this.stage.vars.pontos += 2;
    }
  }

  *whenIReceiveBola2() {
    yield* this.wait(12.7);
    this.visible = true;
    this.goto(24, 167);
    yield* this.glide(1, 123, -170);
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
