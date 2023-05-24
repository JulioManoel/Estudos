const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullname: '',
    };
  },
  watch: {
    counter(value){
      if(value> 50){
        const that = this
        setTimeout(()=>{
          that.counter = 0
        },2000)
      }
    }

    /*name(valorNovo, valorAntigo) {
      if(valorNovo === ''){
        this.fullname = ''
      } else {
        this.fullname = valorNovo + ' ' + this.lastName
      }
    },
    lastName(valorNovo){
      if(valorNovo === ''){
        this.fullname = ''
      } else {
        this.fullname = this.name + ' ' + valorNovo
      }
    }*/
  },
  computed: {
    fullname(){
      if(this.name === '' || this.lastName === ''){
        return ''
      }
      return this.name + ' ' + this.lastName
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = ''
    }
  }
});

app.mount('#events');
