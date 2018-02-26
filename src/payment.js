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
  }

  payUp(coins) {
    this.toonyTotal = 0;
    this.loonyTotal = 0;
    this.quarterTotal = 0;
    this.dimeTotal = 0;
    this.nickelTotal = 0;

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
        console.log(this.quarterTotal);
      }
      if (coin === this.dime.name) {
        this.dimeTotal = this.dime.value * quantity;
        console.log(this.dimeTotal);
      }
      if (coin === this.nickel.name) {
        this.nickelTotal = this.nickel.value * quantity;
      }

      // this.total =
      //   this.toonyTotal + this.loonyTotal + this.quarterTotal + this.dimeTotal + this.nickelTotal;
      // console.log(this.total);
    });
    console.log(
      this.toonyTotal,
      this.loonyTotal,
      this.quarterTotal,
      this.dimeTotal,
      this.nickelTotal,
    );
    const total =
      this.toonyTotal + this.loonyTotal + this.quarterTotal + this.dimeTotal + this.nickelTotal;
    return total;
  }
}

module.exports = new Payment();

// if (coin !== this.toony.name) {
//   this.toonyTotal = 0;
//   console.log(this.toonyTotal);
// } else {
//   this.toonyTotal = this.toony.value * quantity;
//   console.log(this.toonyTotal);
// }
// if (coin === this.loony.name) {
//   this.loonyTotal = this.loony.value * quantity;
// } else {
//   this.loonyTotal = 0;
// }
// if (coin === this.quarter.name) {
//   // console.log(this.quarter.name);
//   this.quarterTotal = this.quarter.value * quantity;
// } else {
//   this.quarterTotal = 0;
// }
// if (coin === this.dime.name) {
//   this.dimeTotal = this.dime.value * quantity;
// } else {
//   this.dimeTotal = 0;
//   // console.log(this.dimeTotal);
// }
// if (coin === this.nickel.name) {
//   this.nickelTotal = this.nickel.value * quantity;
// } else {
//   this.nickelTotal = 0;
// }
