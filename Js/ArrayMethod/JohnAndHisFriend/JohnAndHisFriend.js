function PrintDeveloperbyMap(employees) {
    const developers = employees.filter(employee => employee.profession === "developer");
    developers.forEach(dev => console.log(dev));
    return developers;
}

function PrintDeveloperbyForEach(employees) {
    const developerEmployees = [];
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            developerEmployees.push(employee);
            console.log(employee);
        }
    });
    return developerEmployees;
}

function addData(employees) {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(newEmployee);
    return newEmployee;
}

function removeAdmin(employees) {
    const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
    console.log(filteredEmployees);
    return filteredEmployees;
}

function ConcatinateArray(employees) {
    const newArray = [
        { id: 5, name: "Alice", age: "25", profession: "manager" },
        { id: 6, name: "Bob", age: "30", profession: "designer" },
        { id: 7, name: "Charlie", age: "22", profession: "developer" }
    ];
    const concatenatedArray = employees.concat(newArray);
    console.log(concatenatedArray);
    return concatenatedArray;
}

module.exports = { PrintDeveloperbyMap, PrintDeveloperbyForEach, addData, removeAdmin, ConcatinateArray };