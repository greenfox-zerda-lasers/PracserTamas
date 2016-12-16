var test = require("tape");
var appenderFunc = require("./39");

test("add one number", function(t){
    var actual = duoblerFunc(2);
    var expected = 4;

    t.equal(actual, expected, '2*2');
    t.end();
});
