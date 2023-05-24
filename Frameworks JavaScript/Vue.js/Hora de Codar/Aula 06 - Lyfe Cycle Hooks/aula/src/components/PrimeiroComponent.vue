<template>
  <div>
    <h1>Hello Vue</h1>
    <p>Sou {{ nome }} e trabalho como {{ profissao }}</p>
  </div>
</template>

<script>
export default {
  name: 'PrimeiroComponent',
  data() {
    return {
      nome: 'Julio',
      profissao: 'programador'
    }
  }
}
</script>