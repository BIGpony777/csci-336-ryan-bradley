$(document).ready(function() {
  swapCard();
});
function swapCard() {
  setTimeout(function() {
    $("#card-image").fadeOut(1500, function(){
      $("#card-image").attr("src", "https://images.marvelsnap.io/images/cards/276.webp");
      $("#card-image").fadeIn(1500);
    });
  }, 2000);
}