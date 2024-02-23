document.addEventListener("DOMContentLoaded", function() {
    const selectedNumber = localStorage.getItem("selectedNumber");
    const selectedNumberElement = document.getElementById("selected-number");
    if (selectedNumber && selectedNumberElement) {
      selectedNumberElement.textContent = selectedNumber;
      document.getElementById("selection-display").textContent = "You selected " + selectedNumber + " out of 5";
    }
    localStorage.removeItem("selectedNumber");
  });