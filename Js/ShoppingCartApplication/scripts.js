document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            console.log(`Navigating to ${event.target.getAttribute('href')}`);
        });
    });

    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.addEventListener('click', () => {
            alert('You clicked the hero image!');
        });
    }

    const addBtns = document.querySelectorAll('#addBtn');
    addBtns.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });

    const filterButtons = document.querySelectorAll('.filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('.filter.active').classList.remove('active');
            button.classList.add('active');
            filterItems(button.textContent);
        });
    });

    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const items = document.querySelectorAll('.items .item');
            items.forEach(item => {
                const itemName = item.querySelector('.price').textContent.toLowerCase();
                if (itemName.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const rangeInput = document.querySelector('input[type="range"]');
    if (checkboxes) {
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterByAttributes);
        });
    }
    if (rangeInput) {
        rangeInput.addEventListener('input', filterByAttributes);
    }

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));

    function displayProducts(products) {
        const itemsContainer = document.querySelector('.items');
        itemsContainer.innerHTML = '';

        products.forEach(product => {
            const item = document.createElement('div');
            item.classList.add('item');
            item.dataset.category = product.category;

            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.title;
            item.appendChild(image);

            const title = document.createElement('h3');
            title.textContent = product.title;
            item.appendChild(title);

            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = `$${product.price.toFixed(2)}`;
            item.appendChild(price);

            const description = document.createElement('p');
            description.textContent = product.description;
            item.appendChild(description);

            const colors = getRandomColors();
            const sizes = getRandomSizes();

            const colorDiv = document.createElement('div');
            colorDiv.classList.add('colors');
            colors.forEach(color => {
                const colorCircle = document.createElement('div');
                colorCircle.classList.add('circle');
                colorCircle.style.backgroundColor = color;
                colorDiv.appendChild(colorCircle);
            });
            item.appendChild(colorDiv);

            const sizeDiv = document.createElement('div');
            sizeDiv.classList.add('sizes');
            sizes.forEach(size => {
                const sizeButton = document.createElement('button');
                sizeButton.textContent = size;
                sizeDiv.appendChild(sizeButton);
            });
            item.appendChild(sizeDiv);

            itemsContainer.appendChild(item);
        });
    }

    function getRandomColors() {
        const colors = ['red', 'blue', 'black', 'green', 'yellow'];
        return Array.from({ length: 3 }, () => colors[Math.floor(Math.random() * colors.length)]);
    }

    function getRandomSizes() {
        const sizes = ['S', 'M', 'L', 'XL'];
        return Array.from({ length: 3 }, () => sizes[Math.floor(Math.random() * sizes.length)]);
    }

    function filterItems(category) {
        const items = document.querySelectorAll('.items .item');
        items.forEach(item => {
            if (category === 'All' || item.dataset.category.toLowerCase() === category.toLowerCase()) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function filterByAttributes() {
        const selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(cb => cb.nextElementSibling.textContent.toLowerCase());
        const selectedSizes = Array.from(document.querySelectorAll('input[name="size"]:checked')).map(cb => cb.nextElementSibling.textContent.toLowerCase());
        const selectedPriceRanges = Array.from(document.querySelectorAll('input[name="prange"]:checked')).map(cb => cb.nextElementSibling.textContent.toLowerCase());
        const selectedRating = rangeInput ? rangeInput.value : 0;

        const items = document.querySelectorAll('.items .item');
        items.forEach(item => {
            const itemColors = Array.from(item.querySelectorAll('.circle')).map(circle => circle.style.backgroundColor.toLowerCase());
            const itemSizes = item.querySelector('.sizes') ? Array.from(item.querySelectorAll('.sizes button')).map(button => button.textContent.toLowerCase()) : [];
            const itemPrice = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            const itemRating = 3;

            const matchesColor = selectedColors.length === 0 || selectedColors.some(color => itemColors.includes(color));
            const matchesSize = selectedSizes.length === 0 || selectedSizes.some(size => itemSizes.includes(size));
            const matchesPrice = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
                const [min, max] = range.replace('$', '').split(' to ').map(Number);
                return itemPrice >= min && (max ? itemPrice <= max : true);
            });
            const matchesRating = selectedRating == 0 || itemRating >= selectedRating;

            if (matchesColor && matchesSize && matchesPrice && matchesRating) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    const removeButtons = document.querySelectorAll('.remove-btn');
    const totalPriceElement = document.getElementById('total-price');
    let total = 900;

    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const item = event.target.closest('.item');
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
            item.remove();
            updateTotalPrice(price);
        });
    });

    function updateTotalPrice(price) {
        total -= price;
        totalPriceElement.textContent = `$${total}`;
    }

    const form = document.querySelector('form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    form.addEventListener('submit', (event) => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault();
            alert('Passwords do not match. Please try again.');
        }
    });

    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            alert('User information saved!');
        });
    }

    const loginForm = document.getElementById('loginForm');
    const logoutLink = document.getElementById('logout');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email === 'abc@gmail.com' && password === '1234') {
                alert('Login successful!');
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'profile.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', (event) => {
            event.preventDefault();
            localStorage.removeItem('loggedIn');
            alert('You have been logged out.');
            window.location.href = 'index.html';
        });

        if (localStorage.getItem('loggedIn') === 'true') {
            alert('You are already logged in.');
            window.location.href = 'profile.html';
        }
    }

    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;

            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);

            alert('Profile information saved!');
        });

        if (localStorage.getItem('firstName')) {
            document.getElementById('firstName').value = localStorage.getItem('firstName');
        }
        if (localStorage.getItem('lastName')) {
            document.getElementById('lastName').value = localStorage.getItem('lastName');
        }
    }

    const editPasswordForm = document.getElementById('editPasswordForm');
    if (editPasswordForm) {
        editPasswordForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const oldPassword = document.getElementById('oldPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmNewPassword = document.getElementById('confirmNewPassword').value;

            const storedPassword = localStorage.getItem('password');

            if (oldPassword !== storedPassword) {
                alert('Old password is incorrect.');
            } else if (newPassword !== confirmNewPassword) {
                alert('New passwords do not match.');
            } else {
                localStorage.setItem('password', newPassword);
                alert('Password changed successfully!');
            }
        });
    }

    const logoutForm = document.getElementById('logoutForm');
    if (logoutForm) {
        logoutForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.clear();
            alert('You have been logged out.');
            window.location.href = 'index.html';
        });
    }

    const paymentBtns = document.querySelectorAll('btn');
    paymentBtns.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.item');
            const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));

            const options = {
                key: 'YOUR_RAZORPAY_KEY',
                amount: price * 100,
                currency: 'USD',
                name: 'Your Store',
                description: 'Payment for Product',
                image: 'https://example.com/your_logo.png',
                handler: function(response) {
                    alert('Payment successful');
                },
                prefill: {
                    name: 'Customer Name',
                    email: 'customer@example.com',
                    contact: '9999999999'
                },
                notes: {
                    address: 'Your Store Address'
                },
                theme: {
                    color: '#F37254'
                }
            };

            const rzp = new Razorpay(options);
            rzp.open();
        });
    });
});

function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    loadHTML('shared/Header.html', 'header');
});