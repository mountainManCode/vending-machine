const VendingMachine = require('../src/vending-machine');
// const { snickers, coke } = require('../src/inventoryProducts');

describe('Vending Machine', () => {
  describe('Display the inventory of the products', () => {
    test('Should be able to fetch and display the inventory of Candy', () => {
      const result = VendingMachine.displayInventory();
      expect(result).toEqual([['Snickers', 20], ['Coke', 20]]);
    });
  });

  describe('Display the inventory of the money', () => {
    test('Should be able to fetch and display the inventory of money', () => {
      const result = VendingMachine.displayCoinInventory();
      expect(result).toEqual([
        ['Toony', 100],
        ['Loony', 100],
        ['Quarter', 100],
        ['Dime', 100],
        ['Nickel', 100],
      ]);
    });
  });

  describe('Restock the inventory of the product', () => {
    test('Should be able restock the item in the inventory', () => {
      const result = VendingMachine.restockInventory('Snickers', 5);
      expect(result).toEqual('Total Snickers: 25');
    });
  });

  describe('When the arguments of the Restock are entered incorrectly', () => {
    test('Should be given an error message', () => {
      const result = VendingMachine.restockInventory('Snickers', '5');
      expect(result).toEqual('Error, enter correct arguments.');
    });
  });

  describe('When the total of inserted coins is greater tha the value of the item', () => {
    test('Should return the product purchased and the change given.', () => {
      const result = VendingMachine.dispenseItem({ Toony: 1 }, 'Snickers');
      expect(result).toEqual('Dispensing Snickers, Change: 0.75');
    });
  });

  describe('When no selction is made', () => {
    test('Should return Please, make a selection.', () => {
      const result = VendingMachine.dispenseItem({ Loony: 1, Dime: 2, Nickel: 1 }, '');
      expect(result).toEqual('Please, make a selection.');
    });
  });

  describe('When no arguments have been made', () => {
    test('Should return an error.', () => {
      const result = VendingMachine.dispenseItem({ Loony: 1, Dime: 2, Nickel: 1 }, ['Snickers']);
      expect(result).toEqual('Error, selection must be a string.');
    });
  });

  describe('When the coins entered is not in an object', () => {
    test('Should return Please, insert coins.', () => {
      const result = VendingMachine.dispenseItem('Toony', 'Snickers');
      expect(result).toEqual('Error, coins must be an object.');
    });
  });
});

// describe('When the total of inserted coins is less than the value of the item', () => {
//   test('Should return "Insert more coins".', () => {
//     const result = VendingMachine.dispenseItem({ Dime: 1, Nickel: 1 }, 'Snickers');
//     expect(result).toEqual('Insert more coins');
//   });
// });

// describe('When the total of inserted coins strictly equal the value of the item', () => {
//   test('Should return the product purchased.', () => {
//     const result = VendingMachine.dispenseItem({ Loony: 1, Dime: 2, Nickel: 1 }, 'Coke');
//     expect(result).toEqual('Dispensing Coke, Change: 0, Quantity Left: 19');
//   });
// });

// describe('Get the item from the vending machine when customer payment >= cost of item', () => {
//   test('Should reduce the count of the item by 1', () => {
//     const result = VendingMachine.getItem('Coke', 1.25, 1);
//     expect(result).toEqual('Name: Coke, Quantity: 19');
//   });
// });

// describe('When the coins entered is not in an object', () => {
//   test('Should return Please, insert coins.', () => {
//     const result = VendingMachine.dispenseItem({}, 'Snickers');
//     expect(result).toEqual('Please, insert coins.');
//   });
// });
