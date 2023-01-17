class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getAge(){
        return `My age is ${this.age}`
    }
}

export default User;