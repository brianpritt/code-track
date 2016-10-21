//global variable used for keeping track of which laguage is winning;//
var cssCounter = 0;
var phpCounter = 0;
var rubyCounter = 0;
var csharpCounter = 0;
var javaCounter = 0;
//end global variables//

var theAdder = function(value1, value2, value3, value4, value5){
  if (parseInt(value1)===1){
    csharpCounter+=1;
    javaCounter+=1;
  }else{
    rubyCounter+=1;
    phpCounter+=1
    cssCounter+=1
  }
  if (parseInt(value2) ===1 ){
    phpCounter+=1;
    csharpCounter+=1;
    rubyCounter+=1;
  }else {
    javaCounter+=1;
    cssCounter+=1;
  }
  if (parseInt(value3) === 1){
    javaCounter+=1;
    cssCounter+=1;
  }else {
    csharpCounter+=1;
    phpCounter+=1;
    rubyCounter +=1;
  }
  if (parseInt(value4)===1){
    cssCounter+=1;
    rubyCounter+=1;
    phpCounter+=1;
  } else if (parseInt(value4) ===2 ){
    csharpCounter+=1;
    javaCounter+=1;
  } else {
    javaCounter+=1;
    phpCounter+=1;
  }
}
var theResults = function(){

}
$(document).ready(function(event){
  $(".get-started").click(function(event){
     $(".get-started").hide();
     $("#question1").show();
     event.preventDefault();
   });
  $("#question1 h5").click(function(event){
    $("#question1").hide();
    $("#question2").show();
    event.preventDefault();
    });
    $("#question2 h5").click(function(event){
      $("#question2").hide();
      $("#question3").show();
      event.preventDefault();
    });
    $("#question3 h5").click(function(event){
      $("#question3").hide();
      $("#question4").show();
      event.preventDefault();
    });
    $("#question4 h5").click(function(event){
      $("#question4").hide();
      $("#question5").show();
      event.preventDefault();
    });
    $("#question1 h5").click(function(event){
      $("#question5").hide();
      $("#question2").show();
      event.preventDefault();
    });

  $("form").submit(function(event){
    var q1Input = $("input:radio[name=question1]:checked").val();
    var q2Input = $("input:radio[name=question2]:checked").val();
    var q3Input = $("input:radio[name=question3]:checked").val();
    var q4Input = $("input:radio[name=question4]:checked").val();
    var q5Input = $("input:radio[name=question5]:checked").val();

    theAdder(q1Input, q2Input,q3Input,q4Input,q5Input);
    var yourLanguage = theResults();
    alert(cssCounter);
    alert(phpCounter);


    event.preventDefault();
  });
});
