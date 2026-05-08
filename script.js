function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

const scrollButtons = document.querySelectorAll('[data-target]');
scrollButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    scrollToSection(target);

    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

const reservationForm = document.getElementById('reservationForm');
reservationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Thank you for your reservation! We will contact you soon.');
  reservationForm.reset();
  document.getElementById('guests').value = '2';
});
