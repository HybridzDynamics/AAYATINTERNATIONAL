// Smooth scroll functionality for the "Learn More" button
document.querySelector('button').addEventListener('click', function () {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
// Optional: Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
      behavior: 'smooth'
    });
  });
});
