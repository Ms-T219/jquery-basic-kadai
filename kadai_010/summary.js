$(function(){
  $('#change-color').on('click',function(){
    $('#target').css('color', 'red');
  });
  
  $('#change-text').on('click',function(){
  $('#target').text('Hey!');
  });

  $('#fade-out').on('click',function(){
    $('#target').fadeOut(1500);
  });

  $('#fade-in').on('click',function(){
    $('#target').fadeIn(1500);
  });



});