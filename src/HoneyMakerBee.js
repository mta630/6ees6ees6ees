class HoneyMakerBee extends Bee {

  constructor (color, food) {
    super(color, food);
    this.honeyPot = 0;
    this.job = "make honey";
    this.age = 10;
  }

  makeHoney () {
    this.honeyPot ++;
  }

  giveHoney () {
    this.honeyPot --;
  }
};
