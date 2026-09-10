function login() {
    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if (username === "ECE 2026-27" && password === "TOPPERS") {

        // Login session
        sessionStorage.setItem("loggedIn", "true");

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Wrong Username or Password!");

    }
}