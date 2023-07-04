// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
  
        const target = document.querySelector(link.getAttribute("href"));
        const offsetTop = target.offsetTop;
  
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      });
    });
  });
  