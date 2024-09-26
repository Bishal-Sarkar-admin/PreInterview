function success() {
  Swal.fire({
    title: "Success!",
    text: "You Successfully Submit Your Answer, Wait for AI Response.",
    icon: "success",
    confirmButtonText: "OK",
  });
}

function error() {
  Swal.fire({
    title: "Error!",
    text: "You’re offline. Check your connection",
    icon: "error",
    confirmButtonText: "OK",
  });
}
function successORerror() {
  if (updateOnlineStatus() == "Offline") {
    error();
  } else {
    success();
  }
}
