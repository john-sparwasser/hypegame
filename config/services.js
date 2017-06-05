const Env = use('Env')

module.exports = {
    ally: {
        // Configuration for facebook
        facebook: {
            clientId: Env.get("FACEBOOK_APP_ID"),
            clientSecret: Env.get("FACEBOOK_APP_SECRET"),
            redirectUri: Env.get("FACEBOOK_REDIRECT_URL")
        }
    }
}
