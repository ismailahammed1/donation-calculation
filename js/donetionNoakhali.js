document.getElementById("donation-noakhali")
.addEventListener("click", function () {

  const addNoakhaliDonate = getInputFieldValueById("donetion-noakhali-value");

  const addDonate = getDonationTextValue("donationMoney-noakhali");

  const cashDonet = getDonationTextValue("cash-for-donet");

  if (isNaN(addNoakhaliDonate)|| addNoakhaliDonate<=0) {
    alert("Please enter a valid donation amount.");
    return;
  }
  if (cashDonet<addDonate) {
    alert("Insufficient balance to make the donation.");
    return; 
  }

  const newBalance = addNoakhaliDonate + addDonate;

  const newCashBalance = cashDonet - addNoakhaliDonate;
  document.getElementById("donationMoney-noakhali").innerText = newBalance.toFixed(2);
  document.getElementById("cash-for-donet").innerText = newCashBalance.toFixed(2);
  const modal = document.getElementById("my_modal_5");
  modal.showModal();

  console.log("New Balance:", newBalance, "New Cash Balance:", newCashBalance);
});
