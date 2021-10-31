# Using React-Bootstrap to Style A React Project

![React Bootstrap](https://avatars.githubusercontent.com/u/6853419?s=200&v=4)

## Objectives

By the end of this lesson, developers should be able to:

-   Create mobile-first, reposnsive layouts using [React-Bootstrap](https://react-bootstrap.github.io/)
-   Reference React-Bootstrap documentation
-   Use 3rd Party React Component libraries confidently
-   Further customize component libraries for personal and professional use

## Preparation

-   Fork and Clone this repository
-   Run `git checkout bootstrap` to view the Bootstrap lesson for this repo.
-   Look over the included React components.

## Getting Started With React-Bootstrap

[React-Bootstrap Getting Started Guide](https://react-bootstrap.github.io/getting-started/introduction)

### Why use React-Bootstrap over Bootstrap CSS?

Earlier, we learned about Bootstrap and learned how it can quickly create professional, resposnive, and consistent layout and stylings for a web page. Bootstrap makes many important choices for developers including:

-   Grid and Column Layouts
-   JavaScript Animations and Interactivity
-   Containing Divs and other invisible HTML Practices

In fact, we can add Bootstrap easily to a React Project with CDNs or NPM.

### Adding Bootstrap To React

To add Bootstrap with NPM:

-   `npm install bootstrap`
-   Go to your React App's `index.js` file and add these two lines to import the CSS and JavaScript for Bootstrap.

```
// INDEX.JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
```

-   Notice how your App's font may change slightly. You can remove the included css files from Create React App to see the changes more clearly.
-   At this point, we can continue using Bootstrap as we have in the past, assigning classNames and copying in HTML for components to quickly create layouts.

### Issues With React

However, even though Bootstrap has been installed without issue, bringing in Bootstrap Elements- such as forms, carousels, and navbars- can quickly become too complicated and messy.

Let's bring in a Navbar component:

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

Even if you run Prettier, React will still give you many error messages!

-   `class has to be updated to className`
-   self closing tags such as `<img>` need to be converted into react-friendly syntax like `<img />`

Rather than quickly bringing in and customizing a component like ordinary HTML and CSS, using Bootstrap in React quickly becomes an additional chore of refactoring huge blocks of code into React JSX.

With this in mind, let's go over a proposed solution from React-Bootstrap.

## React Bootstrap - Getting Started

NOTE: As of the time of this writing (late 2021-early 2022), React Bootstrap is STILL based on Bootstrap 4. Future versions may be based on the then current Bootstrap 5.0. There are very minor differences between these versions (such as some components getting deprecated), but you may have to look out for them!

[Get Started With React-Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)

To install react-bootstrap, you must first have Bootstrap set up according to the instructions earlier.

In short:
`npm install bootstrap react-bootstrap` to install both Bootstrap and React-Bootstrap.

Then, go the project's `index.js` file and bring in Bootstrap's CSS and JS:

```
//index.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
```

### Components Are Now Components!

## Invisible Layout Components

Anything that has custom Bootstrap Styles in ordinary Bootstrap is now a Component. This is also true even for invisible but important HTML elements like `<div class="container>` and `<div class="row">`- the two foundational divs for setting up the Bootstrap 12-Column layout system.

Let's demonstrate how Layout Divs have to be brought in as React Components in react-bootstrap:

```
//App.js
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
 <Row>
    <Col xs={12} md={8}>
     <h1>I take up more space.</h1>
    </Col>
    <Col xs={6} md={4}>
      <h1>I am smaller</h1>
    </Col>
  </Row>
```

In this example, we can see that the sizing for these elements have been changed from classes to Props. Rather than using class names to set columns, we can nest elements that take up that amount of space inside these Column Components.

Now, let's bring in visible React Components:

## Bootstrap Components as React Components

Using the sidebar menu on the [React-Bootstrap Docs](https://react-bootstrap.github.io/components/carousel/), let's see how Bootstrap Components get React-fied

Here is the code for a Carousel Component. You can choose any other component, as they will all follow the same structure:

```
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
```

^Notice how Bootstrap class names become props in many cases. Other helpful helper classes remain as className attributes. Because these Components are being imported in from React-Bootstrap, they are defined inside of your node_modules folder and behave accordingly. This means that customization for each component has to come from your own CSS file.

## Passing Props and Event Handlers to React-Bootstrap Components

You can pass down Event Handlers as Props to Bootstrap Components and your own Components that make use of them.

For example, in React-Pokedex, you might see that several components are composed both of React-Bootstrap components and other elements of my own making. Let's see how the `<DisplayPokemon>` component is able to select a Pokemon and add it to the team.

First, a click handling function is defined in App.js and sent into another component as a prop.

```
// APP.JS

 const handleOnclick = (name) => {
    setDisplay(name);
  };

...

<AllPokemon
    myTeam={myTeam}
    handleOnclick={handleOnclick}
    pokeArray={pokeArray}
/>
```

Now, let's go into the component that inherits this click handler:

```
const AllPokemon = (props) => {
  return (
    <>
    <h1>All Pokemon</h1>
      <Col xs={6} sm={6} md={8}>
        <PokemonList handleOnclick={props.handleOnclick} pokeArray={props.pokeArray} />
      </Col>
    </>
  );
};
```

And, this goes further down the component tree- all the way down to `<PokemonList.js>`!

```
const PokemonList = (props) => {
  const PokeRender = props.pokeArray.map((pokemon, index) => {
    return <ListGroupItem key={index} onClick={() => props.handleOnclick(pokemon.name)}>{pokemon.name}</ListGroupItem>;
  });

  return <ListGroup>{PokeRender}</ListGroup>;
};
```
If you were to look in React Tools, you'll see a complex Component Tree sending this prop all the way through to `<PokemonList>`!

Spookily, you might even see some Direct Ancestor components not have the onClick, but they still send it down! How does this work?

The Bootstrap Components themselves render out as HTML on the DOM. Anything inside of a Bootstrap Layout Component will still be considered a descendant of its containg component and will directly receive the prop passed down to it!

Does this sound complicated! It is! But we can follow the prop's path down through the component tree to see where it runs!
