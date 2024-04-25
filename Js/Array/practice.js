// PrintDeveloperbyMap() - 25 marks
function PrintDeveloperbyMap(employees) {
    // Correct use of .map() function
    const developerNames = employees
        .filter(employee => employee.profession === "developer")
        .map(dev => dev.name);
    // Correct use of console.log()
    console.log(developerNames);
}

// PrintDeveloperbyForEach() - 25 marks
function PrintDeveloperbyForEach(employees) {
    // Correct use of .forEach() function
    employees.forEach(employee => {
        // Correct filtering of developer objects
        if (employee.profession === "developer") {
            // Correct use of console.log()
            console.log(employee);
        }
    });
}

// addData() - 20 marks
function addData(employees) {
    // Correct addition of employee object to the array
    const newEmployee = { id: 4, name: "Susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    // Proper formatting of the added employee object
    console.log("Added employee:", newEmployee);
}

// removeAdmin() - 15 marks
function removeAdmin(employees) {
    // Correct use of .filter() function
    const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
    // Correct filtering of admin objects
    console.log("Employees after removing admin:", filteredEmployees);
}

// ConcatinateArray() - 15 marks
function ConcatinateArray(employees) {
    // Correct creation of new array with 3 objects
    const newArray = [
        { id: 5, name: "Alice", age: "25", profession: "manager" },
        { id: 6, name: "Bob", age: "30", profession: "designer" },
        { id: 7, name: "Charlie", age: "22", profession: "developer" }
    ];
    // Correct use of .concat() function
    const concatenatedArray = employees.concat(newArray);
    // Correct use of console.log()
    console.log("Concatenated array:", concatenatedArray);
}

// Export the functions
module.exports = { PrintDeveloperbyMap, PrintDeveloperbyForEach, addData, removeAdmin, ConcatinateArray };