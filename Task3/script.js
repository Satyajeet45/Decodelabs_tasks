// ============================================
//  PROJECT 3 — Interactive Web Elements
//  JavaScript DOM Manipulation
// ============================================

// ── 1. DARK MODE TOGGLE ──────────────────────
const darkToggleBtn = document.getElementById('js-dark-toggle');

// Check if user had dark mode on before (saved in localStorage)
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('is-dark');
}

darkToggleBtn.addEventListener('click', function() {
  document.body.classList.toggle('is-dark');

  // Save the choice so it stays after page refresh
  if (document.body.classList.contains('is-dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});


// ── 2. HAMBURGER MENU TOGGLE ─────────────────
const menuToggleBtn = document.getElementById('js-menu-toggle');
const nav = document.getElementById('js-nav');

menuToggleBtn.addEventListener('click', function() {
  nav.classList.toggle('is-open');
  menuToggleBtn.classList.toggle('is-active');
});

// Close menu when a nav link is clicked
const navLinks = document.querySelectorAll('#js-nav a');
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    nav.classList.remove('is-open');
    menuToggleBtn.classList.remove('is-active');
  });
});


// ── 3. SERVICE CARD READ MORE TOGGLE ─────────
const cardToggleBtns = document.querySelectorAll('.js-card-toggle');

cardToggleBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const card = btn.closest('.js-card');
    const desc = card.querySelector('.card-desc');

    desc.classList.toggle('is-hidden');

    if (desc.classList.contains('is-hidden')) {
      btn.textContent = 'Read more ▼';
    } else {
      btn.textContent = 'Read less ▲';
    }
  });
});


// ── 4. PORTFOLIO FILTER ───────────────────────
const filterBtns = document.querySelectorAll('.js-filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {

    // Remove active class from all buttons
    filterBtns.forEach(function(b) {
      b.classList.remove('is-active');
    });

    // Add active class to clicked button
    btn.classList.add('is-active');

    const filter = btn.dataset.filter;

    // Show or hide items based on category
    portfolioItems.forEach(function(item) {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.remove('is-hidden');
      } else {
        item.classList.add('is-hidden');
      }
    });
  });
});


// ── 5. CONTACT FORM VALIDATION ───────────────
const submitBtn = document.getElementById('js-submit');
const formMsg   = document.getElementById('js-form-msg');

submitBtn.addEventListener('click', function() {
  const name    = document.getElementById('js-name').value.trim();
  const email   = document.getElementById('js-email').value.trim();
  const subject = document.getElementById('js-subject').value.trim();
  const message = document.getElementById('js-message').value.trim();

  // Simple check — are all fields filled?
  if (name === '' || email === '' || subject === '' || message === '') {
    formMsg.textContent = '⚠ Please fill in all fields before sending.';
    formMsg.classList.remove('is-hidden', 'is-success');
    formMsg.classList.add('is-error');
    return;
  }

  // Basic email format check
  if (!email.includes('@') || !email.includes('.')) {
    formMsg.textContent = '⚠ Please enter a valid email address.';
    formMsg.classList.remove('is-hidden', 'is-success');
    formMsg.classList.add('is-error');
    return;
  }

  // All good — show success message
  formMsg.textContent = '✓ Message sent! We will get back to you soon.';
  formMsg.classList.remove('is-hidden', 'is-error');
  formMsg.classList.add('is-success');

  // Clear the form
  document.getElementById('js-name').value    = '';
  document.getElementById('js-email').value   = '';
  document.getElementById('js-subject').value = '';
  document.getElementById('js-message').value = '';
});


// ── 6. BACK TO TOP BUTTON ────────────────────
// Create the button using JavaScript (document.createElement)
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑';
backToTopBtn.className = 'back-to-top js-back-top';
backToTopBtn.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopBtn);

// Show button only when user scrolls down
window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('is-visible');
  } else {
    backToTopBtn.classList.remove('is-visible');
  }
});

// Scroll to top on click
backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});