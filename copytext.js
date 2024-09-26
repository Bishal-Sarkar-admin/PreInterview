function copy() {
  var textToCopy = document.querySelector(".textToCopy").textContent;
  temp(textToCopy);
  sweetcopy("Text copied", 1500);
}

function copyEmail() {
  // Get the text inside the span with class "textToCopy"
  let emailText = document.querySelector("#text").textContent;
  temp(emailText);
  sweetcopy("Email copied", 9000);
}

//// Create a temporary textarea to hold the text for copying

function temp(textToCopy) {
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
}

// SweetAlert popup for confirmation
function sweetcopy(textdata, time) {
  Swal.fire({
    title: "Copied!",
    text: textdata,
    icon: "success",
    timer: time,
    showConfirmButton: false,
    position: "top-end",
    toast: true,
  });
}
