function getInputFieldValueById(id) {
    const value = document.getElementById(id).value;
    return parseFloat(value) || 0;
  }
  
  function getDonationTextValue(id) {
    const donationText = document.getElementById(id).innerText;
    const numericValue = parseFloat(donationText.replace(/[^\d.-]/g, ''));
    return numericValue || 0; 
  }