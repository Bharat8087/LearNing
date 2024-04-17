function PrintDeveloperbyMap(employees) {
    const developers = employees.filter(employee => employee.profession === "developer");
    const developerNames = developers.map(dev => dev.name);
    console.log(developerNames);
}

function PrintDeveloperbyForEach(employees) {
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function addData(employees) {
    const newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log("Added employee:", newEmployee);
}

function removeAdmin(employees) {
    const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
    console.log("Employees after removing admin:", filteredEmployees);
}

function ConcatinateArray(employees) {
    const newArray = [
        { id: 5, name: "Alice", age: "25", profession: "manager" },
        { id: 6, name: "Bob", age: "30", profession: "designer" },
        { id: 7, name: "Charlie", age: "22", profession: "developer" }
    ];

    const concatenatedArray = employees.concat(newArray);
    console.log("Concatenated array:", concatenatedArray);
}

module.exports = { PrintDeveloperbyMap, PrintDeveloperbyForEach, addData, removeAdmin, ConcatinateArray };