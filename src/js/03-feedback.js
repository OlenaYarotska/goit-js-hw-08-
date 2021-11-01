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

    const formActive = e.currentTarget.elements;
    const inputActive = formActive.email.value;
    const textareaActive = formActive.message.value;
    const activeInf = {
        inputActive,
        textareaActive,
    };
    console.log(activeInf);
    e.currentTarget.reset();
    localStorage.removeItem(FORM_SAVED_INF);
};

filledTextarea();

function filledTextarea() {
    const savedMessage = localStorage.getItem(FORM_SAVED_INF);
    const parsedMessage = JSON.parse(savedMessage);
  
    if (parsedMessage) {
        input.value = parsedMessage.inputActive; 
        textarea.value = parsedMessage.textareaActive;
        dataUpdate.textareaActive = parsedMessage.textareaActive;
        dataUpdate.inputActive = parsedMessage.inputActive;
    }
};





