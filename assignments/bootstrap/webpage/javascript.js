$(document).ready(function() {
$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $("#submit-btn").on("click", function(e) {
      let formData = $("#my-form").serializeArray().reduce(function(map, field){  map[field.name] = field.value; return map;}, {});
      console.log(formData);
      output = formData.Gain;
      if(parseInt(formData.Gain) > parseInt(formData.Threshold) && formData.Gain > 1 && formData.Threshold > 0 && formData.Ratio > 1 && formData.Ratio < 10){
        output = parseInt(formData.Gain) - ((parseInt(formData.Gain)-parseInt(formData.Threshold))/(10/parseInt(formData.Ratio)));
      }
      $('.answer').empty();
      $('.answer').append(output);
      e.preventDefault();
    });
  })
  });