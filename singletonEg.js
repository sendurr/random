class Employee {
    constructor () {
        this.name = "";
    }

    setName (name) {
        this.name = name;
    }
}
let singleton = (() => {
    let instance;
    return {
        getInstance: () => {
            if(! instance) {
                instance = new Employee();
            }
            return instance;
        }
    }
})();

let a = new Employee();
console.log(`employee name is ${a.name}`);
a.name = "harish";
console.log(`employee name is ${a.name}`);

let b = singleton.getInstance();
let c = singleton.getInstance();
console.log(`employee name is ${b.name}`);
b.name = "harishB";
console.log(`employee name is ${b.name}`);
console.log(`employee name is ${c.name}`);