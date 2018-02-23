const { snickers, coke } = require('./inventoryProducts');
const {
  toony, loony, quarter, dime, nickel,
} = require('./inventoryMoney');

class VendingMachine {
  constructor() {
    // this.coke = coke;
    // this.snickers = snickers;
    this.item1 = snickers;
    this.item2 = coke;
  }
  displayInventory() {
    const inventoryProduct = [
      [this.item1.name, this.item1.quantity],
      [this.item2.name, this.item2.quantity],
    ];
    // const inventoryItem2 = this.item2;
    // inventory = [],

    return inventoryProduct;

    // console.log(inventoryItem1, inventoryItem2);
  }
}

module.exports = new VendingMachine();
