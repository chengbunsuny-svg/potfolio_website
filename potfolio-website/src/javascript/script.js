const words = ["Designer", "Developer", "Animator", "Video Editor"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const target = document.querySelector('.typewriter');
  
  if (!target) return; 

  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    target.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    target.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 80 : 150;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; 
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; 
    typeSpeed = 500; 
  }

  setTimeout(typeEffect, typeSpeed);
}

window.addEventListener('DOMContentLoaded', typeEffect);