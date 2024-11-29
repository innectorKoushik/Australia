// script.js
const btn = document.querySelector('.btn');
const fallingHeartsContainer = document.getElementById('falling-hearts-container');

btn.addEventListener('click', () => {
  alert('Love You Too, Janu! ❤️ Madhurima + Koushik Forever!.Sorry Sona Ami hurt korte chai ni.Bojho na kato valo basi tomay.Miss you🥺');

  // Add 50 falling hearts
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.animationDuration = `${3 + Math.random() * 2}s`;
    fallingHeartsContainer.appendChild(heart);

    // Remove heart after animation ends
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }
});
