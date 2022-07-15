## Matheus Batisti Projeto de react e sass

npm create vite@latest
react_sass
react
react

npm install

npm install -D sass
npm install react-icons

> Integração do Sass com react

Criamos uma pasta styles/main.sass

```sass

  h1
  color: red

```

Importando o main.sass no main.jsx

```jsx
import "./styles/main.sass";
```

## Organizando as pastas & variaveis 

criamos a pasta
src/components
src/img
src/styles/components
src/styles/mixins.sass
src/styles/variables.sass

> Criando um mini resets do css

main.sass

```sass
*
  padding: 0
  margin: 0
  font-family: "Helvetica"
  box-sizing: border-box
```

> Criando variáveis
> variables.sass

```sass
  $font-stack: "Helvetica"


```

> importamos o variável no main.sass

```sass
@use 'variables'

*
  padding: 0
  margin: 0
  font-family: variables.$font-stack
  box-sizing: border-box
```


