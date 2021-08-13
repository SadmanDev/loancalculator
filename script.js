// Listen to submit

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
    
    const amount = document.getElementById("amount").value;
    const interest = document.getElementById("interest").value;
    const years = document.getElementById("years").value;
   
    // Calculate

  const principal = parseFloat(amount);
  const CalculateInterest = parseFloat(interest) / 100 / 12;
  const calculatedPayments = parseFloat(years) * 12;

  //Compute monthly Payment

  const x = Math.pow(1 + CalculateInterest, calculatedPayments);
  const monthly = (principal * x * CalculateInterest) / (x - 1);
  const monthlyPayment = monthly.toFixed(2);

  //Compute Interest

  const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);

  //Compute Total Payment

  const totalPayment = (monthly * calculatedPayments).toFixed(2);

  //Show results

  document.getElementById("monthlyPayment").innerHTML = "$" + monthlyPayment;

  document.getElementById("totalInterest").innerHTML = "%" + totalInterest;

  document.getElementById("totalPayment").innerHTML = "$" + totalPayment;

  e.preventDefault();
    e.preventDefault();
}