//your JS code here. If required.
// Function to simulate promise chain
function manipulateData() {
  // Initial promise that resolves with the array after 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Resolves after 3 seconds
  })
  .then((data) => {
    // After 1 second, filter out odd numbers
    return new Promise((resolve) => {
      setTimeout(() => {
        const evenNumbers = data.filter((num) => num % 2 === 0);
        document.getElementById("output").textContent = `Even numbers: ${evenNumbers}`;
        resolve(evenNumbers);
      }, 1000); // 1 second delay
    });
  })
  .then((evenNumbers) => {
    // After 2 seconds, multiply even numbers by 2
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubledNumbers = evenNumbers.map((num) => num * 2);
        document.getElementById("output").textContent = `Doubled even numbers: ${doubledNumbers}`;
        resolve(doubledNumbers);
      }, 2000); // 2 second delay
    });
  });
}

// Call the function when the page is loaded
window.onload = () => {
  manipulateData();
};

