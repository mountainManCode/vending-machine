const VendingMachine = require('../src/vending-machine');
// const { snickers, coke } = require('../src/inventoryProducts');

describe('Vending Machine', () => {
  describe('Display the inventory of the products', () => {
    test('Should be able to fetch and display the inventory of Candy', () => {
      const result = VendingMachine.displayInventory();
      expect(result).toEqual([['Snickers', 20], ['Coke', 20]]);
    });
  });

  describe('Restock the inventory of the product', () => {
    test('Should be able restock the item in the inventory', () => {
      const result = VendingMachine.restockInventory('Snickers', 5);
      expect(result).toEqual('Total Snickers: 25');
    });
  });

  describe('When the total of inserted coins is less than the value of the item', () => {
    test('Should return "Insert more coins".', () => {
      const result = VendingMachine.dispenseItem({ Loony: 1, Nickel: 1 }, 'Snickers');
      expect(result).toEqual('Insert more coins');
    });
  });

  describe('When the total of inserted coins strictly equal the value of the item', () => {
    test('Should return the product purchased.', () => {
      const result = VendingMachine.dispenseItem({ Loony: 1, Dime: 2, Nickel: 1 }, 'Snickers');
      expect(result).toEqual('Dispensing Snickers, Change: 0, Quantity Left: 19');
    });
  });

  describe('When the total of inserted coins is greater tha the value of the item', () => {
    test('Should return the product purchased and the change given.', () => {
      const result = VendingMachine.dispenseItem({ Toony: 1, Dime: 3, Nickel: 1 }, 'Coke');
      expect(result).toEqual('Dispensing Coke, Change: 1.10, Quantity Left: 19');
    });
  });

  // describe('Get the item from the vending machine when customer payment >= cost of item', () => {
  //   test('Should reduce the count of the item by 1', () => {
  //     const result = VendingMachine.getItem('Coke', 1.25, 1);
  //     expect(result).toEqual('Name: Coke, Quantity: 19');
  //   });
  // });

  // describe('Display the total amount of inserted coins', () => {
  //   test('Should be able to add the total amount of inserted coins, then display.', () => {
  //     const result = VendingMachine.dispenseItem({ Loony: 1, Quarter: 3, Dime: 5 }, 'Snickers');
  //     expect(result).toEqual('Purchasing Power: $ 2.25');
  //   });
  // });
});

// describe('Get the item from the vending machine', () => {
//   test('Should reduce the count of the item by 1', () => {
//     const result = VendingMachine.getItem('Coke', 1.25, 1);
//     expect(result).toEqual('Name: Coke, Quantity: 19');
//   });
