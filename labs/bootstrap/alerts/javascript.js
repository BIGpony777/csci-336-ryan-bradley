$(document).ready(function() {

  $("#blue-alert-btn").on("click", function(){
    makeAlert("Blue", "primary");  });

  $("#green-alert-btn").on("click", function(){
    makeAlert("Green", "success");
  });

  $("#yellow-alert-btn").on("click", function(){
    makeAlert("Yellow", "warning");
  });

  $("#purple-alert-btn").on("click", function(){
    makeAlert("Purple", "purple");
  });

  $("#clear-alerts-btn").on("click", function(){
    $(".alert").alert("close");
  })

});

function makeAlert(text, color){
  $("#alerts").append(`<div class="alert alert-${color} alert-dismissible fade show" role="alert"><strong>${text} alert added!</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`);   
};