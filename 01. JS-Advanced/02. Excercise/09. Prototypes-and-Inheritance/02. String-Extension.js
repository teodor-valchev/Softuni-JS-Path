let str = "my string";

String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
        let newString = "";

        newString.length = this.length + str.length;
        newString = newString.concat(str, this);

        return newString;
    }
    return this;
};

String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
        return this.concat(" ", str);
    }
    return this;
};

String.prototype.isEmpty = function () {
    if (this == "") {
        return true;
    }
    return false;
};

String.prototype.truncate = function (n) {
    if (n > this.length) {
        return this;
    }

    if (n < 4) {
        return ".".repeat(n);
    }

    let isWhiteSpace = this.includes(" ");

    if (isWhiteSpace) {
        let splittedString = this.split(" ");
        let getLastElement = splittedString[splittedString.length - 1];
        let result = this.replace(` ${getLastElement}`, "...");
        return result;
    }

    return this.slice(0, n - 3) + "...";
};

String.format = function (string, ...params) {
    const regex = /\{(\d+)\}/g;

    const result = string.replace(regex, (match, index) => {
        return params[index] !== undefined ? params[index] : match;
    });

    console.log(result);
    return result;
};

str = str.ensureStart("my");

str = str.ensureStart("hello ");

str = str.truncate(16);

str = str.truncate(14);

str = str.truncate(8);

str = str.truncate(4);

str = str.truncate(2);

str = String.format(
    "The  {0} {1} fox",

    "quick",
    "brown",
);

str = String.format(
    "jumps {0} {1}",

    "dog",
);
