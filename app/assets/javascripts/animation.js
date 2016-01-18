$(document).ready(function(){
  $('#top').on('click', function(e) {
      console.log("made it this far");
      e.preventDefault();
      /* Act on the event */
      $('.-top').addClass('-on');
      $('.bg').addClass('-on');
  });
  $('#left').on('click', function(e) {
      e.preventDefault();
      /* Act on the event */
      $('.-left').addClass('-on');
  });
  $('#right').on('click', function(e) {
      e.preventDefault();
      /* Act on the event */
      $('.-right').addClass('-on');
  });
  $('.close').on('click', function(e) {

    e.preventDefault();

    $('.overlay').removeClass('-on');
    $('.bg').removeClass('-on');
  });
});