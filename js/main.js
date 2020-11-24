// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider.
// Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.

// collego js a html
$(document).ready(
  function(){
    $(".prev").click(
      function() {
        prevImg();
      }

    );

    $(".next").click(
      function() {
        nextImg();
      }

    );


    $(document).keydown(
      function() {
        if (event.keyCode == 37) {
          prevImg();
        } else if (event.keyCode == 39) {
          nextImg();
        }

      }
    );

    $(".nav i").click(
      function(){
       circleImg();
     }
   );

  }

);





// funzioni -------------------------//
// funzione immagine seguente
function nextImg() {
  var activeImg = $(".images img.active");
  var activeCircle = $(".nav i.active");

  activeImg.removeClass("active");
  activeCircle.removeClass("active");

  if (activeImg.hasClass("last") == true) {
    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");
  } else {
    activeImg.next().addClass("active");
    activeCircle.next().addClass("active");
  }
}
// funzione immagine precedente
function prevImg() {
  var activeImg = $(".images img.active");
  var activeCircle = $(".nav i.active");

  activeImg.removeClass("active");
  activeCircle.removeClass("active");

  if (activeImg.hasClass("first") == true) {
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");
  } else {
    activeImg.prev().addClass("active");
    activeCircle.prev().addClass("active");
  }
}

function circleImg() {
  var activeImg = $(".images img");
  var activeCircle = $(".nav i");

  activeImg.removeClass("active");
  activeCircle.removeClass("active");

  if (activeImg.hasClass("first") == true) {
    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");
  } else if (activImg ) {
    activeImg.hasClass("first") == true) {
      $(".images img.last").addClass("active");
      $(".nav i.last").addClass("active");
    } else {
      activeImg.prev().addClass("active");
      activeCircle.prev().addClass("active");
    }
  }
}
