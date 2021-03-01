const sym1 = Symbol();
const sym2 = Symbol();

// const idSym = Symbol("id")
class Student {
    constructor(name="default", age=100, gender="None") {
        this.name = name;
        this.age = age
        this.gender = gender
    }
}

let s1 = new Student();
s1.grades = 100
