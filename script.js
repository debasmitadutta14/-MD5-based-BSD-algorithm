// Function to encipher password using MD5
function encipherPassword() {
    // Get the user input
    var password = document.getElementById('password').value;

    if (password === '') {
        alert('⚠️ Please enter a password!');
        return;
    }

    // MD5 Hashing using CryptoJS
    var hashedPassword = CryptoJS.MD5(password).toString();

    // Display the result
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<strong>✅ Enciphered Password (MD5):</strong> <br> ${hashedPassword}`;
    resultDiv.style.display = 'block';
}
