# Aula 04 - Componentes

* É por meio de **Componentes** que podemos dividir o nosso layout em partes;
* **Cada componente tem sua responsabilidade**, por exemplo: um componente que é uma tablea e outro que é um rodapé;
* Dividir as entidades desta maneira dixa o projeto com uma **separação de responsabilidades** maior
* Cada um tendo seu CSS e também os dados que manipula;

## Template
O template é onde iremos estruturar todos nosso HTML dentro igual uma tag div

## Criar Component
Para criar um component, basta criar um arquivo com o nome do componente desejado e colocalo na pasta components. Em seguida escreva o que deseja no arquivo e coloquei um export default.

```HTML
<template>
  <h1>Olá Vue!</h1>
</template>

<script>
export default {
  name: 'PrimeiroComponent'
}
</script>
```

Agora aonde você gostaria de utilizar o component, import o component criado e insira no export default o component, da seguinte forma:

```HTML
<template>
  <PrimeiroComponent></PrimeiroComponent>
  ou
  <PrimeiroComponent/>
  ou
  <primeiro-component/>
</template>

<script>
import PrimeiroComponent from './components/PrimeiroComponent.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponent
  }
}
</script>
```