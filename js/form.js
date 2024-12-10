(function () {
    emailjs.init("5ablKFqQTLPPePoBu");
})();

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("subscribe-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;

        emailjs
            .send("service_0y7maiq", "template_o5pycpw", {
                email: email,
            })
            .then(
                function () {
                    showNotification("Thank you for subscribing to ODYSSEY!");
                },
                function () {
                    showNotification("Oops! Something went wrong. Please try again.");
                }
            );
    });
});
function showNotification(message) {
    var notification = document.getElementById("notification");
    notification.textContent = message;
    notification.className = "notification show";
    setTimeout(function () {
        notification.className = notification.className.replace("show", "");
    }, 3000);
}
