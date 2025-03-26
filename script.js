// BSD-style MD5-based password hashing with salt
function md5BsdAlgorithm(password, salt) {
    // Combine password and salt
    var combined = password + salt;

    // Apply MD5 hash
    var hash = CryptoJS.MD5(combined).toString();

    // Generate a final hash using a fixed number of iterations
    for (var i = 0; i < 1000; i++) {
        hash = CryptoJS.MD5(hash + password + salt).toString();
    }

    return hash;
}

// Function to encipher password using MD5-based BSD algorithm
function encipherPassword() {
    var password = document.getElementById('password').value;

    if (password === '') {
        alert('⚠️ Please enter a password!');
        return;
    }

    // Generate a random salt (8 characters)
    var salt = Math.random().toString(36).substring(2, 10);

    // Encipher the password
    var hashedPassword = md5BsdAlgorithm(password, salt);

    // Display the result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <strong>✅ Enciphered Password (MD5-BSD):</strong><br>
        <strong>Salt:</strong> ${salt}<br>
        <strong>Hash:</strong> ${hashedPassword}
    `;
    resultDiv.style.display = 'block';
}
