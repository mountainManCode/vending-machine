const Payment = require('../src/payment');
// const { snickers, coke } = require('../src/inventoryProducts');

describe('Payment', () => {
  describe('Display the inventory of the products', () => {
    test('Should be able to fetch and display the inventory of Candy', () => {
      const result = Payment.payUp({ Quarter: 3, Dime: 5 });
      expect(result).toEqual(1.25);
    });
  });
});
