// Smooth scroll functionality for the "Learn More" button
document.querySelector('button').addEventListener('click', function () {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
