// Початковий об'єкт
let formData = {
  email: ' ',
  message: ' ',
};

// Елементи форми
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const localStorageKey = 'feedback-form-state';

// Завантаження даних із localStorage при старті
const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
  formData = JSON.parse(savedData);

  // Заповнення полів форми, без undefined
  emailInput.value = formData.email || '';
  messageInput.value = formData.message || '';
}

// Делегування події input
form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name in formData) {
    formData[name] = value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

// Сабміт форми
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  // Вивід у консоль
  console.log(formData);

  // Очищення
  localStorage.removeItem(localStorageKey);
  formData = { email: '', message: '' };
  form.reset();
});
