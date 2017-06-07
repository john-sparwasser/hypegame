(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const io = ws('http://localhost:3333', {})
const client = io.channel('analytics')

client.connect(function (error, connected) {
    if (error) {
        console.log(error)
        return
    }
    client.joinRoom('analytics_stream', {}, function(error, joined) {
        console.log(joined)
    })
})

Vue.component('release', {

    // stupid amount of properties because I'm doing this the quick and dirty way
    props: ['rid', 'hype', 'name', 'description', 'image', 'hyped', 'csrf', 'authenticated', 'username', 'user_id', 'visitor_id', 'ip_address'],

    template: '<div class="release">' +
    '<h1 v-bind:class="{ hypable: !releaseHyped || !userAuthenticated }"><span v-on:click="incrementHype" class="hype">🔥</span> {{ releaseHype }}</h1>' +
    '<img v-on:click="sendEvent(\'Clicked on release image\')" :src="image" :alt="releaseName" />' +
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

},{}]},{},[1]);
