$(document).ready(function() {
  $(".cool-text, .awesome-text").each(function(index) {
    if($(this).text() == "Stop") {return false};
  console.log(index + ": " + $(this).text());
  });
});