const VendingMachine = require('../src/vending-machine');
// const { snickers, coke } = require('../src/inventoryProducts');

describe('Vending Machine', () => {
  describe('Display the inventory of the products', () => {
    test('Should be able to fetch and display the inventory of Candy', () => {
      const result = VendingMachine.displayInventory();
      expect(result).toEqual([['Snickers', 20], ['Coke', 20]]);
    });
  });

  describe('Get the item from the vending machine when customer inserts coins >= cost of item ', () => {
    test('Should reduce the count of the item by 1', () => {
      const result = VendingMachine.getItem('Coke', 1.25, 1);
      expect(result).toEqual('Name: Coke, Quantity: 19');
    });
  });

  describe('Restock the inventory of the product', () => {
    test('Should be able restock the item in the inventory', () => {
      const result = VendingMachine.restockInventory('Snickers', 5);
      expect(result).toEqual('Total Snickers: 25');
    });
  });
});

// describe('Get the item from the vending machine', () => {
//   test('Should reduce the count of the item by 1', () => {
//     const result = VendingMachine.getItem('Coke', 1.25, 1);
//     expect(result).toEqual('Name: Coke, Quantity: 19');
//   });
