document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById('username-error').style.display = 'none';
    document.getElementById('email-error').style.display = 'none';
    document.getElementById('password-error').style.display = 'none';
    document.getElementById('confirm-password-error').style.display = 'none';

    let isValid = true;

    // Username validation
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        isValid = false;
        document.getElementById('username-error').textContent = 'Username must be at least 3 characters long';
        document.getElementById('username-error').style.display = 'block';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Enter a valid email';
        document.getElementById('email-error').style.display = 'block';
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        isValid = false;
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long';
        document.getElementById('password-error').style.display = 'block';
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
        document.getElementById('confirm-password-error').style.display = 'block';
    }

    if (isValid) {
        alert('Signup successful');
        // Here you can add code to submit the form data to the server
    }
});
