$(document).ready(function () {
$("#ajax-request").on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'test'
  });
});


$("#pingpong-button").on('click', function() {
  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/ping',
    method:'GET',
    data: 'text'
  }).done(function (responseData) {
    console.log('Ajax request done');
  $('step3456').append(responseData);
  });
});
});







// test
// $.ajax({
//   url: 'http://first-ajax-api.herokuapp.com/',
//   method: 'GET',
//   data: 'test'  ,
//   // dataType:
// });
