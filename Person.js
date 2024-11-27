class Person {
    constructor(name) { this.name = name; }

    getName() {
        return this.name;
    }

    setName() {
        this.name = name;
    }

    salute() {
        let show = `Hola, ${this.name}`;

        return show;
    }

}