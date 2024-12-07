document.getElementById("donation-noakhali")
.addEventListener("click", function () {

  const addNoakhaliDonate = getInputFieldValueById("donetion-noakhali-value");

  const addDonate = getDonationTextValue("donationMoney-noakhali");

  const cashDonet = getDonationTextValue("cash-for-donet");

  if (isNaN(addNoakhaliDonate)) {
    alert("Please enter a valid donation amount.");
    return; 
  }

  const newBalance = addNoakhaliDonate + addDonate;

  const newCashBalance = cashDonet - addNoakhaliDonate;
  document.getElementById("donationMoney-noakhali").innerText = newBalance.toFixed(2);
  document.getElementById("cash-for-donet").innerText = newCashBalance.toFixed(2);
});
