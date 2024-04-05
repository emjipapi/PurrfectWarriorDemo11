document.addEventListener('DOMContentLoaded', function () {
    // Call the function to update the cart item count when the page loads
    updateCartItemCount();
});

function updateQuantity(newQuantity, itemName, itemSize) {
    // Retrieve cart items from localStorage
    console.log("Updating quantity for item:", itemName);
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Find the item in the cart
    const index = cartItems.findIndex(item => item.name === itemName && item.size === itemSize);

    if (index !== -1) {
        // Update the quantity of the item
        cartItems[index].quantity = parseInt(newQuantity);
        console.log("Updated quantity:", newQuantity);

        // Save the updated cart items back to localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));
        console.log("Cart items updated in localStorage:", cartItems);

        // Update the display of cart items
        displayCartItems();
    }
}


function displayCartItems() {
    console.log("Displaying cart items...");
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Cart items retrieved from localStorage:", cartItems);
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const productsTotalElement = document.getElementById('productsTotal');

    let totalAmount = 0; // Variable to store the total amount

    cartItemsContainer.innerHTML = ''; // Clear previous items

    cartItems.forEach((item, index) => {
        const totalPrice = parseFloat(item.price) * item.quantity;
        const quantityInputId = `form${index + 1}`;
        totalAmount += totalPrice; // Add the price of each product to the total amount
        const itemHTML = `
        <div class="row">
                                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 ">
                                        <!-- Image -->
                                        <div class="hover-overlay hover-zoom ripple rounded"
                                            data-mdb-ripple-color="light">
                                            <a href="${item.linkProduct}" style="cursor: pointer;">
                                            <img src="${item.imageUrl}" class="w-100"
                                            </a>
                                            <a href="#!">
                                                <div class="mask"></div>
                                            </a>
                                        </div>
                                        <!-- Image -->
                                    </div>
                                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0 ">
                                        <!-- Data -->
                                        <p class="kanit-light"><a href="${item.linkProduct}" style="text-decoration: none; color: inherit; cursor: pointer;">${item.name}</a></p>
                                        <p class="kanit-light3">Size: ${item.size}</p>
                                        <button class="btn btn-primary btn-sm bi bi-trash" onclick="deleteCartItem(${cartItems.indexOf(item)})"></button>

                                        <!-- Data -->
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                        <!-- Quantity -->
                                        <div class="row mb-4" style="max-width: 300px; ">
                                            <div class="col-auto">
                                                <label for="form1" class="kanit-light4">QTY:</label>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline">
    <input id="form${index}" min="0" name="quantity" value="${item.quantity}" type="number" class="form-control" onchange="updateQuantity(this.value, '${item.name}', '${item.size}')"/>
    <label class="form-label" for="form${index}"></label>
</div>
                                            </div>
                                        </div>
                                        <!-- Quantity -->
                                        <!-- Price -->
                                        <p class="text-start text-md-center kanit-light3">
                                            <span style="font-size: 75%;">&#8369;${parseFloat(item.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} PHP</span><br>


                                            <strong>&#8369;${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})} PHP</strong>
                                        </p>
                                        <!-- Price -->
                                    </div>
                                </div>
                                <div class="border"></div>
                                <!-- Single item -->
        `;
        cartItemsContainer.innerHTML += itemHTML;
    });
    const numberOfItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const shippingCostPerThreeItems = 50;
    const numberOfShipments = Math.ceil(numberOfItems / 3);
    const shippingCost = numberOfShipments * shippingCostPerThreeItems;

    // Update the total price of products
    productsTotalElement.textContent = `₱${totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    // Update the shipping cost display
    const shippingCostElement = document.getElementById('shippingCost');
    shippingCostElement.textContent = `₱${shippingCost.toFixed(2)}`;

    // Update the total amount (including shipping)
    const totalAmountElement = document.getElementById('totalAmount');
    const grandTotal = totalAmount + shippingCost;
    totalAmountElement.innerHTML = `<strong>₱${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong>`;
}
displayCartItems();

function displayCartItemsModal() {
    console.log("Displaying cart items...");
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Cart items retrieved from localStorage:", cartItems);
    const productsTotalElement = document.getElementById('modalProductsTotal');

    let totalAmount = 0; // Variable
    const cartItemsModalContainer = document.getElementById('cartItemsModalContainer');

    cartItemsModalContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const totalPrice = parseFloat(item.price) * item.quantity;
        const quantityInputId = `form${index + 1}`;
        totalAmount += totalPrice;
        const itemHTML = `
<div class="row">
    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 ">
        <!-- Image -->
        <div class="hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
            <a href="${item.linkProduct}" style="cursor: pointer;">
                <img src="${item.imageUrl}" class="w-100" </a> <a href="#!">
                <div class="mask"></div>
            </a>
        </div>
        <!-- Image -->
    </div>
    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0 ">
        <!-- Data -->
        <p class="kanit-light"><a href="${item.linkProduct}"
                style="text-decoration: none; color: inherit; cursor: pointer;">${item.name}</a></p>
        <p class="kanit-light3">Size: ${item.size}</p>

        <!-- Data -->
    </div>
    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
        
        <!-- Price -->
        <p class="text-start text-md-center kanit-light3">
            <span style="font-size: 75%;">&#8369;${parseFloat(item.price).toLocaleString('en-US', {
                minimumFractionDigits: 2, maximumFractionDigits: 2 })} PHP × ${item.quantity}</span><br>

            <strong>&#8369;${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits:
                2})} PHP</strong>
        </p>
        <!-- Price -->
    </div>
</div>
<div class="spacer"></div>
<div class="border"></div>
<!-- Single item -->
`;
        cartItemsModalContainer.innerHTML += itemHTML;
    });

    productsTotalElement.textContent = `₱${totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    // Calculate shipping cost
    const numberOfItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const shippingCostPerThreeItems = 50;
    const numberOfShipments = Math.ceil(numberOfItems / 3);
    const shippingCost = numberOfShipments * shippingCostPerThreeItems;

    // Update the shipping cost display
    const shippingCostElement = document.getElementById('modalShippingCost');
    shippingCostElement.textContent = `₱${shippingCost.toFixed(2)}`;

    // Update the total amount (including shipping)
    const totalAmountElement = document.getElementById('modalTotalAmount');
    const grandTotal = totalAmount + shippingCost;
    totalAmountElement.innerHTML = `<strong>₱${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>`;
}


function deleteCartItem(index) {
    // Get the cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the item at the specified index
    cartItems.splice(index, 1);

    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Update the cart display
    displayCartItems();
    updateCartItemCount();
    updateCartLinkText();
}
// Function to update the cart item count in the header
function updateCartItemCount() {
    const cartItemCountElement = document.querySelector('.cart-item-count');
    const uniqueItemCount = getUniqueItemCount();

    if (uniqueItemCount === 0) {
        cartItemCountElement.textContent = "Cart - No Items";
    } else if (uniqueItemCount === 1) {
        cartItemCountElement.textContent = "Cart - 1 Item";
    } else {
        cartItemCountElement.textContent = `Cart - ${uniqueItemCount} Items`;
    }
}
function clearCart() {
    // Clear the cart items in local storage
    localStorage.removeItem('cart');
    
    // Update the cart display
    displayCartItems();
    updateCartItemCount();
    updateCartLinkText();
}
function showAndHideModal() {
        $('#successfulModal').modal('show');
        setTimeout(function () {
            $('#successfulModal').modal('hide');
            clearCart();
        }, 3000);
    }

// Call the function to update the cart item count when the page loads