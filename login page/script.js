const formContainer = document.getElementById('form-container');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// When "Register" is clicked
registerLink.addEventListener('click', () => {
    formContainer.style.transform = 'translateX(-50%)';
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

// When "Login" is clicked
loginLink.addEventListener('click', () => {
    formContainer.style.transform = 'translateX(0)';
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});
