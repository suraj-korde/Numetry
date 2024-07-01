document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valid = true;
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const message = document.getElementById('message');

    
    document.getElementById('fullnameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('mobileError').textContent = '';
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

   
    if (fullname.length < 3) {
        valid = false;
        document.getElementById('fullnameError').textContent = 'Full name must be at least 3 characters.';
    }

   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Invalid email format.';
    }

    
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        valid = false;
        document.getElementById('mobileError').textContent = 'Mobile number must be 10 digits.';
    }

    
    if (username.length < 3) {
        valid = false;
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
    }

    
    if (password.length < 6) {
        valid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    }

   
    if (password !== confirmPassword) {
        valid = false;
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    }

    
    if (valid) {
        message.style.color = 'green';
        message.textContent = 'User registered successfully.';
        
        document.getElementById('registrationForm').reset();
    } else {
        message.style.color = 'red';
        message.textContent = 'Please fix the errors above.';
    }
});
