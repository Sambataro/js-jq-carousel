// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider.
// Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.

// collego js al dom
$(document).ready(

);






// funzioni -------------------------//
// funzione immagine seguente
function nextImg() {
  var activeImg = $(".images .img.active");
  var activeCircle = $(".nav .i.active");

  activeImg.removeClass("active");
  activeCircle.removeClass("active");

  if (activeImg.hasClass("last") == true) {
    $(".images .img.first").addClass("active");
    $(".nav .i.first").addClass("active");
  } else {
    activeImg.next().addClass("active");
    activeCircle.next().addClass("active");
  }
}
// funzione immagine precedente
function prevImg() {
  var activeImg = $(".images .img.active");
  var activeCircle = $(".nav .i.active");

  activeImg.removeClass("active");
  activeCircle.removeClass("active");

  if (activeImg.hasClass("first") == true) {
    $(".images .img.last").addClass("active");
    $(".nav .i.last").addClass("active");
  } else {
    activeImg.prev().addClass("active");
    activeCircle.prev().addClass("active");
  }
}
