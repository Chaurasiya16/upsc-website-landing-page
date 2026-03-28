// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    let answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// Smooth Scroll (optional enhancement)
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.hash)
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});