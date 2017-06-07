const io = ws('http://hypega.me', {})
const client = io.channel('analytics')

let analytics = []

// Closure trickiness :)
let getAnalytics = (function() {
    return analytics;
})()

client.connect(function (error, connected) {
    if (error) {
        console.log(error)
        return
    }
    client.joinRoom('analytics_stream', {}, function(error, joined) {
        client.on('message', function (room, message) {
            console.log(message)
            analytics.push(JSON.parse(message))
        })
    })
})

Vue.component('analytics', {
    template: '<ul class="analytics-list">'+ 
    '<li v-for="analytic in analytics">' +
    '<p>{{ analytic.event.name }}: {{ analytic.release.name }}</p>' +
    '<p>User: <b>{{ analytic.user.name }}</b>, Visitor ID:{{ analytic.visitor.id }}, Hype: {{ analytic.release.hype }}</p>' +
    '</li>' +
    '</ul>',

    data() {
        return {
            analytics: getAnalytics
        }
    }

})

vm = new Vue({
    el: '#hypegame'
})

