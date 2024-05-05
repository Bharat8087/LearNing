async function getMenu() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        const menuItems = await response.json();
        const menuContainer = document.getElementById('menu');
        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
          <img src="${item.imgSrc}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>Price: $${item.price.toFixed(2)}</p>
        `;
            menuContainer.appendChild(menuItem);
        });
    } catch (error) {
        console.error('Error fetching menu:', error);
    }
}

function takeOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const order = {
                burgers: [
                    { name: 'Cheeseburger', price: 5.99 },
                    { name: 'Burger', price: 4.99 },
                    { name: 'Double Cheeseburger', price: 7.99 }
                ]
            };
            resolve(order);
        }, 2500);
    });
}

function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

function thankyouFnc() {
    alert('Thank you for eating with us today!');
}

async function placeOrder() {
    await getMenu();
    const order = await takeOrder();
    console.log('Order taken:', order);
    const prepStatus = await orderPrep();
    console.log('Order preparation:', prepStatus);
    const paymentStatus = await payOrder();
    console.log('Payment status:', paymentStatus);
    if (paymentStatus.paid) {
        thankyouFnc();
    }
}

getMenu();