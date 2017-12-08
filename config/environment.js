const env = process.env.NODE_ENV || 'development';
const port  = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/project-4-${env}`;
const secret = process.env.AUTH_SECRET || 'hYgs^=?>@qrTfxLp';

module.exports = { port, dbURI, secret, env };

// AlphaVantage API KEy = XTWGBR0H1M1TYI7R
