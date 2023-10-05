function sum1(a, b) {
    return a + b;
}

function sum2(a, b) {
    this.a = a;
    this.b = b;

    return a + b;
}