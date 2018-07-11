// @flow
import zoid from 'zoid';
import { SUPPORTED_CURRENCIED } from './currency';

console.log(zoid);
export const Nano = zoid.create({
  tag: 'nano-button',
  defaultEnv: 'local',
  url: {
    test: '/base/test/windows/button/index.htm',
    local: 'http://localhost:5000',
  },
  dimensions: {
    width: '600px',
    height: '150px',
  },
  props: {
    payment: {
      type: 'object',
      required: true,
      validate(payment) {
        const { app, subject, charge_no, amount, currency } = payment;
        if (!app) {
          throw new Error(`Expected payment.app`);
        }
        if (!subject) {
          throw new Error(`Expected payment.subject`);
        }
        if (!charge_no) {
          throw new Error(`Expected payment.charge_no`);
        }
        if (!amount) {
          throw new Error(`Expected payment.amount`);
        }
        if (!amount.toString().match(/^\d+(\.\d+)?$/)) {
          throw new Error(`Expected payment.mount to be a number, got ${ amount }`);
        }
        if (currency && !SUPPORTED_CURRENCIED.includes(currency)) {
          throw new Error(`Expected payment.currency to be ${ SUPPORTED_CURRENCIES.join(', ') }, got ${ currency }`)
        }
      }
    }
  }
});