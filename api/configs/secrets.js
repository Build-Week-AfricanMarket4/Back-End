const BCRYPT_ROUNDS = process.env.BCRYPT_ROUNDS || 8;

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'snitchesGetStitches', BCRYPT_ROUNDS
}