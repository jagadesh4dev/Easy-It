function bookRide() {
    const pickup = document.getElementById("pickup").value;
    const dropoff = document.getElementById("dropoff").value;
    const phone = document.getElementById("phone").value;
    const errorMessage = document.getElementById("error-message");

    if (!pickup || !dropoff || !phone) {
        errorMessage.textContent = "Please fill in all fields.";
    } else {
        errorMessage.textContent = "";
        // Redirect to confirmation page with booking details
        window.location.href = "confiramtion.html";
    }
}
