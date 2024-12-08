document.getElementById("donation-quta")
.addEventListener("click", function () {

  const addqutaDonate = getInputFieldValueById("donetion-quta-value");

  const addDonate = getDonationTextValue("donationMoney-quta");

  const cashDonet = getDonationTextValue("cash-for-donet");
  const title = document.getElementById("title-quta").innerText;

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
  const modal = document.getElementById("my_modal_5");
  modal.showModal();
    const historyDiv = document.createElement('div');
  historyDiv.classList.add('hero', 'bg-base-200', 'rounded-lg', 'border', 'mt-5');
  historyDiv.innerHTML = `
    <div class="hero-content flex-col"> 
      <h1 class="text-xl font-bold">${newBalance} Taka donated for ${title}</h1>
      <p class="py-2">${new Date()}</p>
    </div>
  `;
  

  document.getElementById("history").appendChild(historyDiv);
});
