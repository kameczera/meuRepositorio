/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class D4j0l4o4a99b4f9F0af4321Bf7c829d1d154166 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "d4j0l4o-4a99b4f9-f0af-4321-bf7c-829d1d154166",
        "./D4j0l4o4a99b4f9F0af4321Bf7c829d1d154166/costumes/d4j0l4o-4a99b4f9-f0af-4321-bf7c-829d1d154166.png",
        { x: 250, y: 165 }
      ),
      new Costume(
        "costume1",
        "./D4j0l4o4a99b4f9F0af4321Bf7c829d1d154166/costumes/costume1.svg",
        { x: 0, y: 0 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "teste" }, this.whenIReceiveTeste)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.pontos = 3;
  }

  *whenIReceiveTeste() {
    /* TODO: Implement music_setInstrument */ null;
    /* TODO: Implement music_playNoteForBeats */ null;
    /* TODO: Implement music_playNoteForBeats */ null;
    /* TODO: Implement music_playNoteForBeats */ null;
    /* TODO: Implement music_playNoteForBeats */ null;
    /* TODO: Implement music_playNoteForBeats */ null;
  }
}
