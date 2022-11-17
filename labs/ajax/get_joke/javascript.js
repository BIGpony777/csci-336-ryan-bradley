const state = {};

$(document).ready(function() {
  $.ajax({
    method: "get",
    url: "https://api.chucknorris.io/jokes/random",
    success: jokeGotCallback,
    error: function(jqxhr, errorStatus) {
      $("#deck-text").text("");
      $("#deck-text").addClass("text-danger");
      $("#deck-text").text(`Error Getting joke: ${jqxhr.status} - ${errorStatus}`);
    }
  });
});

function jokeGotCallback(data) {
  state.Id = data.id;
  $("#joke-text").text("");
  $("#joke-text").removeClass("text-danger");

  $("#joke-text").text(`${data.value}`);
}