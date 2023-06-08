/* LOGIN BUTTON */
document.addEventListener("DOMContentLoaded", function() {
  var loginDiv = document.querySelector(".login");
  var dropdown = document.querySelector(".logindropdown");

  loginDiv.addEventListener('click', function(e) {
    dropdown.style.display = "flex";
    e.stopPropagation();
  });

  document.addEventListener("click", function(e) {
    if (!loginDiv.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
});

/* CART */
const cartButton = document.querySelector('.cart-button');
const cartContainer = document.getElementById('cart-container');
const closeButton = document.querySelector('.close-button-cart');

cartButton.addEventListener('click', () => {
  cartContainer.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  cartContainer.classList.remove('active');
}); 

/* TEXT WRITING */
const textElement = document.querySelector('.typing-text');
const text = ''; 
const typingSpeed = 50;
let charIndex = 0;

function typeText() {
  if (charIndex < text.length) {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  }
}
typeText();

/* FAQ */
const question = document.querySelectorAll('.cardquestion .question');

function activeAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

question.forEach((item) => {
  item.addEventListener('click', activeAccordion);
});

/* HAMBURGER DROPDOWN */
const hamburgerDropDown = document.querySelector('.classtotal');
const contentDropDown = document.querySelector('.hamburgerdropdown');

hamburgerDropDown.addEventListener('click', () => {
  contentDropDown.classList.toggle('active');
  hamburgerDropDown.classList.toggle('active');
});

const hamburgerHeader = document.querySelector('.hamburger');
const contentMenuHamburger = document.querySelector('.menumobileheader');

hamburgerHeader.addEventListener('click', () => {
  contentMenuHamburger.classList.toggle('active');
  hamburgerHeader.classList.toggle('active');
});

const productNavBar = document.querySelector('.classtotal');
const react = productNavBar.getBoundingClientRect();
console.log(react.top);