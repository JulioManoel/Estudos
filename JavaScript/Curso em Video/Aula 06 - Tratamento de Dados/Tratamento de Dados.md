## Aula 06 - Tratamento de Dados

**Para obter o valor do prompt**
```var nome = window.prompt("Qual é seu nome?")```

**Para contatenar usa o mais(+)**
```window.alert("É um prazer te conhecer, " + nome)```

**Converter String para Int**
```Number.parseInt(n)```

**Converter String para Float**
```Number.parseFloat(n)```

**Converter String para Number**
```Number(n)```

**Converter Number para String**
```String(n)```
```n.toString()```

**Formatar String**
```var nome = "Gustavo"```
```var idade = 45```
```window.alert("O aluno ${nome} com ${idade})```

**Quantidade de Letras**
```nome.length```

**Deixa tudo Maiusculo**
```nome.toUpperCase()```

**Deixa tudo Minusculo**
```nome.toLowerCase()```

**Template String**
Serva para se escrever no meio do texto ao invez de aspaz "" utilizase craze `` e ${variavel} pode-se utilizar também tags HTML
```windows.alert(`Olá ${nome}! Seu nome tem ${nome.length} letras.`)```

**Escreve na tela**
```document.write(`Olá ${nome}! Seu nome tem ${nome.length} letras.`)```

**Numeração de Casas decimais**
Para colocar duas casas decimais
```n1.toFixed(2)```
Para colocar duas casas decimais + virgula ao invez de ponto
```n1.toFixed(2).replace('.', ',')```

**Salario em Number**
```n1.toLocaleString('localização', {style: 'tipoSalario', currency: 'simbulo'}```
```n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}```
```n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}```
```n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EURO'}```