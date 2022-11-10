$(document).ready(function() {
  if(window.localStorage.getItem("name")!=undefined){
    $("#greeting").text("");
    $("#greeting").append("Hello "+window.localStorage.getItem("name")+" !");
  }else{
    $("#greeting").text("");
    $("#greeting").append("Enter your name to receive a greeting.");
  }

  $("#submit-btn").on("click", function(e){
    e.preventDefault();
    let formData = $("#my-form").serializeArray().reduce(function(map, field){  map[field.name] = field.value; return map;}, {});
    window.localStorage.setItem("name", formData.name);
    if(window.localStorage.getItem("name")!=undefined&&window.localStorage.getItem("name")!=""){
      $("#greeting").text("");
      $("#greeting").append("Hello "+window.localStorage.getItem("name")+" !");
      $("#name").removeClass("is-invalid");
    }else{
      $("#name").addClass("is-invalid");
    }
  })
});