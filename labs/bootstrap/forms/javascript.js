$(document).ready(function() {
  $("#submit-btn").on("click", function(e) {

    let formData = $("#my-form").serializeArray().reduce(function(map, field){  map[field.name] = field.value; return map;}, {});
    console.log(formData);

    e.preventDefault();
  });
});