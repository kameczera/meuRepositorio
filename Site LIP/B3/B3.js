/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class B3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./B3/costumes/costume1.svg", {
        x: 17.875,
        y: 9.949286528189873
      })
    ];

    this.sounds = [new Sound("pop", "./B3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola1),
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola2),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveBola1() {
    yield* this.wait(1.48);
    this.visible = true;
    this.goto(1, 167);
    yield* this.glide(1, 0, -163);
    this.visible = false;
  }

  *whenIReceiveBola2() {
    yield* this.wait(1.48);
    this.visible = true;
    this.goto(1, 167);
    yield* this.glide(1, 0, -163);
    this.visible = false;
  }

  *whenKeySPressed() {
    if (this.touching(this.sprites["Sprite2"].andClones())) {
      this.visible = false;
      this.broadcast("clickS");
      /* TODO: Implement music_setInstrument */ null;
      /* TODO: Implement music_playNoteForBeats */ null;
      this.stage.vars.pontos += 2;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
