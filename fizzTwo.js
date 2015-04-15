$(document).ready(function() {
  
  
  $("#go").click(function () { 
    var max = $("#myNumber").val();
    if (max == ''  || isNaN(max) ){ 
      $("#myAnswer").text("please enter a number");
         return; 
    }else {
      fizzBuzz(max);
      return;
    };


function fizzBuzz(max) {
  for(var i = 1; i <= max; i++) {
      if(i % 15 === 0) {
        $('#myAnswer').append('<p>' + 'FIZZBUZZ' + '</p>')
     }else if (i % 3 == 0) {        
        $('#myAnswer').append('<p>' + 'fizz' + '</p>');
     }else if(i % 5 == 0) {        
        $('#myAnswer').append('<p>' + 'buzz' + '</p>');
     }else {
        $('#myAnswer').append('<p>' + i + '</p>');
    }
  }
}  
 
  });  
});

