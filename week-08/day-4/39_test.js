var test = require("tape");
var duoblerFunc = require("./39");

test("add one number", function(t){
    var actual = duoblerFunc(2);
    var expected = 4;

    t.equal(actual, expected, '2*2');
    t.end();
});

// Ennel a tesztnel NaN-t varunk, ami egy false ertek es azt igy lehet tesztellni:
test("add string", function(t){
    var actual = duoblerFunc("string");

    t.notOk(actual);
    t.end();
});
