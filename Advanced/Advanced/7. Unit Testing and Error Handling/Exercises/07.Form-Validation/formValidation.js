function validate() {
  const prtnName = /^[A-Za-z0-9]{3,20}$/;
  const ptrnPass = /^[A-Za-z0-9_]{5,15}$/;
  const emailPtrn = /^[^@.]+@[^@]*\.[^@]*$/;
  const checkboxRef = document.getElementById("company");
  const submitBtn = document.getElementById("submit");

  const fieldset = document.getElementById("companyInfo");
  const valueCompany = document.getElementById("companyNumber");

  checkboxRef.addEventListener("change", () => {
    if (checkboxRef.checked) {
      fieldset.style.display = "block";
    } else {
      fieldset.style.display = "none";
    }
  });

  submitBtn.addEventListener("click", check);

  function check(event) {
    event.preventDefault();
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPass = document.getElementById("confirm-password");

    const usernameCheck = checkAndSet(prtnName.test(username.value), username);
    const passWordCheck = checkAndSet(
      ptrnPass.test(password.value) && password.value == confirmPass.value,
      password
    );
    const confirmPassCheck = checkAndSet(passWordCheck, confirmPass);
    const emailCheck = checkAndSet(emailPtrn.test(email.value), email);
    let valueCompanyCheck;

    if (checkboxRef.checked) {
      valueCompanyCheck = checkAndSet(
        valueCompany.value >= 1000 && valueCompany.value <= 9999,
        valueCompany
      );
    }

    if (usernameCheck && passWordCheck && emailCheck && confirmPassCheck) {
      if (checkboxRef.checked && !valueCompanyCheck) {
        document.getElementById("valid").style.display = "none";
        return;
      }
      document.getElementById("valid").style.display = "block";
    } else {
      document.getElementById("valid").style.display = "none";
    }
  }

  function checkAndSet(valueCheck, elementReference) {
    if (valueCheck) {
      elementReference.style.border = "";
      return true;
    } else {
      elementReference.style.borderColor = "red";
      return false;
    }
  }
}
