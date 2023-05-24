## Aula 09 - Introdução ao DOM

**DOM**
Document Object Model
Modelo de Objetos em Documento

**Arvore DOM**
- window
    - location
    - document
        - html
            - head
                - meta
                - title
            - body
                - h1
                - p
                - p
                    - strong
                - div
    - history

**window**
A janela do navegador é chamada de window

**location**
Ele fala a sua URL, pagina anterior entre outros

**document**
Seu documento HTML

**history**
Guarda de onde vem e para onde vai

**Obtem o charset utilizado**
```window.document.charset```

**Obtem a URL da pagina**
```window.document.URL```

**Selecionando JS**
por Marca
```var p1 = document.getElementsByTagName('p')[0]```
por ID
```var d = document.getElementById('msg')```
por Nome
```var title = document.getElementsByName('title')[0]```
por Classe
```var paragrafo = document.getElementsByClassName('paragrafo')[0]```
por Seletor Id
```var d = document.querySelector('#msg')```
por Seletor Classe
```var d = document.querySelector('.msg')```

**Inner Text**
Texto que esta dentro de uma tag
```p1.innerText```

**Inner Text**
Pega a formatação junto com o texto dentro de uma tag
```p1.innerHTML```

**Mudar Style**
Mudar a cor do texto para azul
```p1.style.color = 'blue'```