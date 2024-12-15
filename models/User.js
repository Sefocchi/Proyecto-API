class User {
    constructor(username, hashedPassword) {
        this.username = username;
        this.password = hashedPassword;
    }
}

module.exports = User;
