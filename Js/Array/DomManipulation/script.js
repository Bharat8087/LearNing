document.addEventListener('DOMContentLoaded', function() {
    const counter = document.querySelector('.counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const clearBtn = document.getElementById('clearBtn');
    const error = document.getElementById('error');

    let count = 0;

    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });

    decrementBtn.addEventListener('click', function() {
        if (count > 0) {
            count--;
            updateCounter();
        } else {
            showError();
        }
    });

    clearBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });

    function updateCounter() {
        counter.textContent = count;
        if (count === 0) {
            clearBtn.style.display = 'none';
            error.style.display = 'none';
        } else {
            clearBtn.style.display = 'block';
        }
    }

    function showError() {
        error.style.display = 'block';
    }
});