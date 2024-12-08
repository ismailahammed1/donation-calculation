function getInputFieldValueById(id) {
    const myInputvalue = document.getElementById(id).value;
    return parseFloat(myInputvalue) || 0;
   
  }
  
  function getDonationTextValue(id) {
    const donationText = document.getElementById(id).innerText;
    const numericValue = parseFloat(donationText.replace(/[^\d.-]/g, ''));
    return numericValue || 0; 
  }


  function toggleView(id) {
    const donationDiv = document.getElementById("donation-from");
    const historyDiv = document.getElementById("history");
  
    const donationBtn = document.getElementById("donation-btn");
    const historyBtn = document.getElementById("history-btn");
  
    if (id === 'donation-from') {
      donationDiv.classList.remove("hidden");
      historyDiv.classList.add("hidden");
      donationBtn.classList.add("bg-lime-400");
      historyBtn.classList.remove("bg-lime-400");
    } else if (id === 'history') {
      donationDiv.classList.add("hidden");
      historyDiv.classList.remove("hidden");
      historyBtn.classList.add("bg-lime-400");
      donationBtn.classList.remove("bg-lime-400");
    }
  }
  
  document.getElementById("donation-btn").addEventListener("click", function() {
    toggleView('donation-from');
  });
  
  document.getElementById("history-btn").addEventListener("click", function() {
    toggleView('history');
  });
  
 