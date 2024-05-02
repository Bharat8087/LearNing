async function getMenu() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
        const menu = await response.json();
        console.log(menu);
    } catch (error) {
        console.error('Error fetching menu:', error);
    }
}

function takeOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const burgers = ['Cheese Burger', 'Veggie Burger', 'Chicken Burger'];
            const order = {
                burger1: burgers[Math.floor(Math.random() * burgers.length)],
                burger2: burgers[Math.floor(Math.random() * burgers.length)],
                burger3: burgers[Math.floor(Math.random() * burgers.length)]
            };
            console.log('Order taken:', order);
            resolve(order);
        }, 2500);
    });
}

function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            const orderStatus = { order_status: true, paid: false };
            console.log('Order status:', orderStatus);
            resolve(orderStatus);
        }, 1500);
    });
}

function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const orderStatus = { order_status: true, paid: true };
            console.log('Payment status:', orderStatus);
            resolve(orderStatus);
        }, 1000);
    });
}

function thankyouFnc() {
    alert('Thank you for eating with us today!');
}

async function startOrder() {
    await getMenu();

    takeOrder()
        .then(orderPrep)
        .then(payOrder)
        .then(thankyouFnc)
        .catch(error => console.error('Error during order:', error));
}