const { product } = require('../_mocks_/productInventory');
const { coins } = require('../_mocks_/coinInventory');

// const {
//   toony, loony, quarter, dime, nickel,
// } = require('./inventoryMoney');

class VendingMachine {
  constructor() {
    // this.coke = coke;
    // this.snickers = snickers;
    this.item1 = product.snickers;
    this.item2 = product.coke;
  }
  displayInventory() {
    const inventoryProduct = [
      [this.item1.name, this.item1.quantity],
      [this.item2.name, this.item2.quantity],
    ];
    return inventoryProduct;
  }

  getItem(itemName, quantity) {
    // const inventoryProduct = [this.item1, this.item2];

    if (itemName === this.item1.name) {
      const newQuantity = this.item1.quantity - quantity;
      return `Name: ${itemName}, Quantity: ${newQuantity}`;
    }
    return null;
  }

  // restockInventory() {
  //   if (this.item1.quantity || this.item2.quantity <= 3) {
  //   }
  // }
}

module.exports = new VendingMachine();
