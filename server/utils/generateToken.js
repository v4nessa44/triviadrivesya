const jwt = require('jsonwebtoken');

// Secret key to sign and verify tokens (should be kept secret)
const secretKey = 'yourSecret237487lausldhflashlfhaljKey';

function generateToken(userId) {
    // Sign the token with the data and secret key
    const token = jwt.sign({ userId }, secretKey, { expiresIn: '1d' }); // You can adjust the expiration time as needed (e.g., '1h' for 1 hour)

    return token;
}

module.exports = generateToken;
