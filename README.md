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

## Estruturando o sidebar

Sidebar.jsx

```jsx
import React from "react";

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <p>imagem</p>
      <p className="title">Desenvolvedor</p>
      <p>rede sociais</p>
      <p>Informações de contato</p>
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};
```

> importando a imagem

```jsx
import Avatar from "../img/eu.jpg";
```

> Criando arquivo estilo sidebar.sass

rsc/styles/components/sidebar.sass

> Importando o sidebar.sass para Sidebar.jsx

```jsx
import "../styles/components/sidebar.sass";
```

## Criando a estilização do sidebar.sass

```sass

@use '../variables'

#sidebar
    background-color: variables.$bg-color
    flex: 1 1 0
    border-radius: variables.$container-border-radius
    display: flex
    align-items: center
    flex-direction: column
    text-align: center
    position: relative
    padding: 3rem 0

    img
        max-width: 70%

```

> Agora no arquivo sidebar.jsx colocamos a imagem

```tsx
<img src={Avatar} alt="Bruno AKH" />
```

> COntinuando com a estilizacao da imagem

```sass
@use '../variables'

#sidebar
    background-color: variables.$bg-color
    flex: 1 1 0
    border-radius: variables.$container-border-radius
    display: flex
    align-items: center
    flex-direction: column
    text-align: center
    position: relative
    padding: 3rem 0

    img
        max-width: 70%
        border-radius: variables.$container-border-radius
        position: absolute
        top: -3rem
```

> Criando o sass do maincontent.sass

src/styles/components/maincontent.sass

> Em MainContent.jsx

```tsx
import React from "react";
import "../styles/components/maincontent.sass";
export const MainContent = () => {
  return <main id="main-content">Main content</main>;
};
```

No arquivo de estilo do maincontent.sass

```sass

@use '../variables'

#main-content
  background-color: variables.$bg-color
  flex: 2 1 0
  bodder-radius: variables.$container-border-radius
  padding: 3rem

```

## Terminando o estilo do sidebar.sass

```sass
 .title
        color: variables.$text-color-secondary
        background-color: variables.$bg-color-secondary
        border-radius: variables.$card-border-radius
        margin-top: 12rem
        padding: .8rem 1.2rem
```

> criando o mixins

```sass

@use 'variables'


@mixin btn
  padding: 1rem 1.2rem
  color: variables.$text-color
  background: variables.$background
  text-decoration: none
  border-radius:  3rem
```

> COmo usar o mixins

primeiro importamos ele com @use mixins

```sass
@use '../mixins'
```

Depois usamos ele @include

```sass

 .btn
        @include mixins.btn

```

## criando component rede sociais

src/components/SocialNetworks.jsx

```jsx
export const SocialNetworks = () => {
  return <div>SocialNetworks</div>;
};
```

> Criando arquivo de css do SocialNetworks

src/styles/components/socialnetworks.sass

> Importamos o arquivo socialnetworks.sass

```jsx
import "../styles/components/socialnetworks.sass";
```

> Usando o component SocialNetworks no Sidebar.jsx

```tsx
import Avatar from "../img/eu.jpg";
import "../styles/components/sidebar.sass";
import { SocialNetworks } from "./SocialNetworks";
export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Bruno AKH" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <p>Informações de contato</p>
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
};
```

> Importando os Icones

```tsx
import { FaLikedinIn, FaGithub, FaInstagram } from "react-icons";
```

> Criando um mock de dados para contato social

```jsx
const socialNetworks = [
  { name: "linkedin", icon: <FaLikedinIn /> },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];
```

> Agora que temo os dados vamos percorrer ele com map

```jsx
<section id="social-networks">
  {socialNetworks.map((network) => (
    <a href="" className="social-btn" id={network.name} key={network.name}>
      {network.icon}
    </a>
  ))}
</section>
```

> Vamos estilizar os ícones socialnetworks.sass

```sass

@use '../variables'
@use '../mixins'

#social-networks
    @include mixins.center
    gap: 1rem
    margin: 1rem 0

    .social-btn
      padding: .6rem
      background-color: variables.$bg-color-secondary
      border-radius: variables.$card-border-radius
      color: #333
      font-size: 1.3rem
      @include mixins.center

    #linkedin
      color: #0072b1

    #github
      color: #111
    #instagram
      color: #bc2a8d

    :hover
        background: variables.$gradient
        > svg
            color: variables.$text-color

```

> Criando mixins que centraliza o conteúdo

```sass
@mixin center
  display: flex
  justify-content: center
  align-items: center
```

## Criando e estilizando Componente de informações

> Criamos o arquivo src/components/InformationContainer.jsx

```tsx
export const InformationContainer = () => {
  return <div>InformationContainer</div>;
};
```

> Criamos o arquivo sass /src/styles/components/informationcontainer.sass

> Importamos o componente no Sidebar.jsx

> Importamos os ícones no InformationContainer.jsx

```jsx
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
```

> Estruturamos o InformationContainer.jsx

```jsx
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

export const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(62)99966-9341</p>
        </div>
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>suportecsanapolis@gmail.com</p>
        </div>
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Anápolis / GO</p>
        </div>
      </div>
    </section>
  );
};
```

> estilizando o informationcontainer.sass

```sass

@use '../variables'
@use '../mixins'

#information-container
  @include mixins.center
  flex-direction: column
  background-color: variables.$bg-color-secondary
  padding: 1rem
  margin-bottom: 2rem
  text-align: left
  width: 80%
  border-radius: variables.$card-border-radius

  .info-card
    @include mixins.center
    justify-content: start
    gap: 1rem
    padding-bottom: .8rem
    margin-bottom: .8rem
    border-bottom: 1px solid #444
    width: 100%

    h3
      color: variables.$bg-color-secondary
      font-size: .8rem
      margin-bottom: .5rem
    p
      color: variables.$text-color
      font-weight: bold

    svg
      background-color: variables.$bg-color
      padding: .4rem
      width: 2rem
      height: 2rem
      border-radius: variables.$card-border-radius

    #phone-icon
      color: #e93b81

    #email-icon
      color: #6ab5b9

    #pin-icon
      color: #c17ceb


```


