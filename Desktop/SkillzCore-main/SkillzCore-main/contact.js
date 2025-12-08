document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    // Optionally, you can collect form data here if needed
    const name = document.getElementById("name").value;

    // Display a  message
    const formContainer = document.querySelector(".contact-container");
    formContainer.innerHTML = `
        <div class="thank-you-message">
            <h2>Thank You, ${name}!</h2>
            <p>Your message has been sent successfully. We'll get back to you shortly.</p>
        </div>
    `;
});
