// Proceed to Checkout - Save Cart Data & Redirect
document.getElementById("checkout-btn")?.addEventListener("click", function () {
    if (localStorage.getItem("cart")) {
        window.location.href = "checkout.html"; // Redirect to checkout page
    } else {
        alert("Your cart is empty!");
    }
});
