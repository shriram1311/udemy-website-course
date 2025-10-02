console.log('Website loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready!');

    // Get the button
    const backToTopBtn = document.getElementById("backToTop");

    // Show button when user scrolls down 300px
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    // Scroll smoothly to top when clicked
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

});
