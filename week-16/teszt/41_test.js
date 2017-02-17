var test = require("tape");
var summarizerFunc = require("./41");

test('sum of [1, 2, 3, 4, 5]', function (t) {
    var arr = [1, 2, 3, 4, 5];

    var actual = summarizerFunc(arr);
    // var expected = arr.reduce(function (a, e
    // ) {
    //   return a + e;
    // });
    var expected = 15;

    t.equal(actual, expected);
    t.end();
});
