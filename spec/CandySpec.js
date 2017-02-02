describe("Candy", function() {
    var caramels;
    var lollipops;

    beforeEach(function() {
        caramels = new Caramels();
        lollipops = new Lollipops();
    });

    it("remove 20 caramels from a bin of 510 caramels", function() {
        expect(caramels.remove(20)).toEqual(490);
    });

    it("add 600 lollipops to 4 lollipops", function() {
        expect(lollipops.add(600)).toEqual(604);
    });

    it("removing caramels doesnt change lollipops", function() {
        expect(caramels.remove(20)).toEqual(490);
        expect(lollipops.get()).toEqual(4);
    });
});