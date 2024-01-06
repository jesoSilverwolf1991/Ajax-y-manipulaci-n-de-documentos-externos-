document.addEventListener("DOMContentLoaded", function () {
    const getDataBtn = document.getElementById("getDataBtn");
    const resultContainer = document.getElementById("result");

    getDataBtn.addEventListener("click", function () {
       
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET",
            success: function (data) {
                
                displayResults(data);
            },
            error: function (error) {
                console.error("Error al obtener datos:", error);
            }
        });
    });

    function displayResults(data) {
       
        resultContainer.innerHTML = "";

        data.forEach(function (post) {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            resultContainer.appendChild(postElement);
        });
    }
});
