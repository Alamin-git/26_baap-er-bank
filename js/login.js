document.getElementById('login-btn').addEventListener('click', function () {
    // get user Email
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;
    // get user Password
    const passwordField = document.getElementById('password-field');
    const userPassword = passwordField.value;
    if (userEmail == 'sontan@baap.com' && userPassword == '1234') {
        window.location.href = 'banking.html';
    }
})