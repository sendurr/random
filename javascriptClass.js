/**
 * Created by Sendurr on 7/16/19.
 */
class sample {
    constructor (name) {
        this.name = name;
    }

    display() {
        console.log(`name is ${this.name}`);
    }
}
console.log(typeof sample.prototype);
console.log(typeof sample.prototype.display);
console.log(typeof sample.prototype.constructor);

let a = new sample("harish");
console.log(a.__proto__.constructor);
console.log(a.__proto__.constructor === sample);
console.log(a.name);