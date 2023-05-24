## Aula 10 - Eventos DOM

**Evento**
É tudo que pode acontecer com o elemento, por exemplo:
- mouseenter: entra o mouse no evento
- mousemove: mover mouse no elemento
- mousedown: segurar o clique do mouse
- click: ao clicar no elemento
- mouseout: ao sair do elemento

**Função**
~~~JavaScript
function click(){
    alert("Botão foi clicado")
}
~~~

**AddEvent**
~~~JavaScript
var area = document.querySelector('#area')
area.addEventListener('click', ()=>{
    area.innerText = 'Clicou!'
    area.style.background = 'red'
})
~~~