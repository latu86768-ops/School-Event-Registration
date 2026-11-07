
// School Event Registration Website

// Get the registration form
const registrationForm = document.getElementById("registrationForm");

// Get the confirmation message area
const message = document.getElementById("message");

// Run when the student submits the form
registrationForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get student information
    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const selectedEvent = document.getElementById("studentEvent").value;

    // Check that all fields contain information
    if (name === "" || email === "" || selectedEvent === "") {
        message.textContent = "Please complete all fields.";
        message.style.color = "red";
        return;
    }

    // Create a registration record
    const registration = {
        studentName: name,
        studentEmail: email,
        event: selectedEvent
    };

    // Get existing registrations from Local Storage
    let registrations = JSON.parse(
        localStorage.getItem("schoolRegistrations") || "[]"
    );

    // Add the new registration
    registrations.push(registration);

    // Save registrations in Local Storage
    localStorage.setItem(
        "schoolRegistrations",
        JSON.stringify(registrations)
    );

    // Display confirmation message
    message.textContent =
        "Thank you, " + name +
        "! Your registration for " +
        selectedEvent + " was successful.";

    message.style.color = "green";

    // Clear the form
    registrationForm.reset();
});
