document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the username and password from the form
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulate a simple authentication process (replace with your actual logic)
        if (username === 'admin' && password === 'password') {
            // Store username in session storage (optional)
            sessionStorage.setItem('username', username);

            // Redirect to the budget management system page
            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
