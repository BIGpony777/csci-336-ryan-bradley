$(document).ready(function() {
  $("#add-btn").on("click", function(){
    $("#my-list").append(`<li class="list-group-item">${$("#text-value").val()}</li>`);
    $("#text-value").val("");
  });
  
});