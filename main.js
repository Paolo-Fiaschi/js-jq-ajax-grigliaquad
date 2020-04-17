$(document).ready(function(){

  // creo 36 quadrati dinamici
  for (var i = 0; i < 36; i++) {
    var random = Math.floor(Math.random() * 64);
    var divRandom = $(".container").append('<div class="square"></div>');
  }
  var square = $(".square");
  square.click(
    function(){
      // associo una variabile al quadrato cliccato
      var cliccato = $(this);
      // richiamo un numero random
      $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function (data,stato){
          console.log(data.response);
          // se ha la classe clicked non farlo cliccare
          if (cliccato.hasClass('clicked')) {
            alert("Già cliccato!");
          }else if (data.response <= 5) { // se il quadrato ha un numero<=5 aggiungi la classe red, il numero ottenuto e clicked

            cliccato.addClass('orange clicked');
            cliccato.append('<h2>' + data.response + '</h2>');
          } else {// altrimenti aggiungi la classe green, il numero ottenuto e clicked
            cliccato.addClass('blue clicked');
            cliccato.append('<h2>' + data.response + '</h2>');
          }
        },
        error: function (richiesta,stato,errori) {
        }
      });
    }
  );



}
);
