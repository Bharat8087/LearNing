document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const profileForm = document.getElementById('profileForm');

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileUpdate);
        loadProfileData();
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    const productList = document.getElementById('productList');
    if (productList) {
        fetchProducts();
    }

    const toggleButtons = document.querySelectorAll('.toggle-buttons button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', handleToggle);
    });

    const checkoutButton = document.getElementById('checkoutButton');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', handleCheckout);
    }

    function handleSignup(event) {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(user => user.email === email)) {
            alert('Email already in use');
            return;
        }

        users.push({ firstName, lastName, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful');
        window.location.href = 'login.html';
    }

    function handleLogin(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            alert('Invalid email or password');
            return;
        }

        const token = generateToken();
        localStorage.setItem('currentUser', JSON.stringify({...user, token }));
        alert('Login successful');
        window.location.href = 'shop.html';
    }

    function handleProfileUpdate(event) {
        event.preventDefault();
        const firstName = document.getElementById('profileFirstName').value;
        const lastName = document.getElementById('profileLastName').value;
        const email = document.getElementById('profileEmail').value;
        const password = document.getElementById('profilePassword').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        users = users.map(user => {
            if (user.email === currentUser.email) {
                return { firstName, lastName, email, password };
            }
            return user;
        });

        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify({ firstName, lastName, email, password }));
        alert('Profile updated');
    }

    function handleSearch(event) {
        const query = event.target.value.toLowerCase();
        filterProducts(query);
    }

    function handleToggle(event) {
        const category = event.target.dataset.category;
        filterProducts(undefined, category);
    }

    function handleCheckout() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const options = {
            "key": "rzp_test_PV1oQ0oMtgXOsq",
            "amount": 1000,
            "currency": "INR",
            "name": "My Shop",
            "description": "Test Transaction",
            "handler": function(response) {
                alert("Payment Successful: " + response.razorpay_payment_id);
                localStorage.removeItem('cart');
                displayCartItems();
            },
            "prefill": {
                "name": currentUser.firstName + " " + currentUser.lastName,
                "email": currentUser.email
            }
        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
    }

    function fetchProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => {
                products = products.map(product => ({
                    ...product,
                    Colours: getRandomColors(),
                    sizes: getRandomSizes()
                }));
                localStorage.setItem('products', JSON.stringify(products));
                displayProducts(products);
            })
            .catch(error => console.error('Error fetching products:', error));
    }

    function getRandomColors() {
        const colors = ['red', 'blue', 'black', 'green', 'yellow'];
        return Array.from({ length: 3 }, () => colors[Math.floor(Math.random() * colors.length)]);
    }

    function getRandomSizes() {
        const sizes = ['s', 'm', 'l', 'xl'];
        return Array.from({ length: 2 }, () => sizes[Math.floor(Math.random() * sizes.length)]);
    }

    function displayProducts(products) {
        const productList = document.getElementById('productList');
        productList.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>$${product.price}</p>
                <p>Colours: ${product.Colours.join(', ')}</p>
                <p>Sizes: ${product.sizes.join(', ')}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    function filterProducts(query = '', category = '') {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        if (query) {
            products = products.filter(product => product.title.toLowerCase().includes(query));
        }
        if (category) {
            products = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
        }
        displayProducts(products);
    }

    window.addToCart = function(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const product = products.find(product => product.id === productId);
        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    function displayCartItems() {
        const cartItems = document.getElementById('cartItems');
        if (!cartItems) return;

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <h2>${item.title}</h2>
                <p>Quantity: ${item.quantity}</p>
                <p>$${item.price}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItems.appendChild(cartItemDiv);
        });
    }

    window.removeFromCart = function(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    function generateToken() {
        return [...Array(16)].map(() => Math.random().toString(36)[2]).join('');
    }

    function ensureLoggedIn() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            window.location.href = 'login.html';
        }
    }

    function loadProfileData() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            window.location.href = 'login.html';
            return;
        }

        document.getElementById('profileFirstName').value = currentUser.firstName;
        document.getElementById('profileLastName').value = currentUser.lastName;
        document.getElementById('profileEmail').value = currentUser.email;
        document.getElementById('profilePassword').value = currentUser.password;
    }

    if (document.body.classList.contains('protected')) {
        ensureLoggedIn();
    }
});