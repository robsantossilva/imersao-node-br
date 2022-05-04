## Imersão em desenvolvimento de APIs com Node.js By #NodeBR! 

### O que não é o Node.js
- Uma linguagem de programação
- Ferramenta para criação de sites simples
- Um framework Javascript
- Ferramenta para criação de aplicações front-end

### O que é Node.js
- Plataforma para construção de aplicações Backend usando Javascript
- Ferramenta inicialmente criada para resolver o problema de upload de imagens em 2009 (Ryan Dahl)
- Ferramenta para construir CLI

### Sincronia de Funções

### Ciclo de Vida do Javascript
- Funções que dependem de execução externa serão executadas em background
- A forma com que seu código é escrito é diferente da ordem em que é executado
- Importante sempre manter a ordem de sua execução para evitar problemas

#### Promises
- Pending: Estado inicial, ainda não terminou ou ainda não foi rejeitado
- Fulfilled: QUando executou todas as operações com sucesso
- Rejected: Quando a operação falhou

#### EventEmitter
- **Usado para ações contínuas**
- Node.js usa para quase tudo em seu ecossistema
- Bastante usado também nos browsers (onClick)
- Trabalha sob o Design Pattern Observer/PubSub

### Manipulação de Lista

### Introdução a desenvolvimento de testes automatizados em Javascript

#### Mocha
https://mochajs.org/

#### Pacote Assert do NodeJS
``` javascript
const assert = require('assert')
assert.ok(true);
```

### Node além da Web

#### Manupilando arquivos