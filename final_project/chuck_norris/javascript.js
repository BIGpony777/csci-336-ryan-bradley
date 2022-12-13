$(document).ready(function() {
  setUpPage();

  $("#joke-btn").on("click", getNewJoke);

  $("#save-add").on("click", addCustomJoke);

  $("#settings-btn").on("click", settingsChange);

  $("select").change(function(){
    $("#joke-btn").show();
  });

  let formData;

});

function setUpPage() {
  $(".spinner-border").hide();
  $("#joke-btn").hide();

  if(window.localStorage.getItem("settings")=="true"){
    $("#explicit-check").prop("checked", true);
  }

  addCategories();

}

function addCategories(){
  $.ajax({
    method: "get",
    url: `https://md-chuck-norris-jokes.herokuapp.com/jokes/categories`,
    success: categorySuccess,
    error: jokeErrorAlert
  }); 
}

function fillForm(id){
  formData = $(id).serializeArray().reduce(function(map, field){  map[field.name] = field.value; return map;}, {});
}

function settingsChange(){
  fillForm('#settings-form');
  window.localStorage.setItem("settings", formData.settings);
}

function categorySuccess(data){
  for(let i = 0; i < data.length; i++){
    $("#theSelector").append(`<option value= ${data[i]} title=${data[i]}>${data[i]}</option>`);
    $("#theCustomSelector").append(`<option value= ${data[i]} title=${data[i]}>${data[i]}</option>`);
  }
    
  $("#theSelector").selectpicker("refresh");
  $("#theCustomSelector").selectpicker("refresh");
}

function jokeErrorAlert(){
  $("#main").prepend(`<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>Something went wrong getting your joke...</strong>did Chuck hear you???. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>`);
}

function explicitError(){
  $("#main").prepend(`<div class="alert alert-danger alert-dismissible fade show" role="alert"> <strong>The explicit jokes are too explicit. Please choose another category. <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>`);
}

function updateViewAsLoading() {
  $("#joke-btn-text").hide();
  $(".spinner-border").show();
}

function updateViewAsDoneLoading() {
  $(".spinner-border").hide();
  $("#joke-btn-text").show();
}

function getNewJoke(e) {
  e.preventDefault();
  updateViewAsLoading();

  fillForm('#my-form');
  if(formData.category == "explicit" && window.localStorage.getItem("settings") == "undefined"){
    explicitError();
    updateViewAsDoneLoading();
  }else{
    $.ajax({
      method: "get",
      url: `https://md-chuck-norris-jokes.herokuapp.com/jokes/random?category=${formData.category}`,
      success: newJoke,
      error: jokeErrorAlert
    });
  }
}

function newJoke(data) {
    $('.row').append(`<div class = "joke"><div class="col-xl-3 col-lg-4 col-sm-6 col-xs-12"><div class="card-body"><h5 class="card-title">Joke #${data.id} <i class="fa fa-trash" aria-hidden="true"></i></h5><p class="card-text">${data.value}</p><div><footer class="blockquote-footer">by ${data.author} in<cite title="Source Title"> ${data.category}</cite></footer></div><div>`);
    updateViewAsDoneLoading();
    addCan();
  }

function addCustomJoke(){
  fillForm("#add-form");

  
  $.ajax({
    method: "post",
    url: `https://md-chuck-norris-jokes.herokuapp.com/jokes/`,
    dataType: "json",
    data:{'value' : formData.add, 'category': formData.category},
    headers: {'X-API-Key':'c5c579ca-vsrd-0707-bss7-ba775761c46c'},
    success: newCustom,
    error: jokeErrorAlert
  });
}

function newCustom(){
  $('.row').append(`<div class = "joke"><div class="col-xl-3 col-lg-4 col-sm-6 col-xs-12"><div class="card-body"><h5 class="card-title">Custom Joke<i class="fa fa-trash" aria-hidden="true"></i></h5><p class="card-text">${formData.add}</p><div></div><div>`);
  addCan();
}

function addCan(){
  $(".fa-trash").on("click",  function(){
    $(this).closest(".joke").remove();
  });
}
