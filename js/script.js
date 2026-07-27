// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const siteHeader = document.querySelector('.site-header');

navToggle.addEventListener('click', () => {
  const isOpen = siteHeader.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    siteHeader.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Contact form validation =====
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

const fields = {
  name: {
    input: document.getElementById('name'),
    error: document.getElementById('nameError'),
    validate: (v) => v.trim().length >= 2,
    message: 'Enter your full name.'
  },
  email: {
    input: document.getElementById('email'),
    error: document.getElementById('emailError'),
    validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    message: 'Enter a valid email address.'
  },
  budget: {
    input: document.getElementById('budget'),
    error: document.getElementById('budgetError'),
    validate: (v) => v !== '',
    message: 'Select a budget range.'
  },
  message: {
    input: document.getElementById('message'),
    error: document.getElementById('messageError'),
    validate: (v) => v.trim().length >= 10,
    message: 'Tell us a bit more (10 characters minimum).'
  }
};

function validateField(key) {
  const field = fields[key];
  const value = field.input.value;
  const valid = field.validate(value);
  const group = field.input.closest('.form-group');

  if (!valid) {
    group.classList.add('error');
    field.error.textContent = field.message;
  } else {
    group.classList.remove('error');
    field.error.textContent = '';
  }
  return valid;
}

Object.keys(fields).forEach((key) => {
  fields[key].input.addEventListener('blur', () => validateField(key));
  fields[key].input.addEventListener('input', () => {
    const group = fields[key].input.closest('.form-group');
    if (group.classList.contains('error')) validateField(key);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.textContent = '';

  let allValid = true;
  Object.keys(fields).forEach((key) => {
    const valid = validateField(key);
    if (!valid) allValid = false;
  });

  if (!allValid) {
    const firstError = form.querySelector('.form-group.error input, .form-group.error select, .form-group.error textarea');
    if (firstError) firstError.focus();
    return;
  }

  // No backend wired up — this is a static front-end demo.
  // Replace this block with a fetch() call to your form endpoint
  // (e.g. Formspree, Netlify Forms, or your own API) when deploying.
  successMsg.textContent = "Thanks — your message is on its way. We'll reply within one business day.";
  form.reset();
});
