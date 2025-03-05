document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.add-to-cart').addEventListener('click', function() {
        let quantity = document.getElementById('quantity').value;
        alert(`Added ${quantity} item(s) to cart!`);
    });
});
let cart = [];

// Add to cart function
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.add-to-cart')) {
        document.querySelector('.add-to-cart').addEventListener('click', function() {
            let productName = "Classic White T-Shirt";
            let price = 19.99;
            let quantity = parseInt(document.getElementById('quantity').value);
            addToCart(productName, price, quantity);
        });
    }
    loadCart();
});

function addToCart(name, price, quantity) {
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name, price, quantity });
    }
    saveCart();
    alert(`${quantity} item(s) added to cart!`);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    let storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        displayCart();
    }
}

function displayCart() {
    let cartTable = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');
    cartTable.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        let row = cartTable.insertRow();
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Remove</button></td>
        `;
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    saveCart();
    displayCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
}
function addToCart(name, price) {
    let quantity = parseInt(document.getElementById('quantity').value);
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name, price, quantity });
    }
    saveCart();
    alert(`${quantity} item(s) added to cart!`);
}
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("user")) {
        document.body.innerHTML = `<h2>Welcome, ${localStorage.getItem("user")}! <button onclick="logout()">Logout</button></h2>`;
    }
});

function toggleAuth() {
    let formTitle = document.getElementById("form-title");
    let authButton = document.getElementById("auth-button");
    let toggleText = document.getElementById("toggle-auth");

    if (formTitle.innerText === "Login") {
        formTitle.innerText = "Sign Up";
        authButton.innerText = "Sign Up";
        toggleText.innerHTML = "Already have an account? <span onclick='toggleAuth()'>Login</span>";
    } else {
        formTitle.innerText = "Login";
        authButton.innerText = "Login";
        toggleText.innerHTML = "Don't have an account? <span onclick='toggleAuth()'>Sign up</span>";
    }
}

document.getElementById("auth-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    localStorage.setItem("user", email);
    alert("Login Successful!");
    location.reload();
});

function logout() {
    localStorage.removeItem("user");
    location.reload();
}

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
