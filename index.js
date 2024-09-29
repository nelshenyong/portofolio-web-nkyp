document.querySelectorAll(".navbar-nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const portfolioImages = document.querySelectorAll(".portfolio-image");
const modalImage = document.getElementById("modalImage");

portfolioImages.forEach((image) => {
  image.addEventListener("click", function () {
    const src = this.getAttribute("src");
    modalImage.setAttribute("src", src);
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Message sent successfully!");
    this.reset();
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

window.onload = function () {
  document.body.classList.add("visible");
};
