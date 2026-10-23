
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        feedback.textContent = "Please fill in all the boxes.";
        return;
    }

    const subject = encodeURIComponent("Portfolio message from " + name);

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    feedback.textContent =
        "Opening your email app so you can send your message...";

    window.location.href =
        "mailto:vid3ep@gmail.com?subject=" + subject +
        "&body=" + body;
});
