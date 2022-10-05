$(document).ready(function() {
    $("#blue-button").on("click", function() {
      $("#colorful-text").removeClass("red");
      $("#colorful-text").removeClass("green");
      $("#colorful-text").removeClass("yellow");
      $("#colorful-text").addClass("blue");
    });

    $("#red-button").on("click", function() {
      $("#colorful-text").removeClass("blue");
      $("#colorful-text").removeClass("green");
      $("#colorful-text").removeClass("yellow");
      $("#colorful-text").addClass("red");
    });

    $("#green-button").on("click", function() {
      $("#colorful-text").removeClass("red");
      $("#colorful-text").removeClass("blue");
      $("#colorful-text").removeClass("yellow");
      $("#colorful-text").addClass("green");
    });

    $("#yellow-button").on("click", function() {
      $("#colorful-text").removeClass("red");
      $("#colorful-text").removeClass("green");
      $("#colorful-text").removeClass("blue");
      $("#colorful-text").addClass("yellow");
    });

  });