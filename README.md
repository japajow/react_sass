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

## Criando a estrutura do projeto

Criando um arquivo src/styles/components/app.sass

App.jsx

```jsx
import "./styles/components/app.sass";
```

Criando o arquivo src/components/Sidebar.jsx
Criando o arquivo src/components/MainContent.jsx

Sidebar.jsx

```tsx
import React from "react";

export const Sidebar = () => {
  return <div>Sidebar</div>;
};
```

MainContent.jsx

```tsx
import React from "react";

export const MainContent = () => {
  return <div>MainContent</div>;
};
```

> Com components criado vamos utilizar eles no App.jsx

```tsx
function App() {
  return (
    <div className="App">
      <h1>Bruno AKH</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
```

Colocando a imagem dentro da pasta img

> Agora no main.sass

```sass

body


a, svg
    transition: .4s

```

> Definindo as cores do projeto no variables.sass

```sass
$text-color: #fff
$text-color-secondary: #a6a6a6
$body-bg-color: #271b31
$bg-color: #111
$bg-color-secondary: #1d1d1d
$container-border-radius: 10px
$card-border-radius: 5px
$gradient: linear-gradient(90deg, rgba(250,82,82,1) 0%, rgba(221,36,118,1) 100%)

```

Agora no main.sass

```sass
body
  background-color: variables.$bg-color
  color: variables.$text-color


```

## estruturando o components app.sass

```sass

@use '../variables'

#portfolio
    display: flex
    flex-wrap: flex-wrap
    padding: 3rem
    gap: 3rem

    h1 
        width: 100%
        font-size: 5rem
        margim-bottom: 4rem
        background: variables.$gradient
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent

```