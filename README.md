# Checkout JS SDK

## Usage
1. Add `Checkout-js-sdk` to your html:
```
<script src="https://Checkout.com/Checkout.min.js"></script>
```

2. Declare an element to put your Checkout button, it will be used as the parent element of your Checkout button.
```
<div id="checkout-button"></div>
```

3. Create a Checkout button instance and pass options and your selector.
```
new Checkout(options, selector);
```

## API
### Options
|    key    | value | type | required
| ----------| ---   | ---  | ---     |
| app       |  12   |
| subject      |  32   |
| charge_no      |  32   |
| amount      |  32   |
| name      |  32   |
| description      |  32   |
| image      |  32   |
