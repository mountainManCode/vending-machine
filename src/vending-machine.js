// const { payUp } = require('./payment');
const { product } = require('../_mocks_/productInventory');
const { money } = require('../_mocks_/coinInventory');

class VendingMachine {
  constructor() {
    this.item1 = product.snickers;
    this.item2 = product.coke;

    this.toony = money.toony;
    this.loony = money.loony;
    this.quarter = money.quarter;
    this.dime = money.dime;
    this.nickel = money.nickel;

    this.toonyTotal = 0;
    this.loonyTotal = 0;
    this.quarterTotal = 0;
    this.dimeTotal = 0;
    this.nickelTotal = 0;
    // this.total = purchasePower;
  }

  displayInventory() {
    const inventoryProduct = [
      [this.item1.name, this.item1.quantity],
      [this.item2.name, this.item2.quantity],
    ];
    return inventoryProduct;
  }

  restockInventory(itemName, quantity) {
    if (itemName === this.item1.name) {
      const newQuantity = this.item1.quantity + quantity;
      return `Total ${itemName}: ${newQuantity}`;
    }
    if (itemName === this.item2.name) {
      const newQuantity = this.item2.quantity + quantity;
      return `Total ${itemName}: ${newQuantity}`;
    }
    return null;
  }

  dispenseItem(coins, selection) {
    if (typeof coins !== 'object') {
      return 'Error, Coins must be an Object({Coin: Quantity}).';
    }
    if (typeof selection !== 'string') {
      return 'Error, Selection must be a String.';
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
      this.purchasePower =
        this.toonyTotal + this.loonyTotal + this.quarterTotal + this.dimeTotal + this.nickelTotal;
      // return purchasePower;
    });
    // console.log(this.purchasePower);
    if (selection === this.item1.name && this.purchasePower < this.item1.cost) {
      return 'Insert more coins';
    } else if (selection === this.item1.name && this.purchasePower === this.item1.cost) {
      const newQuantity = this.item1.quantity - 1;
      return `Dispensing ${selection}, Change: 0, Quantity Left: ${newQuantity}`;
    } else if (selection === this.item1.name && this.purchasePower > this.item1.cost) {
      const change = this.purchasePower - this.item1.cost;
      return `Dispense ${selection}, Change: ${change}`;
    }

    if (selection === this.item2.name && this.purchasePower < this.item2.cost) {
      return 'Insert more coins';
    } else if (selection === this.item2.name && this.purchasePower === this.item2.cost) {
      const newQuantity = this.item2.quantity - 1;
      return `Dispensing ${selection}, Change: 0, Quantity Left: ${newQuantity}`;
    } else if (selection === this.item2.name && this.purchasePower > this.item2.cost) {
      const change = this.purchasePower - this.item2.cost;
      return `Dispense ${selection}, Change: ${change}`;
    }
    return null;
  }

  getItem(itemName, payment, quantity) {
    // const inventoryProduct = [this.item1, this.item2];

    if (itemName === this.item1.name && payment >= this.item1.cost) {
      const newQuantity = this.item1.quantity - quantity;
      return `Name: ${itemName}, Quantity: ${newQuantity}`;
    }
    if (itemName === this.item2.name && payment >= this.item2.cost) {
      const newQuantity = this.item2.quantity - quantity;
      return `Name: ${itemName}, Quantity: ${newQuantity}`;
    }
    return null;
  }
}

module.exports = new VendingMachine();
