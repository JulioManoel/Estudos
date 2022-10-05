const app = Vue.createApp({
    data() {
        return {
            name: 'julio',
            age: 5,
            vueLink: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
        }
    },
    methods: {
        random(){
            return Math.random()
        }
    },
})

app.mount('#assignment');