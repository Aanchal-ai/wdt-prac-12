// Initialize an empty cart
let cart = [];

// Function to add product to cart
function addToCart(productId, productName, productPrice) {
    // Create a new product object
    const product = {
        id: productId,
        name: productName,
        price: productPrice
    };

    // Add product to the cart array
    cart.push(product);

    // Update the cart UI and total
    updateCart();
}

// Function to update the cart UI and total
function updateCart() {
    // Get the cart items list and total elements
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Clear the cart items list
    cartItems.innerHTML = '';

    // Initialize total price
    let total = 0;

    // Loop through each item in the cart and create an HTML list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        
        // Add the price to the total
        total += item.price;
    });

    // Update the total price
    cartTotal.textContent = total.toFixed(2);
}

// Add event listeners to the "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productId = button.dataset.id;
        const productName = button.dataset.name;
        const productPrice = parseFloat(button.dataset.price);
        
        // Call addToCart function when a button is clicked
        addToCart(productId, productName, productPrice);
    });
});
