/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class D extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./D/costumes/costume1.svg", {
        x: 17.875,
        y: 9.949286528189873
      })
    ];

    this.sounds = [new Sound("pop", "./D/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed)
    ];
  }

  *whenIReceiveBola2() {
    yield* this.wait(1.5);
    this.visible = true;
    this.goto(1, 167);
    yield* this.glide(1, 0, -163);
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
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
}
