$(document).ready(function() {
   
    $.ajax({
        url: 'canciones.json',
        dataType: 'json',
        success: function(data) {
            mostrarCanciones(data);
        },
        error: function(error) {
            console.error('Error al cargar el archivo JSON: ' + error.statusText);
        }
    });

   
    function mostrarCanciones(canciones) {
        var playlistDiv = $('#playlist');

       
        $.each(canciones, function(index, cancion) {
            var audioItem = $('<div class="audio-item">').text(cancion.nombre);

           
            audioItem.click(function() {
                $('#audioPlayer').attr('src', cancion.url);
            });

            playlistDiv.append(audioItem);
        });
    }
});
