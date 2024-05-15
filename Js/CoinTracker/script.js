let cryptoData = [];

function fetchDataWithThen() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then(response => response.json())
        .then(data => {
            cryptoData = data;
            renderTable(cryptoData);
        })
        .catch(error => console.error('Error fetching data:', error));
}

async function fetchDataWithAsyncAwait() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const data = await response.json();
        cryptoData = data;
        renderTable(cryptoData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function renderTable(data) {
    const tableBody = document.getElementById('crypto-table-body');
    tableBody.innerHTML = '';

    data.forEach(coin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${coin.name}</td>
            <td>${coin.symbol}</td>
            <td>${coin.current_price}</td>
            <td>${coin.total_volume}</td>
            <td>${coin.market_cap}</td>
            <td>${coin.price_change_percentage_24h}</td>
        `;
        tableBody.appendChild(row);
    });
}

function searchData() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredData = cryptoData.filter(coin =>
        coin.name.toLowerCase().includes(query) || coin.symbol.toLowerCase().includes(query)
    );
    renderTable(filteredData);
}

function sortData(criteria) {
    let sortedData;
    if (criteria === 'market_cap') {
        sortedData = [...cryptoData].sort((a, b) => b.market_cap - a.market_cap);
    } else if (criteria === 'percentage_change') {
        sortedData = [...cryptoData].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    }
    renderTable(sortedData);
}

fetchDataWithAsyncAwait();