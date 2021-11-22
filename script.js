/**
 * Function to compute total interest 
 */
function compute() {

  var principal = document.getElementById("principal");
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;

  //calculate interest 
  var interest = (principal.value * years * rate) / 100;

  //convert to actual year
  var year = new Date().getFullYear() + parseInt(years);

  //Validate pricipal value
  if (principal.value < 1) {
    alert("Enter a positive number");
    principal.focus();
    return
  }  

  //result text
  var result = "If you deposit " + principal.value + ", <br/>" +
    "at an interest rate of " + rate + "%. <br/>" +
    "You will receive an amount of " + interest + ", <br/>" +
    "in the year " + year;

  document.getElementById("result").innerHTML = result;
}

/**
 * Function to update Rate
 */
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}