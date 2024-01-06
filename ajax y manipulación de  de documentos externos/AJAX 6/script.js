$(document).ready(function () {
   
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: "GET",
        dataType: "json",
        success: function (users) {
          
            users.forEach(function (user) {
                var userItem = `<li>
                                    <strong>${user.name}</strong><br>
                                    Username: ${user.username}<br>
                                    Email: ${user.email}<br>
                                    Phone: ${user.phone}
                                </li>`;
                $("#userList").append(userItem);
            });
        },
        error: function (error) {
            console.log("Error al obtener la lista de usuarios: ", error);
        }
    });
});
