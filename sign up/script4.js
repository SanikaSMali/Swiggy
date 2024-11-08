// Handle sign up form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Form submitted!"); // Check if this gets logged
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (name === "" || email === "" || phone === "" || password === "") {
        alert('Please fill out all fields');
    } else {
        window.location.href = "index.html"; // Adjust this path if needed
    }
});


// Handle forgot password modal
const modal = document.getElementById('forgotPasswordModal');
const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
const closeModal = document.querySelector('.close');

forgotPasswordBtn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.remove('hidden');
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle password reset (just for demo)
document.getElementById('resetPasswordBtn').addEventListener('click', function() {
    const resetEmail = document.getElementById('resetEmail').value;
    if (resetEmail === "") {
        alert('Please enter your email');
    } else {
        alert('Password reset link sent to ' + resetEmail);
        modal.style.display = 'none';
    }
});
