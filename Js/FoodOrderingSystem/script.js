async function getMenu() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        const data = await response.json();
        const menuContainer = document.getElementById('menu-container');
        data.forEach(item => {
            const menuItem = document.createElement('div');
            const img = document.createElement('img');
            img.src = item.image;
            img.style.maxWidth = '100px';
            img.style.maxHeight = '100px';
            menuItem.textContent = `${item.name} - ${item.price}`;
            menuItem.appendChild(img);
            menuContainer.appendChild(menuItem);
        });
    } catch (error) {
        console.error('Error fetching menu:', error);
    }
}


async function takeOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const burgers = ['Classic Burger', 'Cheeseburger', 'Veggie Burger'];
            const order = [];
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * burgers.length);
                order.push(burgers[randomIndex]);
            }
            resolve(order);
        }, 2500);
    });
}

async function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

async function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

function thankYou() {
    alert('Thank you for eating with us today!');
}

async function startOrder() {
    try {
        await getMenu();
        const order = await takeOrder();
        console.log('Order:', order);
        const prepStatus = await orderPrep();
        console.log('Preparation Status:', prepStatus);
        const paymentStatus = await payOrder();
        console.log('Payment Status:', paymentStatus);
        if (paymentStatus.paid) {
            thankYou();
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

startOrder();