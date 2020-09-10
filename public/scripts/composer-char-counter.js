const updateCounter = function(event) {
  let length = $(this).val().length;
  let counter = $(this).siblings('div').children('.counter');
  counter.text(140 - length);
  if (length > 140) {
    counter.addClass('invalid');
  } else {
    counter.removeClass('invalid');
  }

};

$(document).ready(function() {
  let $tweetTextArea = $("section.new-tweet textarea");
  $tweetTextArea.on('keyup', updateCounter);
});