"use-strict"

class Context {

    constructor(user, ip) {
        this._user = user
        this._ip = ip
        if (this._user === null || Object.keys(this._user).length === 0) {
            this._admin = false
            this._authenticated = false
            this._user_id = false
            this._user_name = false
        } else {
            this._admin = user.admin
            this._authenticated = true
            this._user_id = this._user.id
            this._user_name = this._user.username
            this._visitor_id = this._user.visitor_id
        }
    }

    getUser() {
        return this._user
    }

    getUserId() {
        return this._user_id
    }

    getUserName() {
        return this._user_name
    }

    isAdmin() {
        return this._admin
    }

    isAuthenticated() {
        return this._authenticated
    }

    setVisitor(visitor) {
        this._visitor = visitor
        this._visitor_id = visitor.id
    }

    getVisitor() {
        return this._visitor
    }

    getVisitorId() {
        return this._visitor_id
    }

    getIpAddress() {
        return this._ip
    }

}

module.exports = Context

