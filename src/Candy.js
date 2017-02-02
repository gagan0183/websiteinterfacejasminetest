var Caramels = function() {
    this.number = 510;
};

var Lollipops = function() {
    this.number = 4;
};

Caramels.prototype.remove = function(number) {
    return this.number - number;
};

Lollipops.prototype.add = function(number) {
    return this.number + number;
};

Lollipops.prototype.get = function() {
    return this.number;
};