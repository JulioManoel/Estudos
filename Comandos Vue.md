## Comandos Vue e Sua Estrutura

**Para Inserir o Vue no seu Projeto HTML**
~~~HTML
<script src="https://unpkg.com/vue@next"></script>
~~~

**Para Criar um App**
~~~JavaScript
const app = Vue.createApp()
~~~

**Conectar Vue a uma parte do HTML**
~~~JavaScript
app.mount('#id')
~~~

**Propriedade Dados**
~~~JavaScript
data(){
  return{
    //Sempre retorna um objeto e nada mais
    value: ''
  }
}
~~~

**Interpolação**
Referência propriedades do Vue a um texto do HTML, também pode-se executar funções JavaScript dentro delas.
~~~HTML
<p>{{value}}</p>
~~~

**Methods**
Métodos permite definir funções que devem ser executadas, quando algo acontece ou você as chamas.
~~~JavaScript
methods: {
  outputGoal(){
    const randomNumber = Math.random()
    const text = (randomNumber < 0.5) ? 'Learn Vue!' : 'Master Vue!'
    return text
  } 
}
~~~

**v-bind**
Vincule dinamicamente um ou mais atributos.
~~~HTML
<img v-bind:scr="imageScr">
<img :scr="imageScr">
<a v-bind:href="link">
<a :href="link">
~~~

**v-html**
Permite que a interpolação com a excução dastags HTML.
~~~HTML
<p v-html="outputGoal()"></p>
~~~

