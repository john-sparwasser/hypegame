"use strict"

const User = use("App/Model/User")

class LoginController {

    * facebookRedirect (request) {
        yield request.ally.driver('facebook').redirect()
    }

    * handleFacebookCallback (request, response) {
        const fbUser = yield request.ally.driver('facebook').getUser()

        const searchAttr = {
            email: fbUser.getEmail()
        }

        const newUser = {
            email: fbUser.getEmail(),
            avatar: fbUser.getAvatar(),
            username: fbUser.getName(),
            provider: 'facebook',
            provider_id: fbUser.getId(),
            provider_token: fbUser.getAccessToken()
        }

        const user = yield User.findOrCreate(searchAttr, newUser) 

        yield request.auth.loginViaId(user.id)

        response.redirect("/")
    }

    * logout (request, response) {
        yield request.auth.logout()
        response.redirect("/")
    }

}

module.exports = LoginController

