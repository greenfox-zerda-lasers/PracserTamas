var test = require("tape");
var appenderFunc = require("./40");

test('adding an "a" to the end of string', function (t) {
    var actual = appenderFunc('kuty');
    var expected = 'kutya';

    t.equal(actual, expected);
    t.end();
});
