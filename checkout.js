console.log("✅ checkout.js is connected!");
document.addEventListener("DOMContentLoaded", function () {
    console.log("🔥 checkout.js is running AFTER DOM is fully loaded!");

    let orderSummary = document.getElementById("order-summary");
    console.log("📌 Order Summary Element (after DOM load):", orderSummary);

    if (!orderSummary) {
        console.error("❌ ERROR: 'order-summary' div is missing in checkout.html!");
        return;
    }

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("🛒 Cart Items:", cartItems);

    if (cartItems.length > 0) {
        orderSummary.innerHTML = cartItems.map(item => `
            <p>${item.name} - $${item.price} x ${item.quantity}</p>
        `).join("");
    } else {
        orderSummary.innerHTML = "<p>Your cart is empty!</p>";
    }
});
window.onload = function() {
    console.log("✅ checkout.js loaded AFTER DOM!");
    console.log("📌 Order Summary Element:", document.getElementById("order-summary"));
};
