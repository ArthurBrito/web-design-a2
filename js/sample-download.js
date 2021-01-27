// Check if data is available to remove button disabled
function download() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var error = document.getElementById("error");

  if (name.value.length >= 1 && email.value.length >= 1) {
    error.style.display = "none";

    // Start downloading the file
    a = document.createElement("a");
    document.body.appendChild(a);
    a.download = name;
    a.href = "./samples.zip";
    a.click();
  } else {
    error.style.display = "inline";
  }
}
