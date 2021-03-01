let sym1 = Symbol("test");

function Student(name, gender) {
    this.name = name;
    this.gender = gender;
    this[sym1] = "Testing Purposes";
    this.display = () => {
        return `My name is ${this.name} and I am ${this.gender}`;
    }
}

function Customer(marks) {
    this.marks = marks;
    this.screen = () => {
        return `My marks is ${this.marks}`;
    }
}

Student.prototype = new Customer(4020);

let s1 = new Student("Pam", "None");

