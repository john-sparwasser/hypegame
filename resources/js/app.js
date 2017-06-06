const io = ws('http://localhost:3333', {})
const client = io.channel('analytics')

client.connect(function (error, connected) {
    if (error) {
        console.log(error)
        return
    }
})

Vue.component('release', {

    // stupid amount of properties because I'm doing this the quick and dirty way
    props: ['rid', 'hype', 'name', 'description', 'image', 'hyped', 'csrf', 'authenticated', 'username', 'user_id', 'visitor_id', 'ip_address'],

    template: '<div v-on:mouseover="sendEvent(\'Mouse over release\')" class="release">' +
    '<h1 v-bind:class="{ hypable: !releaseHyped || !userAuthenticated }"><span v-on:click="incrementHype" class="hype">🔥</span> {{ releaseHype }}</h1>' +
    '<img :click="sendEvent(\'Clicked on release image\')" :src="image" :alt="releaseName" />' +
    '<h2>{{ releaseName }}</h2>' +
    '<p>{{ releaseDescription }}</p>' +
    '<div class="separator"></div>' +
    '</div>',

    methods: {

        incrementHype() {
            if (this.releaseHypable) {
                this.releaseHype++
                this.releaseHypable = false
                this.$http.post('/release/' + this.releaseId + '/increment_hype', {
                    "_csrf": this.csrfToken
                })
                this.sendEvent('Hyped release')
            } else {
                this.sendEvent('Tried to hype release')
            }
        },

        sendEvent(name) {
            const analytic = {
                event: {
                    name: name,
                    time: new Date().toJSON()
                },
                release: {
                    id: this.releaseId,
                    name: this.releaseName,
                    hype: this.releaseHype
                },
                user: {
                    id: this.userId,
                    name: this.userName
                },
                visitor: {
                    id: this.visitorId,
                    ip: this.ipAddress
                }
            }
            client.emit('message', JSON.stringify(analytic))
        }
    },

    data() {
        return {
            releaseId: this.rid,
            releaseHype: this.hype,
            releaseName: this.name,
            releaseDescription: this.description,
            releaseImage: this.image,
            releaseHyped: (this.hyped == 'true'),
            userAuthenticated: (this.authenticated == 'true'),
            csrfToken: this.csrf,
            userId: this.user_id,
            userName: this.username,
            visitorId: this.visitor_id,
            ipAddress: this.ip_address
        }
    }
})

new Vue({
    el: '#hypegame'
})
