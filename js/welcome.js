// index.html

document.addEventListener("DOMContentLoaded", function (e) {

    let currentUser = localStorage.getItem('User');
    let formLogin = document.getElementById("formLogin");
    let welcomeBack = document.getElementById("welcomeBack");
    let welcome = document.getElementById('welcome');

    if (currentUser) {
        welcomeBack.style = "display: block;";
        formLogin.style = "display: none;";

        document.getElementById('change').addEventListener("click", function (e) {

            welcomeBack.style = "display: none;";
            welcome.style = "display: none;";
            formLogin.style = "display: block;";
            or.style = "display: none;";
            guest.style = "display: none;";
        });

    } else {
        document.getElementById('submitBtn').addEventListener("click", function (e) {

            localStorage.setItem('User', JSON.stringify({ name: inputName.value }));
        });

        document.getElementById('guest').addEventListener("click", function (e) {

            localStorage.setItem('User', JSON.stringify({ name: inputName.value="Invitado" }));
            window.location = 'home.html';
        });
    }

});
