document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    if (email == 'fahimema@gmail.com' && password == 'lovealsa') {
        window.location.href = 'banking.html'
    }
    else {
        emailField.value = '';
        passwordField.value = '';
    }
})