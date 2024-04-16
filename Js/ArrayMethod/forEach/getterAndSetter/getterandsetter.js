/*class person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
get name() {
    return this.name;
}
set name(name) {
    return this.name = name;
}
const personInstance = new person("aaru",
    04, "aaru@gmail.com")
console.log(personInstance.name);*/
class Person {
    constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}


const NewValue = new Person("aaru", 4, "aaru@gmail.com");
console.log(NewValue);