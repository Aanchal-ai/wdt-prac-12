// Handle the login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form from submitting in the default way

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Send AJAX request to login endpoint
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Redirect to homepage upon successful login
            window.location.href = "home.html";
        } else {
            // Display an error message if login fails
            document.getElementById('login-error-message').style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Handle the register form submission
function handleRegister(event) {
    event.preventDefault(); // Prevent form from submitting in the default way

    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password === confirmPassword) {
        // Send AJAX request to register endpoint
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Redirect to login page after successful registration
                window.location.href = "login.html";
            } else {
                // Display an error message if registration fails
                document.getElementById('register-error-message').style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        // Display an error message if passwords do not match
        document.getElementById('register-error-message').style.display = 'block';
    }
}
