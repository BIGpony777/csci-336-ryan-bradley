const state = {};

$(document).ready(function() {
  setUpPage();
  getJoke();

  $("#joke-btn").on("click", getNewJoke);
});

function setUpPage() {
  $(".spinner-border").hide();
}

function updateViewAsLoading() {
  $("#joke-btn-text").hide();
  $(".spinner-border").show();
}

function updateViewAsDoneLoading() {
  $(".spinner-border").hide();
  $("#joke-btn-text").show();
}

function getJoke() {
  updateViewAsLoading();

  $.ajax({
    method: "get",
    url: "https://api.chucknorris.io/jokes/random",
    success: jokeGotCallback,
    error: function (jqxhr, errorStatus) {
      $("#joke-text").text("");
      $("#joke-text").addClass("text-danger");
      $("#joke-text").text(`Error Getting joke:: ${jqxhr.status} - ${errorStatus}`);
    }
  });
}

function jokeGotCallback(data) {
  state.Id = data.id;
  $("#joke-text").text("");
  $("#joke-text").removeClass("text-danger");
  
  updateViewAsDoneLoading();
  $("#joke-text").text(`${data.value}`);
  
}

function getNewJoke(e) {
  e.preventDefault();
  updateViewAsLoading();

  $.ajax({
    method: "get",
    url: `https://api.chucknorris.io/jokes/random`,
    success: newJoke,
    error: function (jqxhr, errorStatus) {
      $("#joke-text").text("");
      $("#joke-text").addClass("text-danger");
      $("#joke-text").text(`Oops - an error has occurred: ${jqxhr.status} - ${errorStatus}`);
    }
  });
}

function newJoke(data) {
    $("#joke-text").text("");
    updateViewAsDoneLoading();
    $("#joke-text").text(`${data.value}`);
  }