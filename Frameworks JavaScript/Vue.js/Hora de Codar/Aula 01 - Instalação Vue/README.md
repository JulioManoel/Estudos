# Aula 01 - Instalação Vue

* Instalar o Vue em um projeto é simples, podemos utilizar via CDN;
* Basta inserir o link de script e pronto!
* Porém para ter acesso a todas as funcionalidades do Vue.js, é recomentdado instalar pelo CLI (veremos depois);
* Vamos criar nosso primeiro projeto em Vue!

## Instalar CDN
Basta inserir o script de instalação no seu HTML e pronto.

```HTML
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

## Instancia Vue
Para começar iremos precisar criar uma instancia do nosso app e escolher um elemento HTML para ser renderizado.

```JavaScript
const myApp = {}

Vue.createApp(myApp).mount('#app')
```

## Data()
É utilizado para armazenar os dados "variaveis" da nossa aplicação tem que ser retornados e fica dentro da estrutura principal do app.

```JavaScript
const myApp = {
  return {
    name: 'Julio',
    age: 19
  }
}

Vue.createApp(myApp).mount('#app')
```

## Interpolação
A interpolação é utilizado para executar um codigo no meio do HTML ou visualizar uma variavel.

```HTML
<div id="app">
  <p>Meu nome é {{ name }}</p>
</div>
```