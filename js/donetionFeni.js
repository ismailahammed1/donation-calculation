document.getElementById("donation-feni")
.addEventListener("click", function () {

  const addfeniDonate = getInputFieldValueById("donetion-feni-value");

  const addDonate = getDonationTextValue("donationMoney-feni");

  const cashDonet = getDonationTextValue("cash-for-donet");
  const title = document.getElementById("title-feni").innerText;

  if (isNaN(addfeniDonate)|| addfeniDonate<=0) {
    alert("Please enter a valid donation amount.");
    return;
  }
  if (cashDonet<addDonate) {
    alert("Insufficient balance to make the donation.");
    return; 
  }

  const newBalance = addfeniDonate + addDonate;

  const newCashBalance = cashDonet - addfeniDonate;
  document.getElementById("donationMoney-feni").innerText = newBalance.toFixed(2);
  document.getElementById("cash-for-donet").innerText = newCashBalance.toFixed(2);
  document.getElementById("donetion-feni-value").value = ""; 
  const modal = document.getElementById("my_modal_5");
  modal.showModal();
  const historyDiv = document.createElement('div');
  historyDiv.classList.add('hero', 'bg-base-200', 'rounded-lg', 'border', 'mt-5');
  historyDiv.innerHTML = `
    <div class="hero-content flex-col"> 
      <h1 class="text-xl font-bold">${addfeniDonate} Taka donated for ${title}</h1>
      <p class="py-2">${new Date()}</p>
    </div>
  `;
  

  document.getElementById("history").appendChild(historyDiv);

});
