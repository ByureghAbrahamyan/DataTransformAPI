function validateForm() {
  var emailInput = document.getElementById('email').value;

  if (emailInput === '') {
    alert('Please enter an email address');
    return false;
  }

  return true;
}
