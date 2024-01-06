$(document).ready(function () {
   
    $("#cambiarColorBtn").click(function () {
       
        $.ajax({
            url: "https://www.colr.org/json/color/random",
            type: "GET",
            dataType: "json",
            success: function (data) {
               
                var randomColor = data.colors[0].hex;

              
                $("body").css("background-color", "#" + randomColor);
            },
            error: function (error) {
                console.log("Error al obtener el color: ", error);
            }
        });
    });
});
