const { money } = require('../_mocks_/coinInventory');
const { product } = require('../_mocks_/productInventory');

class Payment {
  constructor() {
    this.toony = money.toony;
    this.loony = money.loony;
    this.quarter = money.quarter;
    this.dime = money.dime;
    this.nickel = money.nickel;

    this.item1 = product.snickers;
    this.item2 = product.coke;
    this.toonyTotal = 0;
    this.loonyTotal = 0;
    this.quarterTotal = 0;
    this.dimeTotal = 0;
    this.nickelTotal = 0;
  }

  payUp(coins, item) {
    if (typeof coins !== 'object') {
      return 'Error, Coins must be an Object({Coin: Quantity})';
    }

    Object.entries(coins).forEach(([coin, quantity]) => {
      // console.log(`${coin} ${quantity}`);
      if (coin === this.toony.name) {
        this.toonyTotal = this.toony.value * quantity; // console.log(this.toonyTotal);
      }
      if (coin === this.loony.name) {
        this.loonyTotal = this.loony.value * quantity;
        // console.log(loonyTotal);
      }
      if (coin === this.quarter.name) {
        this.quarterTotal = this.quarter.value * quantity;
        // console.log(this.quarterTotal);
      }
      if (coin === this.dime.name) {
        this.dimeTotal = this.dime.value * quantity;
        // console.log(this.dimeTotal);
      }
      if (coin === this.nickel.name) {
        this.nickelTotal = this.nickel.value * quantity;
      }
      this.total =
        this.toonyTotal + this.loonyTotal + this.quarterTotal + this.dimeTotal + this.nickelTotal;
    });
    // console.log(
    //   this.toonyTotal,
    //   this.loonyTotal,
    //   this.quarterTotal,
    //   this.dimeTotal,
    //   this.nickelTotal,
    // );

    return `Purchasing Power: $ ${this.total}`;
  }
}

module.exports = new Payment();
