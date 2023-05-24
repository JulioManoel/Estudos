const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmEnter: ''
    };
  },
  methods: {
    confirmInput(){
      this.confirmEnter = this.name
    },
    submitForm(){
      alert('Submitted!')
    },
    setName(event){
      this.name = event.target.value
    },
    add(num){
      this.counter= this.counter + num
    },
    remove(num){
      this.counte = this.counter - num
    }
  },
});

app.mount('#events');
