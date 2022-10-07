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
<p>{{value()}}</p> <!--Mal Pratica utilize um v-on:click ou algo do genero-->
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
Vincule dinamicamente um ou mais atributos do HTML.
~~~HTML
<img v-bind:scr="imageScr">
<img :scr="imageScr">
<a v-bind:href="link">
<a :href="link">
<input type="text" v-bind:value="name" v-on:input="setName($event, 'Schwarzmüller')">
<div :class="{demo: true, active: boxASelected}" @click="boxSelected('A')"></div>
~~~


**v-html**
Permite que a interpolação com a excução das tags HTML.
~~~HTML
<p v-html="outputGoal()"></p>
~~~


**v-on**
Adiciona um evento a ser escutado
~~~HTML
<button v-on:click="add()">Add</button>
<button @click="add()">Add</button>
<button v-on:mouseenter="add()">Add</button>
<button @mouseenter="add()">Add</button>
<input type="text" v-on:input="setName($event)">
<input type="text" @input="setName($event)">
<form v-on:submit="submitForm"></form>
<form @submit="submitForm"></form>
~~~


**Modifivadores v-on**
~~~HTML
<form v-on:submit.prevent="submitForm"></form>  <!--Não deixa o navegador recarregar--> 
<button v-on:click.left="add()">Add</button> <!--Click com botão esquerdo-->
<button v-on:click.right="add()">Add</button> <!--Click com botão direito-->
<button v-on:click.middle="add()">Add</button> <!--Click com botão do meio--> 
<input type="text" v-on:keyup.enter="confirmInput"> <!--Envia quando clicar no enter-->
~~~

**event**
~~~JavaScript
event.target.value // Obtem o valor digitado
event.preventDefault() // Não deixa o navegador recarregar
~~~

**v-once**
Precerva o estado inicial de uma propriedade interpolada
~~~HTML
<p v-once>{{ couter }}</p>
~~~

**v-model**
Cria uma inter ligação de mão dupla entre dados e elementos de formularios
~~~HTML
<!--Input-->
<input v-model="message" placeholder="Me edite">
<p>A mensagem é: {{ message }}</p>

<!--Textarea-->
<span>Mensagem com múltiplas linhas:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="Escreva bastante"></textarea>

<!--Checkbox-->
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>

<!--Radio-->
<input type="radio" id="one" value="Um" v-model="picked">
<label for="one">Um</label>
<br>
<input type="radio" id="two" value="Dois" v-model="picked">
<label for="two">Dois</label>
<br>
<span>Escolhido: {{ picked }}</span>

<!--Select-->
<select v-model="selected">
  <option disabled value="">Escolha um item</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br>
<span>Selecionado: {{ selected }}</span>
~~~

**computed (Propriedades Computadas)**
São iguais methods a sua diferença é que eles somente irá rodar quando alguma de suas depedencia (variaveis) forem alteradas, elas são tratadas como propriedade e não função.
~~~JavaScript
Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname(){
      if(this.name === ''){
        return ''
      }
      return this.name + ' ' + 'Schwazmuller'
    }
    boxAClasses(){
      return {active: this.boxASelected}
    }
  }
~~~
~~~HTML
<p>Your Name: {{ fullname }}</p>
<p :class="boxAClasses">Troca Classe e Estilo</p>
~~~

**Watch (Obeservador)**
São iguais computed a sua diferença elas são tratadas como funções e computed são tratadas como metodos. O nome da função tem que ser igual a uma propriedade data e toda vez que ela for alterada ira executar o codigo. Não retornamos nada pois não utilizamos watch em nosso HTML
~~~JavaScript
Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
      fullname: ''
    };
  },
  watch: {
    name(valorNovo, valorAntigo) {
      if(this.name === ''){
        this.fullname = ''
      }
      this.fullname = valorNovo + ' ' + 'Schwazmuller'
    }
  }
~~~
~~~HTML
<p>Your Name: {{ fullname }}</p>
~~~