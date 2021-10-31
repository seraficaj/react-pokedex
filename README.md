# Using React-Bootstrap to Style A React Project

![React Bootstrap](https://avatars.githubusercontent.com/u/6853419?s=200&v=4)

## Objectives

By the end of this lesson, developers should be able to:
- Create mobile-first, reposnsive layouts using [React-Bootstrap](https://react-bootstrap.github.io/)
- Reference React-Bootstrap documentation
- Use 3rd Party React Component libraries confidently
- Further customize component libraries for personal and professional use

## Preparation
- Fork and Clone this repository
- Run `git checkout bootstrap` to view the Bootstrap lesson for this repo.
- Look over the included React components.

## Getting Started With React-Bootstrap
[React-Bootstrap Getting Started Guide](https://react-bootstrap.github.io/getting-started/introduction)

### Why use React-Bootstrap over Bootstrap CSS?

Earlier, we learned about Bootstrap and learned how it can quickly create professional, resposnive, and consistent layout and stylings for a web page. Bootstrap makes many important choices for developers including:

- Grid and Column Layouts
- JavaScript Animations and Interactivity
- Containing Divs and other invisible HTML Practices

In fact, we can add Bootstrap easily to a React Project with CDNs or NPM.

### Adding Bootstrap To React

To add Bootstrap with NPM:
- `npm install bootstrap`
- Go to your React App's `index.js` file and add these two lines to import the CSS and JavaScript for Bootstrap.
```
// INDEX.JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
```
- Notice how your App's font may change slightly. You can remove the included css files from Create React App to see the changes more clearly.
- At this point, we can continue using Bootstrap as we have in the past, assigning classNames and copying in HTML for components to quickly create layouts.

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
- `class has to be updated to className`
- self closing tags such as `<img>` need to be converted into react-friendly syntax like `<img />`

Rather than quickly bringing in and customizing a component like ordinary HTML and CSS, using Bootstrap in React quickly becomes an additional chore of refactoring huge blocks of code into React JSX.



