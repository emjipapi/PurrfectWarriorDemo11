function clearCart() {
    // Clear cart items from local storage
    localStorage.removeItem('cart');

    // Remove all cart item elements from the DOM
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; // Clear all child elements
    
}
let selectedSize = null;

function toggleBox(boxNumber) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        if (index + 1 === boxNumber) {
            box.classList.add('active');
            selectedSize = box.innerText; // Capture the selected size
            console.log("Selected size:", selectedSize);
        } else {
            box.classList.remove('active');
        }
    });
}

function addToCart(name, price, imageUrl,) {
    console.log("Adding item to cart:", name);
    if (selectedSize) {
        console.log("Selected size:", selectedSize);
        // Check if the item already exists in the cart
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cartItems.findIndex(item => item.name === name && item.size === selectedSize);
        if (existingItemIndex !== -1) {
            // If the item already exists and the sizes are the same, increment the quantity
            cartItems[existingItemIndex].quantity++;
            console.log("Item already exists in cart. Incrementing quantity:", cartItems[existingItemIndex].quantity);
        } else {
            // If the item does not exist in the cart, add it
            const item = {
                name: name,
                price: price,
                imageUrl: imageUrl,
                size: selectedSize,
                quantity: 1
            };
            cartItems.push(item);
            console.log("Item added to cart:", item);
        }


        localStorage.setItem('cart', JSON.stringify(cartItems));
        console.log("Cart updated in localStorage:", cartItems);

        // Show modal
        $('#exampleModalCenter').modal('show');

        // Reset selectedSize
        selectedSize = null;

        // Reset box states
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.classList.remove('active');
        });

        showAndHideModal();
    } else {
        alert("Please select a size before adding to cart.");
    }
}


function showAndHideModal() {
    setTimeout(function () {
        $('#exampleModalCenter').modal('hide');
        updateCartLinkText(); // Hide the modal after 2 seconds
        
    }, 1500);
    
}