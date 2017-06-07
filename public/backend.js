(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}]},{},[1]);
