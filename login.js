function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (!username || !password) {
        errorMessage.textContent = "Please fill out both fields.";
    } else {
        errorMessage.textContent = "";
        alert("Login successful!");
    }
}

function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Predefined username and password
    const validUsername = "sharan";
    const validPassword = "21113063";

    if (!username || !password) {
        errorMessage.textContent = "Please fill out both fields.";
    } else if (username === validUsername && password === validPassword) {
        errorMessage.textContent = "";
        // Redirect to the next page if credentials are correct
        window.location.href = "ecommerce.html";
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
}

function addToCart() {
    // Add your cart functionality here if needed
    alert("Item added to cart!");
    // Redirect to the cart page
    window.location.href = "addtocart.html";
}
