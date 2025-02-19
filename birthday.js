// script.js
function updateCountdown() {
    const birthday = new Date('2025-02-24T00:00:00');
    const now = new Date();
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    document.getElementById('countdown').innerText = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}
setInterval(updateCountdown, 1000);

function addMessage() {
    const input = document.getElementById('messageInput');
    if (input.value.trim() === '') return;
    const div = document.createElement('div');
    div.textContent = input.value;
    document.getElementById('guestMessages').appendChild(div);
    input.value = '';
}

function blowCandles() {
    document.querySelector('.cake').innerText = '🎂✨';
}

let score = 0;
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 90 + '%';
    heart.style.top = '0px';
    heart.addEventListener('click', function() {
        score++;
        document.getElementById('score').innerText = score;
        heart.remove();
    });
    document.getElementById('gameContainer').appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}
setInterval(createHeart, 1000);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
