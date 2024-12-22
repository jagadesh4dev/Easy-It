function initMap(latitude, longitude) {
    // Center map on user's location
    const userLocation = { lat: latitude, lng: longitude };
    
    // Initialize the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: userLocation,
    });

    // Add a marker at user's location
    new google.maps.Marker({
        position: userLocation,
        map: map,
        title: "Your Current Location",
    });
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                initMap(latitude, longitude);
            },
            () => {
                alert("Unable to retrieve your location.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

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
        window.location.href = "location.html";
    }
}

// Load user location when the page is loaded
window.onload = getUserLocation;
