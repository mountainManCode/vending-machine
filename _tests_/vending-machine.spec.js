const VendingMachine = require('../src/vending-machine');
// const { snickers, coke } = require('../src/inventoryProducts');

describe('Vending Machine', () => {
  describe('Display the inventory of the products', () => {
    test('Should be able to fetch and display the inventory of Candy', () => {
      const result = VendingMachine.displayInventory();
      expect(result).toEqual([['Snickers', 20], ['Coke', 20]]);
    });
  });
  describe('Expel the item from the vending machine', () => {
    test('Should reduce the count of the item by 1', () => {
      const result = VendingMachine.getItem('Snickers', 1);
      expect(result).toEqual('Name: Snickers, Quantity: 19');
    });
  });
  // describe('Restock the inventory of the products', () => {
  //   test('Should be able restock the invetory of products', () => {
  //     const result = VendingMachine.restockInventory();
  //     expect(result).toEqual();
  //   });
  // });
});
