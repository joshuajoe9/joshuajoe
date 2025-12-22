// resumerequest.js

// @author: joshuajoe9

// Initialize EmailJS
(function () {
    emailjs.init("W1m32eUQ7S21N_AgU");
})();

const resumeForm = document.getElementById('resume-form');
const formMsg = document.getElementById('form-msg');

resumeForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const userEmail = document.getElementById('user-email').value;
  const submitBtn = resumeForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;

  emailjs.send('service_pssn7rc', 'template_20ubmkj', { user_email: userEmail })
    .then(() => {
      formMsg.style.color = 'green';
      formMsg.textContent = "Thanks! I’ve got your request and will email my resume within 24 hours.";
      document.getElementById('user-email').value = '';
    })
    .catch((error) => {
      console.error(error);
      formMsg.style.color = 'red';
      formMsg.textContent = "Something went wrong. Please try again.";
    })
    .finally(() => {
      submitBtn.disabled = false;
    });
});
