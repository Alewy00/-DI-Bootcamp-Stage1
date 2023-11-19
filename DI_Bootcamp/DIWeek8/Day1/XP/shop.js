const products = require("./products.js");

const productInfo = (product) => {
  products.forEach((item) => {
    if (item.name === product) {
      console.log(`Price is ${item.price}, category is ${item.category}`);
    }
  });
};

// Call this function with different product names and print the details of the products.

productInfo("apple");

// Run shop.js and verify that the correct product details are displayed.
