const VendingMachine = require('../src/vending-machine');

describe('Vending Machine', () => {
  describe('Display the inventory of the items', () => {
    test('Should be able to fetch and display the inventory of Candy', () => {
      const result = VendingMachine.displayInventory();
      expect(result).toEqual([['Snickers', 12], ['Coke', 12]]);
    });
  });
});
