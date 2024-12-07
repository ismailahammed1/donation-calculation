document.getElementById("donation-quta")
.addEventListener("click", function () {

  const addqutaDonate = getInputFieldValueById("donetion-quta-value");

  const addDonate = getDonationTextValue("donationMoney-quta");

  const cashDonet = getDonationTextValue("cash-for-donet");

  if (isNaN(addqutaDonate)|| addqutaDonate<=0) {
    alert("Please enter a valid donation amount.");
    return;
  }
  if (cashDonet<addDonate) {
    alert("Insufficient balance to make the donation.");
    return; 
  }

  const newBalance = addqutaDonate + addDonate;

  const newCashBalance = cashDonet - addqutaDonate;
  document.getElementById("donationMoney-quta").innerText = newBalance.toFixed(2);
  document.getElementById("cash-for-donet").innerText = newCashBalance.toFixed(2);
});
