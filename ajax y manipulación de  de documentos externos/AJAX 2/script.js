$(document).ready(function () {
    const contactForm = $("#contactForm");
    const resultContainer = $("#result");

    $("#submitBtn").on("click", function () {
      
        const formData = contactForm.serialize();

        $.ajax({
            url: "https://formulario.free.beeceptor.com", 
            method: "POST",
            data: formData,
            success: function (response) {
               
                displayResult(response);
            },
            error: function (error) {
                console.error("Error al enviar formulario:", error);
            }
        });
    });

    function displayResult(response) {

        resultContainer.empty();

        
        resultContainer.text(response.message);
        if (response.success) {
            resultContainer.addClass("success");
        } else {
            resultContainer.addClass("error");
        }
    }
});
