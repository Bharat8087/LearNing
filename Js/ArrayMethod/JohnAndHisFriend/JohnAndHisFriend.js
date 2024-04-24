PrintDeveloperbyMap(employees) {
    const developers = employees.filter(employee => employee.profession === "developer");
    const developerNames = developers.map(dev => dev.name);
    document.getElementById("developerNames").innerHTML = developerNames.join(", ");
}

function PrintDeveloperbyForEach(employees) {
    const developerList = employees.filter(employee => employee.profession === "developer");
    let output = "";
    developerList.forEach(employee => {
        output += `${employee.name}<br>`;
    });
    document.getElementById("developers").innerHTML = output;
}

function addData(employees) {
    const newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    document.getElementById("addedEmployee").innerHTML = `Added employee: ${newEmployee.name}`;
}

function removeAdmin(employees) {
    const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
    let output = "";
    filteredEmployees.forEach(employee => {
        output += `${employee.name} (${employee.profession})<br>`;
    });
    document.getElementById("removedAdmin").innerHTML = output;
}

function ConcatinateArray(employees) {
    const newArray = [
        { id: 5, name: "Alice", age: "25", profession: "manager" },
        { id: 6, name: "Bob", age: "30", profession: "designer" },
        { id: 7, name: "Charlie", age: "22", profession: "developer" }
    ];

    const concatenatedArray = employees.concat(newArray);
    let output = "";
    concatenatedArray.forEach(employee => {
        output += `${employee.name} (${employee.profession})<br>`;
    });
    document.getElementById("concatenatedArray").innerHTML = output;
}

const employees = [
    { id: 1, name: "John", age: "35", profession: "developer" },
    { id: 2, name: "Emily", age: "28", profession: "admin" },
    { id: 3, name: "David", age: "40", profession: "developer" }
];

PrintDeveloperbyMap(employees);
PrintDeveloperbyForEach(employees);
addData(employees);
removeAdmin(employees);
ConcatinateArray(employees);