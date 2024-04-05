import products from './productsList.js';

console.log(products);

const productDropdown = document.getElementById("productDropdown");

// Loop through products and create list items
products.forEach(product => {
    const listItem = document.createElement("li");
    listItem.classList.add("dropdown-item");

    // Create anchor tag
    const anchorTag = document.createElement("a");
    anchorTag.href = product.productLink; // Set href to the productLink
    anchorTag.style.cursor = "pointer"; // Set cursor to pointer
    anchorTag.style.textDecoration = "none"; // Remove text decoration
    anchorTag.style.color = "inherit"; // Inherit color


    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.style.width = "50px"; // Adjust image size as needed

    const productName = document.createElement("span");
    productName.textContent = product.name;
    productName.classList.add("search-name");

    // Append image and product name to anchor tag
    anchorTag.appendChild(image);
    anchorTag.appendChild(productName);

    // Append anchor tag to list item
    listItem.appendChild(anchorTag);

    // Append list item to dropdown menu
    productDropdown.appendChild(listItem);
});
