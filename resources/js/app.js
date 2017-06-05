Vue.component('release', {
    props: ['hype', 'name', 'description', 'image', 'hypable'],

    template: '' +
        '<div class="release">' +
            '<h1><span v-on:click="incrementHype" class="hype">🔥</span> {{ releaseHype }}</h1>' +
            '<img :src="image" :alt="releaseName" />' +
            '<h2>{{ releaseName }}</h2>' +
            '<p>{{ releaseDescription }}</p>' +
            '<div class="separator"></div>' +
        '</div>',

    methods: {

        incrementHype() {
            if (this.releaseHypable) {
                this.releaseHype++
                this.releaseHypable = false
            }
        }

    },

    data() {
        return {
            releaseHype: this.hype,
            releaseName: this.name,
            releaseDescription: this.description,
            releaseImage: this.image,
            releaseHypable: this.hypable
        }
    }
})

new Vue({
    el: '#hypegame',
})
