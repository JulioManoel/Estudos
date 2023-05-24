<template>
  <div>
    <h1>Hello Vue!</h1>
    <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
  </div>
</template>

<script>
export default {
  name: 'PrimeiroComponent',
  data() {
    return {
      nome: 'Matheus',
      profissao: 'Programador'
    }
  }
}
</script>