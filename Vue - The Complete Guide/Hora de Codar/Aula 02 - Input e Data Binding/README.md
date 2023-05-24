# Aula 02 - Input e Data Binding

* Uma das funcionalidades mais interessantes pe o **data binding**;
* Onde temos a possibilidade de **mudar em tempo real um dado**, por meio d que é recebido de um input, por exemplo;
* O Vue tor isso mais fácil ainda, **algumas linhas e pronto**;
* Vamos ver o data binding na prática!

## v-model
Serve para binding o valor do input com a variavel do data.

```HTML
<input type="text" v-model="inputName">
```

## v-on
Chama eventos como click, passando uma função como atributo, esta função tem que estar em methodes

```HTML
<button v-on:click="submit"> Clique Aqui </button>
ou
<button @click="submit"> Clique aqui </button>
```

## methods
Os methodes são onde podemos criar todas as nossas funções e utiliza-las.

```JavaScript
const myApp = {
  data() {
    return {
      name: '',
      inputName: ''
    }
  }
  methods: {
    submit() {
      this.name = this.inputName
    }
  }
}
```