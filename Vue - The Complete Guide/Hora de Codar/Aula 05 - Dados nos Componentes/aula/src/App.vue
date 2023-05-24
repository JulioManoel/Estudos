<template> 
  <div>
    <PrimeiroComponent/> 
    <p>O dado do app: {{ test }}</p> 
  </div>
</template>

<script>
import PrimeiroComponent from './components/PrimeiroComponent.vue'
export default {
  name: 'App',
  components: {
    PrimeiroComponent
  },
  data() {
    return {
      test: 'Testando'
    }
  }
}
</script>