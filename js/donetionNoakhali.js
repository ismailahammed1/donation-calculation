document.getElementById("donation-noakhali")
.addEventListener("click", function () {

  const addNoakhaliDonate = getInputFieldValueById("donetion-noakhali-value");

  const addDonate = getDonationTextValue("donationMoney-noakhali");

  const cashDonet = getDonationTextValue("cash-for-donet");
  const title = document.getElementById("title-noakhali").innerText;

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
  