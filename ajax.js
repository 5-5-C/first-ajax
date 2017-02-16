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
    url: 'http://first-ajax-api.herokuapp.com/pong',
    method:'GET',
    data: 'text'
  }).done(function (responseData) {
    console.log('Ajax request done');

}).fail(function(jqHXR, textStatus, errorThrown) {
  console.log(jqHXR, textStatus, errorThrown);
  $('#step3456').append('Ajax request failed');
}).always(function () {
  console.log('Your request is finished');
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
