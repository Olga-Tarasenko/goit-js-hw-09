const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('feedback-form');
const inputForm = form.elements.email;

const localStorageInputKey = 'email';
const localStorageTextareaKey = 'message';
