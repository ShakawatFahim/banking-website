document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    const right = document.getElementById('right');
    const wrong = document.getElementById('wrong');
    if (email == 'fahimema@gmail.com' && password == 'lovealsa') {
        window.location.href = 'banking.html';
        right.style.display = 'block';
        wrong.style.display = 'none';
    }
    else {
        passwordField.value = '';
        right.style.display = 'none';
        wrong.style.display = 'block';
    }
})