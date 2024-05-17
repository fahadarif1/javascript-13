function displayDateTime() {
    var currentDate = new Date();
    var dateTimeString = "Current Date and Time: " + currentDate;
    document.getElementById("datetime").innerHTML = dateTimeString;
  }

//////////////////////////////////////////////////////////////////////


  function square(number) {
    return number * number;
  }
  
  // Example usage:
  var result = square(5);
  console.log(result); // Output: 25

///////////////////////////////////////////////////////


  function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return "Hello, " + fullName + "!";
  }
  
  // Example usage:
  var greeting = greetUser("John", "Doe");
  console.log(greeting); // Output: Hello, John Doe!

//////////////////////////////////////////////////////

  function addNumbers() {
    // Prompt the user to input the first number
    var num1 = parseFloat(prompt("Enter the first number:"));
  
    // Prompt the user to input the second number
    var num2 = parseFloat(prompt("Enter the second number:"));
  
    // Check if both inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
      // Add the numbers together
      var sum = num1 + num2;
      return sum;
    } else {
      // If any of the inputs is not a valid number, return an error message
      return "Invalid input. Please enter valid numbers.";
    }
  }
  
  // Example usage:
  var result = addNumbers();
  console.log("The sum is: " + result);