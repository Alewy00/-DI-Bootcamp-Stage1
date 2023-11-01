function submitForm() {
  // Get values from the inputs
  let fName = document.getElementById("fname").value;
  let lName = document.getElementById("lname").value;

  // Construct a JSON object
  let data = {
    name: fName,
    lastName: lName,
  };

  // Display the JSON string on the DOM
  document.getElementById("output").textContent = JSON.stringify(data, null, 2);
}
