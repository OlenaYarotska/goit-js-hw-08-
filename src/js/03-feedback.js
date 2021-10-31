import throttle from 'lodash/throttle';
const FORM_SAVED_INF = 'formSavedInf';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const dataUpdate = {};

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(formInput, 500));

function formInput(e) {
    dataUpdate[e.target.name] = e.target.value;
    localStorage.setItem('FORM_SAVED_INF', JSON.stringify(dataUpdate));
        
};

function formSubmit(e) {
    e.preventDefault();
    e.target.reset();
    console.log('formSavedInf', JSON.parse(localStorage.getItem(FORM_SAVED_INF)));
    localStorage.removeItem(FORM_SAVED_INF);
};

filledTextarea();

function filledTextarea() {
    const textareaSavedMessage = JSON.parse(localStorage.getItem(FORM_SAVED_INF));
    if (textareaSavedMessage && textareaSavedMessage.message) {
        textarea.value = textareaSavedMessage.message;
    };

    if (textareaSavedMessage && textareaSavedMessage.input) {
        input.value = textareaSavedMessage.input;
    };  
};





