< !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > Employee Management < /title> <
    script >
    // JavaScript code
    // Define the functions here

    // Function to print developer names using map
    function PrintDeveloperbyMap(employees) {
        const developers = employees.filter(employee => employee.profession === "developer");
        const developerNames = developers.map(dev => dev.name);
        document.getElementById("developerNames").innerHTML = developerNames.join(", ");
    }

// Function to print developers using forEach
function PrintDeveloperbyForEach(employees) {
    const developerList = employees.filter(employee => employee.profession === "developer");
    let output = "";
    developerList.forEach(employee => {
        output += `${employee.name}<br>`;
    });
    document.getElementById("developers").innerHTML = output;
}

// Function to add new employee data
function addData(employees) {
    const newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    document.getElementById("addedEmployee").innerHTML = `Added employee: ${newEmployee.name}`;
}

// Function to remove admin employees
function removeAdmin(employees) {
    const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
    let output = "";
    filteredEmployees.forEach(employee => {
        output += `${employee.name} (${employee.profession})<br>`;
    });
    document.getElementById("removedAdmin").innerHTML = output;
}

// Function to concatenate arrays
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

// Sample data
const employees = [
    { id: 1, name: "John", age: "35", profession: "developer" },
    { id: 2, name: "Emily", age: "28", profession: "admin" },
    { id: 3, name: "David", age: "40", profession: "developer" }
];

// Execute functions
PrintDeveloperbyMap(employees);
PrintDeveloperbyForEach(employees);
addData(employees);
removeAdmin(employees);
ConcatinateArray(employees); <
/script> <
/head> <
body >
    <
    h2 > Employee Management < /h2> <
    div >
    <
    h3 > Developer Names(Using Map): < /h3> <
    p id = "developerNames" > < /p> <
    /div> <
    div >
    <
    h3 > Developers(Using forEach): < /h3> <
    p id = "developers" > < /p> <
    /div> <
    div >
    <
    h3 > Added Employee: < /h3> <
    p id = "addedEmployee" > < /p> <
    /div> <
    div >
    <
    h3 > Employees after removing admin: < /h3> <
    p id = "removedAdmin" > < /p> <
    /div> <
    div >
    <
    h3 > Concatenated Array: < /h3> <
    p id = "concatenatedArray" > < /p> <
    /div> <
    /body> <
    /html>