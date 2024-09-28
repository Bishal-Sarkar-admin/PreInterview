function success() {
  Swal.fire({
    title: "Send", // Changed the title to "Sent"
    text: "Answer submitted, awaiting AI response.",
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
    position: "top-end",
    toast: true,
  });
}

function error() {
  Swal.fire({
    title: "Error!",
    text: "You're offline. Check your connection.",
    icon: "error",
    timer: 1500,
    showConfirmButton: false,
    position: "top-end",
    toast: true,
  });
}

function successORerror() {
  if (updateOnlineStatus() == "Offline") {
    error();
  } else {
    success();
  }
}
