

document.addEventListener("DOMContentLoaded", function (e) {

    let currentUser = localStorage.getItem('User');
    let username = document.getElementById("name");

    if (currentUser) {
        currentUser = JSON.parse(currentUser);
        username.innerText = username.innerText + currentUser.name;
    }

    document.getElementById("close").addEventListener("click", function (e) {

        localStorage.removeItem('User');
        window.location = 'index.html';
    });

});