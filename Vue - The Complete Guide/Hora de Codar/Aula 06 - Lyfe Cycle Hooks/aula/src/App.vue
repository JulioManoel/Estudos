<template>
  <div>
    <PrimeiroComponent/>
    <p>Status da Aplicação: {{ status }}</p>
    <LifeCycle/>
  </div>
</template>


<script>
import PrimeiroComponent from './components/PrimeiroComponent.vue'
import LifeCycle from './components/LifeCycle.vue';

export default {
  name: 'App',
  components: {
    PrimeiroComponent,
    LifeCycle
  },
  data() {
    return {
      status: 'desenvolvimento'
    }
  } 
}
</script>