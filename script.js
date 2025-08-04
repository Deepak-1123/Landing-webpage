// Scroll to Contact Section
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// Alert on form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting us!");
});
