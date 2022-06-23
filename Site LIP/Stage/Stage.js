/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 272.2177544996459,
        y: 198.06589
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 445,
        y: 220.75120473326882
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 276.76171006628715,
        y: 211.75194368554426
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 272.75608637713833,
        y: 221.75880763314495
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.svg", {
        x: 0,
        y: 0
      }),
      new Costume("backdrop6", "./Stage/costumes/backdrop6.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "bola2" }, this.whenIReceiveBola2),
      new Trigger(Trigger.BROADCAST, { name: "bola1" }, this.whenIReceiveBola1),
      new Trigger(
        Trigger.BROADCAST,
        { name: "inicio" },
        this.whenIReceiveInicio
      )
    ];

    this.vars.pontos = 0;
  }

  *whenIReceiveBola2() {
    this.costume = "backdrop1";
  }

  *whenIReceiveBola1() {
    this.costume = "backdrop1";
  }

  *whenIReceiveInicio() {
    this.costume = "backdrop2";
  }
}
