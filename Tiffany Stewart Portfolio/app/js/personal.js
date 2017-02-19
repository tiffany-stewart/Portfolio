$(function() {
  $('.one-skill').find('h4').mouseenter(function() {
    $(this).animate({
      'text-align': 'left'
    }, 700)
  });
});

$(function() {
  $('.one-skill').find('h4').mouseleave(function() {
    $(this).animate({
      // marginLeft: '80%'
    }, 700)
  });
});
