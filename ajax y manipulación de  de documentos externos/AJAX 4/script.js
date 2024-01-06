$(document).ready(function () {

  var contadorElement = $("#contador");

  
  $("#incrementarBtn").click(function () {
      
      $.ajax({
          url: 'https://apicounter.free.beeceptor.com',
          type: 'POST',
          success: function (data) {
              
              var nuevoContador = parseInt(contadorElement.text()) + 1;
              contadorElement.text(nuevoContador);
          },
          error: function () {
              alert('Error al incrementar el contador en el servidor.');
          }
      });
  });
});
