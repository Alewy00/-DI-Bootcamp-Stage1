let client = "Aaron";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    typePayment: ["cash", "creditCard"],
  },
};
const displayGroceries = () => {
  groceries.fruits.forEach((element) => {
    console.log(element);
  });
};

// displayGroceries()
const cloneGroceries = () => {
  client = "Bob";
  user = client;
  shopping = groceries;
  groceries.totalPrice = "50$";
  groceries.other.paid = false;
  console.log(groceries.other);
  console.log(shopping.other);
};

cloneGroceries();
