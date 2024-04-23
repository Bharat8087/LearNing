let employees = [];

function addEmployee() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;

    if (name && profession && age) {
        const employee = { id: generateUniqueId(), name: name, profession: profession, age: age };
        employees.push(employee);
        displaySuccessMessage('Success:Employee Added');
        renderEmployees();
    } else {
        displayErrorMessage('Error: Please make sure all the fields are filled before adding an employee!');
    }
}

function generateUniqueId() {
    return Math.floor(Math.random() * 1000000);
}

function renderEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>ID:</strong> ${employee.id}, <strong>Name:</strong> ${employee.name}, <strong>Profession:</strong> ${employee.profession}, <strong>Age:</strong> ${employee.age}, <button onclick="deleteEmployee(${employee.id})">Delete</button>`;
        employeeList.appendChild(li);
    });
    document.getElementById('totalEmployees').innerText = employees.length;
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    renderEmployees();
}

function displayErrorMessage(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
    setTimeout(() => { errorMessage.style.display = 'none'; }, 3000);
}

function displaySuccessMessage(message) {
    const successMessage = document.getElementById('successMessage');
    successMessage.innerText = message;
    successMessage.style.display = 'block';
    setTimeout(() => { successMessage.style.display = 'none'; }, 3000);
}

document.getElementById('addEmployee').addEventListener('click', addEmployee);