const Makecommerce = require(__dirname+'/lib/makecommerce.js');
const GatewayPayment = require(__dirname+'/lib/payment.js');

module.exports = {
  Makecommerce: Makecommerce,
  GatewayPayment: GatewayPayment
};

