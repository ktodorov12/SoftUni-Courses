function validate() {
  const ptrnNamePassword = /\w+/; // 3-20 inclusively; // 5-15
  const emailPtrn = /[a-z]+@[a-z]+.[a-z]+/gm;
  const checkboxRef = document.getElementById("company");
  const submitBtn = document.getElementById("submit");

  let usernameCheck = false;
  let passWordCheck = false;
  let confirmPassCheck = false;
  let emailCheck = false;
  const companyNumCheck = false;

  let companyNum;
  const fieldset = document.getElementById("companyInfo");
  const valueCompany = document.getElementById("companyNumber");

  checkboxRef.addEventListener("change", () => {
    if (checkboxRef.checked) {
      fieldset.style.display = "block";
      companyNum = valueCompany.value;
    } else {
      fieldset.style.display = "none";
    }
  });

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPass = document.getElementById("confirm-password");

    if (
      username.value.length >= 3 &&
      username.value.length <= 20 &&
      ptrnNamePassword.test(username.value)
    ) {
      usernameCheck = true;
      username.style.border = "none";
    } else {
      usernameCheck = false;
      username.style.borderColor = "red";
    }

    if (
      password.value.length >= 5 &&
      password.value.length <= 15 &&
      ptrnNamePassword.test(password.value)
    ) {
      passWordCheck = true;
      password.style.border = "none";
    } else {
      passWordCheck = false;
      password.style.borderColor = "red";
    }

    if (password.value == confirmPass.value) {
      confirmPassCheck = true;
      confirmPass.style.border = "none";
    } else {
      confirmPassCheck = false;
      confirmPass.style.borderColor = "red";
    }

    if (emailPtrn.test(email.value)) {
      emailCheck = true;
      email.style.border = "none";
    } else {
      emailCheck = false;
      email.style.borderColor = "red";
    }
  });

  if (checkboxRef.checked) {
    if (companyNum >= 1000 && companyNum <= 9999) {
      companyNumCheck = true;
      valueCompany.style.border = "none";
    } else {
      companyNumCheck = false;
      valueCompany.style.borderColor = "red";
    }
  }

  if (usernameCheck && passWordCheck && emailCheck && confirmPassCheck) {
    document.getElementById("valid").style.display = "block";
    debugger
  }
}
