function submit() {
  var name = document.getElementById("name");
  var university = document.getElementById("university");
  var email = document.getElementById("email");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");
  var file = document.getElementById("file");
  var terms = document.getElementById("terms");
  var error = document.getElementById("error");

  if (
    name.value.length >= 1 &&
    university.value.length >= 1 &&
    email.value.length >= 1 &&
    address.value.length >= 1 &&
    phone.value.length >= 1 &&
    file.value.length >= 1 &&
    terms.value.length >= 1
  ) {
    error.style.display = "none";
    alert("Form submit successfully");
    // Reset form
    name.value = "";
    university.value = "";
    email.value = "";
    address.value = "";
    phone.value = "";
    file.value = "";
    terms.value = "";
    error.value = "";
  } else {
    error.style.display = "inline";
  }
  console.log(form);
}
