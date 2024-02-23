function selectNumber(element) {
    const numbers = document.querySelectorAll("#num");
    const submitBtn = document.getElementById("submit-btn");
  
    numbers.forEach(number => {
      number.classList.remove("selected");
    });
  
    element.classList.add("selected");
    submitBtn.classList.add("enabled");
    submitBtn.removeAttribute("disabled");
  }
  
  function submitNumber(event) {
    event.preventDefault();
  
    const selectedNumber = document.querySelector("#num.selected");
    if (selectedNumber) {
      const numberValue = selectedNumber.innerHTML;
      console.log("Selected number:", numberValue);
      localStorage.setItem("selectedNumber", numberValue);
      window.location.href = 'thankyou.html';
    }
}
