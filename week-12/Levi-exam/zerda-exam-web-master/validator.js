'use strict';

var niceWords = ["amazing", "awesome", "blithesome", "excellent", "fabulous", "fantastic", "favorable", "fortuitous", "great", "incredible", "ineffable", "mirthful", "outstanding", "perfect", "propitious", "remarkable", "smart", "spectacular", "splendid", "stellar", "stupendous", "super", "ultimate", "unbelievable", "wondrous"];

function validator(email, scale, feedback) {
  var validEmail = email.indexOf('@') > -1;
  var validScale = parseInt(scale) >= 10;
  var niceWordCounter = 0;
  var feedbackWords = feedback.split(' ');

  feedbackWords.forEach(function (word) {
    if (niceWords.indexOf(word) > -1) {
      niceWordCounter++;
    }
  });

  var validFeedback = niceWordCounter >= 3;
  return validEmail && validScale && validFeedback;
}

module.exports = validator;
