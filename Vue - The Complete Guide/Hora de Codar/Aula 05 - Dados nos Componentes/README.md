# Aula 05 - Dados nos Componentes

* Os componentes podem conter dados;
* Podemos **inicializar já com algum valor** e também modificar durante a execução do programa;
* Os dados ficam em uma função chamada **data**;
* Esta função deve retornar os dados em **formato de objeto**;

```JavaScript
export default {
  name: 'PrimeiroComponent',
  data() {
    return {
      nome: 'Matheus',
      profissao: 'Programador'
    }
  }
}
```