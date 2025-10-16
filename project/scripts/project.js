// -------------------------------
// Footer: Current Year & Last Modified
// -------------------------------
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// -------------------------------
// Hamburger Menu Toggle
// -------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});

// -------------------------------
// Survey Form Functionality
// -------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('spaceForm');
    const messageDiv = document.getElementById('surveyMessage');

    // Array to store submissions
    let submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    // Function: Display message
    function displayMessage(msg) {
        messageDiv.innerHTML = msg; // innerHTML to support bold formatting
    }

    // Function: Save submission to array and localStorage
    function saveSubmission(submission) {
        submissions.push(submission);
        localStorage.setItem('submissions', JSON.stringify(submissions));
    }

    // Event Listener: Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const nameInput = document.getElementById('username');
        const planetSelect = document.getElementById('favplanet');
        const subscribeCheckbox = document.getElementById('subscribe');

        // -------------------------------
        // Conditional Branching: Check required fields
        // -------------------------------
        if (!nameInput.value || !planetSelect.value) {
            displayMessage('Please complete all required fields.');
            return;
        }

        // Create submission object
        const submission = {
            name: nameInput.value,
            favoritePlanet: planetSelect.value,
            subscribed: subscribeCheckbox.checked
        };

        // Save submission
        saveSubmission(submission);

        // Display confirmation message using template literals
        displayMessage(`Thank you, <strong>${submission.name}</strong>! Your favorite planet is <strong>${submission.favoritePlanet}</strong>${submission.subscribed ? ' and you subscribed to our newsletter.' : '.'}`);

        // Reset the form
        form.reset();
    });
});