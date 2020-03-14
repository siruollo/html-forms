'use strict';

const botMessages = [
  'Ты еще тут?',
  'Как же ты надоел',
  'Пиши в спортлото',
  'Да сколько это еще будет продолжаться?',
  'Некоторые люди совсем не понимают намеки',
  'Время позднее, тебе пора спать',
  'Ну хорошо, сформулируй вопрос еще раз и я тебе отвечу',
];

const chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

const messages = document.getElementById('chat-widget__messages');
const message = document.getElementById('chat-widget__input');
const chatContainer = document.querySelector('.chat-widget__messages-container');

message.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && message.value) {
    const date = new Date();

    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
        <div class="message__text">
          ${message.value}
        </div>
      </div>
      `;

    const botMessage = botMessages[Math.floor(Math.random() * botMessages.length)];
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
        <div class="message__text">
          ${botMessage}
        </div>
      </div>
      `;

    message.value = '';

    chatContainer.scroll(0, chatContainer.getBoundingClientRect().bottom);
  }
});

message.addEventListener('focus', () => {
  setTimeout(() => {
    const date = new Date();
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
        <div class="message__text">
          Тебе че-то нужно? Или просто мое время тратишь?
        </div>
      </div>
      `;
  }, 30000);
});