
var darkmodecheckbox = document.getElementById("darkmodecheckbox");
var isDarkModeOn = false;

// Check if the user has previously set the dark mode
if (localStorage.getItem("isDarkModeOn") === "true") {
  isDarkModeOn = true;
  document.body.classList.add("darkmode");
  darkmodecheckbox.checked = true;
}

darkmodecheckbox.addEventListener("change", function () {
  isDarkModeOn = !isDarkModeOn;
  
  // Check if the dark mode is already on before applying the transition
  if (isDarkModeOn) {
    document.body.classList.toggle("darkmode");
  } else {
    document.body.classList.toggle("darkmode-with-transition");
    setTimeout(function () {
      document.body.classList.toggle("darkmode");
      document.body.classList.toggle("darkmode-with-transition");
    }, 300);
  }
  
  // Store the state of the dark mode in local storage
  localStorage.setItem("isDarkModeOn", isDarkModeOn);
});

window.addEventListener('resize', function() {
  // Code to execute when the window is resized
  if (window.innerWidth < 768) {
      // Adjust styles for small screens
  } else {
      // Adjust styles for larger screens
  }
});
function changeImage(element, newSrc) {
  element.querySelector('img').src = newSrc;
}

// Function to get the number of unique items in the cart
function getUniqueItemCount() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const uniqueItemCombinations = new Set(cartItems.map(item => `${item.name}-${item.size}`));
  return uniqueItemCombinations.size;
}

// Function to update the cart link text
function updateCartLinkText() {
  const cartLink = document.getElementById('cartLink');
  const uniqueItemCount = getUniqueItemCount();
  cartLink.textContent = `CART(${uniqueItemCount})`;
}

// Call the function to update the cart link text when the page loads
updateCartLinkText();

document.addEventListener('DOMContentLoaded', function () {
  fetch('login.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('loginModalContainer').innerHTML = html;
      });
});
document.addEventListener('DOMContentLoaded', function () {
  fetch('signup.html')
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to fetch signup.html');
          }
          return response.text();
      })
      .then(html => {
          document.getElementById('signupModalContainer').innerHTML = html;
      })
      .catch(error => {
          console.error('Error fetching sign-up modal:', error);
      });
});
const ratingValue = 1;

// Round to nearest 0.5 and convert to integer
const roundedRating = Math.round(ratingValue * 2) / 2;

// Get all star elements
const stars = document.querySelectorAll('.star-rating span');

// Iterate over stars and add Bootstrap icon classes to represent the rating
for (let i = 0; i < stars.length; i++) {
  if (i < Math.floor(roundedRating)) {
    stars[i].classList.add('bi', 'bi-star-fill');
  } else if (i === Math.floor(roundedRating) && roundedRating % 1 !== 0) {
    stars[i].classList.add('bi', 'bi-star-half');
  } else {
    stars[i].classList.add('bi', 'bi-star-empty');
  }
}






