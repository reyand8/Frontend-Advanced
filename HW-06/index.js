console.log(pow(2, 6))

function pow(x, n) {
    if (n <= 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}