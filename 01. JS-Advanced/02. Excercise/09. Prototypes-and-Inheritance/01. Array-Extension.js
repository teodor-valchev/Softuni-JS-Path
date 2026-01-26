let myArr = [1, 2, 3, 5];

let secondArr = [2, 6, 7, 3, 2, 9];

// adding these methods ot all instances of array
Array.prototype.last = function () {
    return this[this.length - 1];
};

Array.prototype.skip = function (n) {
    let newArr = [];
    for (let i = n; i < this.length; i++) {
        newArr.push(this[i]);
    }
    return newArr;
};

Array.prototype.take = function (n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(this[i]);
    }
    return newArr;
};

Array.prototype.sum = function () {
    return this.reduce((acc, val) => acc + val, 0);
};

Array.prototype.average = function () {
    return Math.round(this.sum() / this.length);
};

// It will add the method ONLY FOR THIS INSTANCE!!
myArr.last = function () {};

console.log(secondArr.sum());
