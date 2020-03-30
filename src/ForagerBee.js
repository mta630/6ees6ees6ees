class ForagerBee extends Bee {

  constructor (color, food) {
    super(color, food);
    this.job = "find pollen";
    this.age = 10;
    this.canFly = true;
    this.treasureChest = [];
  }

  forage (treasure) {
    this.treasureChest.push(treasure);
  }
};
