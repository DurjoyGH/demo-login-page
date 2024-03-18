function validateForm() {
    var email = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;

    if (email.trim() === '' || password.trim() === '') {
        alert('Email and password cannot be empty!');
        return false;
    }

    return true;
}