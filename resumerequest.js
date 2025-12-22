// Initialize EmailJS (replace with your actual public key)
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // get this from EmailJS dashboard
})();

// Select the form
const resumeForm = document.getElementById('resume-form');
const formMsg = document.getElementById('form-msg');

resumeForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page refresh

    const userEmail = document.getElementById('user-email').value;

    // Send email via EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        user_email: userEmail
    })
    .then(function(response) {
        formMsg.style.color = 'green';
        formMsg.textContent = "Thanks! I received your request.";
        resumeForm.reset();
    }, function(error) {
        formMsg.style.color = 'red';
        formMsg.textContent = "Oops, something went wrong. Try again.";
        console.error('FAILED...', error);
    });
});