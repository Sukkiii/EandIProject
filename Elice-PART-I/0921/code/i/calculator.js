function sum(a, b) {
    return a + b;
}


function Calculator(a, b) {
    this.a = a;
    this.b = b; // 메모리 ... 

    this.sum = () => {
        return this.a + this.b;
    }

    this.sub = () => {
        return this.a - this.b;
    }

    this.mul = () => {
        return this.a * this.b;
    }

    this.div = () => {
        return this.a / this.b;
    }
}

let math = new Calculator(6, 3);
let math2 = new Calculator(8, 2);

console.log(math.sum()); // 9
console.log(math.div()); // 2

console.log(math2.sum()); //  8+2 = 10
console.log(math2.div()); // 8/2 = 4