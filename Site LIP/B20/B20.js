/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class B20 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./B20/costumes/costume1.svg", {
        x: 18.072033009464377,
        y: 10.058960000000013
      })
    ];

    this.sounds = [new Sound("pop", "./B20/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola1),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenKeySPressed() {
    while (!!this.keyPressed("s")) {
      yield;
    }
    if (this.touching(this.sprites["Sprite2"].andClones())) {
      this.visible = false;
      this.broadcast("clickS");
      /* TODO: Implement music_setInstrument */ null;
      /* TODO: Implement music_playNoteForBeats */ null;
      this.stage.vars.pontos += 2;
    }
  }

  *whenIReceiveBola1() {
    yield* this.wait(6.04);
    this.visible = true;
    this.goto(1, 167);
    yield* this.glide(1, 0, -163);
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
