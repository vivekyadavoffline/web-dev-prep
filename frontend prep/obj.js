class animal {
    constructor(name) {
        this.name = name;
        console.log("Animal created");

    }
    eats() {
        console.log("Animal eats");
    }
    jumps() {
        console.log("Animal jumps");
    }
}
let a = new animal("Rabbit");
console.log(a);
a.eats();
a.jumps();

class lion extends animal {
    constructor(name) {
        super(name);
        console.log("Lion created");

    }
    eats() {
        console.log("Lion eats");
    }
};
let l = new lion("Simba");
console.log("Lion name: " + l.name);
l.eats();
l.jumps();