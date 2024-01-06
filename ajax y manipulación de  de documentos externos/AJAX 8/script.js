function obtenerClima() {
    const ciudad = document.getElementById("ciudad").value;

    
    const apiKey = '9575ccca3fc036857e1dc9be1bcda6f2';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("Ciudad no encontrada. Por favor, ingrese un nombre de ciudad válido.");
            } else {
                const temperatura = data.main.temp;
                const descripcionClima = data.weather[0].description;

                const climaInfo = `Temperatura en ${ciudad}: ${temperatura}°C<br>Descripción del clima: ${descripcionClima}`;

                document.getElementById("clima-info").innerHTML = climaInfo;
            }
        })
        .catch(error => {
            console.error("Error al obtener datos del clima:", error);
            alert("Error al obtener datos del clima. Por favor, inténtelo nuevamente.");
        });
}
