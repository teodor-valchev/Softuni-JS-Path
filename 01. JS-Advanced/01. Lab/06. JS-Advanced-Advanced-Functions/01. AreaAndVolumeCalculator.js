var pokemon = {
    x: 3,
    y: 4,
    getSum: function() {
        return this.x + this.y;
    }
};

var area =  function () {
    return this.x * this.y
}


function  solve(area) {
    area.call(pokemon)
}

solve(4)