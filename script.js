// Importing the necessary libraries
const jwt = require('jsonwebtoken'); // Ensure you have this library installed
const secretKey = 'your-256-bit-secret'; // Replace with your actual secret key

// Function to encrypt a JWT token
function encryptToken(payload) {
    const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });
    console.log('Encrypted Token:', token);
    console.log('Success'); // Added success message
    return token;
}

function decryptToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log('Decrypted Token:', decoded);
        console.log('Success'); // Added success message
        return decoded;
    } catch (error) {
        console.error('Decryption failed:', error);
        return null;
    }
}

// Example usage
const payload = { userId: 123, role: 'admin' };
const encryptedToken = encryptToken(payload);
const decryptedToken = decryptToken(encryptedToken);
