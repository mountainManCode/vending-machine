const { product } = require('../_mocks_/productInventory');

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

  getItem(itemName, payment, quantity) {
    // const inventoryProduct = [this.item1, this.item2];

    if (itemName === this.item1.name && payment >= this.item1.cost) {
      const newQuantity = this.item1.quantity - quantity;
      return `Name: ${itemName}, Quantity Left: ${newQuantity}`;
    }
    if (itemName === this.item2.name && payment >= this.item2.cost) {
      const newQuantity = this.item2.quantity - quantity;
      return `Name: ${itemName}, Quantity Left: ${newQuantity}`;
    }
    return null;
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
}

module.exports = new VendingMachine();
