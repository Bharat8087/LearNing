async function getMenu() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        if (!response.ok) {
            throw new Error('Failed to fetch menu items');
        }
        const menuItems = await response.json();
        displayMenu(menuItems);
    } catch (error) {
        console.error('Error fetching menu:', error);
    }
}

function displayMenu(menuItems) {
    const menuContainer = document.getElementById('menu-container');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.name}" width="422" height="320">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
    `;
        menuContainer.appendChild(menuItem);
    });


}

function takeOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const burgers = ['Cheeseburger', 'Grilled Cheese Sandwich', 'Club Sandwich'];
            const order = {
                burger1: burgers[Math.floor(Math.random() * burgers.length)],
                burger2: burgers[Math.floor(Math.random() * burgers.length)],
                burger3: burgers[Math.floor(Math.random() * burgers.length)]
            };
            resolve(order);
        }, 2500);
    });
}

function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            const orderStatus = { order_status: true, paid: false };
            resolve(orderStatus);
        }, 1500);
    });
}

function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const paymentStatus = { order_status: true, paid: true };
            resolve(paymentStatus);
        }, 1000);
    });
}

function thankyouFnc() {
    alert('Thank you for eating with us today!');
}

async function restaurantProcess() {
    try {
        await getMenu();
        const order = await takeOrder();
        console.log('Order:', order);
        const prepStatus = await orderPrep();
        console.log('Preparation Status:', prepStatus);
        const paymentStatus = await payOrder();
        console.log('Payment Status:', paymentStatus);
        thankyouFnc();
    } catch (error) {
        console.error('Error in restaurant process:', error);
    }
}

restaurantProcess();