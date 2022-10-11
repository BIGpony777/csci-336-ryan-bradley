$(document).ready(function() {

  $("#movie-list").on("click",".remove-movie-btn", function() {  
    $(this).closest("div").remove();
  });

  $("#clear-movies-btn").on("click", function() {
    $(".movie-name").closest("div").remove();
  });

  $("#add-movie-btn").on("click", function() {   
    $("#movie-list").append('<div class="movie"><span class="movie-name">'+$("#movie-text").val()+'</span><button class="remove-movie-btn">Remove</button></div>');
  });

});