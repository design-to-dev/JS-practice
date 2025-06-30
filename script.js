var addButtons = document.querySelectorAll(".addfriendbutton");

addButtons.forEach(function(button) {
  button.addEventListener("click", function () {
    var card = button.closest(".profile-card");
    var status = card.querySelector(".status");

    if (status.innerHTML.trim() === "Unknown") {
      status.innerHTML = "Friends";
      button.innerHTML = "Remove Friend";
      button.classList.remove("btn-primary");
      button.classList.add("btn-danger");

      // Show horror after 4 seconds
      setTimeout(function () {
        document.getElementById("killedOverlay").classList.remove("d-none");
        document.getElementById("bloodEffect").classList.remove("d-none");
        document.getElementById("horrorSound").play();
      }, 4000);
    } else {
      status.innerHTML = "Unknown";
      button.innerHTML = "Add Friend";
      button.classList.remove("btn-danger");
      button.classList.add("btn-primary");
    }
  });
});
