function PromiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('dataBody').innerHTML += `<tr><td>${JSON.stringify(data)}</td><td></td><td></td></tr>`;
                    resolve(true);
                })
                .catch(error => reject(error));
        }, 1000);
    });
}

function PromiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/products')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('dataBody').innerHTML += `<tr><td></td><td>${JSON.stringify(data)}</td><td></td></tr>`;
                    resolve(true);
                })
                .catch(error => reject(error));
        }, 2000);
    });
}

function PromiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/todos')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('dataBody').innerHTML += `<tr><td></td><td></td><td>${JSON.stringify(data)}</td></tr>`;
                    resolve(true);
                })
                .catch(error => reject(error));
        }, 3000);
    });
}

document.getElementById('startButton').addEventListener('click', () => {
    PromiseAPI1()
        .then((result) => {
            if (result) {
                return PromiseAPI2();
            }
        })
        .then((result) => {
            if (result) {
                return PromiseAPI3();
            }
        })
        .catch(error => console.error(error));
});