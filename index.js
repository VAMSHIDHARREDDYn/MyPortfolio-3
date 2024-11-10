document.addEventListener('DOMContentLoaded', function() {
  // Function to toggle the menu
  function toggleMenu() {
      var menutoggle = document.querySelector('.toggle');
      var menu = document.querySelector('.menu');
      menutoggle.classList.toggle('active');
      menu.classList.toggle('active');
  }

  // Add event listener to the menu toggle button
  var menutoggle = document.querySelector('.toggle');
  menutoggle.addEventListener('click', toggleMenu);

  // Add event listener to each menu item to close the menu when clicked
  var menuLinks = document.querySelectorAll('.menu a'); // Assuming your nav links are in <a> tags
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var menu = document.querySelector('.menu');
      var menutoggle = document.querySelector('.toggle');
      menutoggle.classList.remove('active'); // Close the menu toggle button
      menu.classList.remove('active'); // Close the menu
    });
  });

  // ScrollReveal configuration
  const sr = ScrollReveal({
      origin: 'top',
      distance: '85px',
      duration: 2000,
      reset: true
  });

  sr.reveal('.home-text', {});
  sr.reveal('.home-img', { delay: 2000 });
  sr.reveal('.social', {});
  sr.reveal(".skills-subtitle", {});
  sr.reveal(".skills-text", {});
  sr.reveal(".skills-data", { interval: 100 });
  // sr.reveal(".skills-img", { delay: 600 });
  sr.reveal('.about-img', {});
  sr.reveal('.heading', {});
  sr.reveal('.about-text', { delay: 2000 });

  sr.reveal('.services-content', {}); // Corrected class name

  sr.reveal('.work-text', {});
  sr.reveal('.work-img', { delay: 2000 });
});