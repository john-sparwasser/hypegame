"use-strict"

class Context {

    constructor(user) {
        this._user = user
        if (this._user === null || Object.keys(this._user).length === 0) {
            this._admin = false
            this._authenticated = false
        } else {
            this._admin = user.admin
            this._authenticated = true
        }
    }

    getUser() {
        return this._user
    }

    isAdmin() {
        return this._admin
    }

    isAuthenticated() {
        return this._authenticated
    }

}

module.exports = Context

