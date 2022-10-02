const inputBtn = document.querySelector('.email__input-btn');
const errorMessage = document.querySelector('.email__input--error');
const error = document.querySelector('.error');
const inputContainer = document.querySelector('.bg--red');
const email = document.querySelector('.email__input');

const form = document.querySelector('.section--input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    


    if (email.value === '' || email.value == null) {
        error.textContent = 'Whoops, make sure its an email';
        inputContainer.classList.add('email__input-box')
        errorMessage.style.display = 'block';


    } else {
        error.textContent = '';
        errorMessage.style.display = 'none';
        inputContainer.classList.remove('email__input-box')

    }


})