/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite9/costumes/costume1.svg", {
        x: 141.99918,
        y: 36.01875000000001
      }),
      new Costume("costume2", "./Sprite9/costumes/costume2.svg", {
        x: 164.01626016260155,
        y: 42.55624999999998
      }),
      new Costume("costume3", "./Sprite9/costumes/costume3.svg", {
        x: 135.25,
        y: 54.09375
      }),
      new Costume("costume4", "./Sprite9/costumes/costume4.svg", {
        x: 92.75,
        y: 31.01875000000001
      }),
      new Costume("costume5", "./Sprite9/costumes/costume5.svg", {
        x: 76.5,
        y: 31.01875000000001
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite9/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "tutorial" },
        this.whenIReceiveTutorial
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "acerto" },
        this.whenIReceiveAcerto
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "tutorial3" },
        this.whenIReceiveTutorial3
      )
    ];
  }

  *whenIReceiveTutorial() {
    this.visible = true;
    this.stage.costume = "backdrop1";
    yield* this.wait(3);
    this.costume = "costume2";
    yield* this.wait(5);
    this.costume = "costume3";
    yield* this.wait(4);
    this.visible = false;
    this.broadcast("tutorial2");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = "costume1";
  }

  *whenIReceiveAcerto() {
    this.visible = true;
    this.costume = "costume4";
    yield* this.wait(3);
    this.visible = false;
    this.costume = "costume1";
    this.broadcast("inicio");
  }

  *whenIReceiveTutorial3() {
    this.visible = true;
    this.costume = "costume5";
    yield* this.wait(3);
    this.visible = false;
    this.broadcast("inicio");
    this.stage.costume = "backdrop4";
  }
}
