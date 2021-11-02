import throttle from 'lodash/throttle';
const FORM_SAVED_INF = 'formSavedInf';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(formInput, 500));

const dataUpdate = {};
filledTextarea();


function formInput(e) {
    dataUpdate[e.target.name] = e.target.value;
    localStorage.setItem(FORM_SAVED_INF, JSON.stringify(dataUpdate));
    console.log(dataUpdate);
}

function filledTextarea() {
    const saveMessage = JSON.parse(localStorage.getItem(FORM_SAVED_INF));
  if (saveMessage) {
    console.log(saveMessage);
    input.value = saveMessage.email;
    textarea.value = saveMessage.message;
  }
}

function formSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(FORM_SAVED_INF);
}


