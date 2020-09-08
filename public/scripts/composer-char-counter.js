$(document).ready(function() {
  console.log("We're in!");
  $("section.new-tweet textarea").on('keyup',
    function(event) {
      let length = $(this).val().length;
      let counter = $(this).siblings('div').children('.counter');
      counter.text(140 - length);
      if (length > 140) {
        counter.addClass('invalid');
      } else {
        counter.removeClass('invalid');
      }
    });
});