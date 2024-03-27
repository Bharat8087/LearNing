function isSameType(value1, value2) {
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }
    if (isNaN(value1) || isNaN(value2)) {
        return false;
    }


    return typeof value1 === typeof value2;
}

let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));