function calculateLoan() {
  loan = document.getElementById("loan-amount").value;
  interest = document.getElementById("interest-rate").value;
  months = document.getElementById("months-to-pay").value;
  int = (loan * (interest * 0.01)) / months;
  pay = loan / months + int;
  document.getElementById("payment").innerHTML = `Monthly Payment : ${pay}`;
}
