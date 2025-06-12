
/*

And you can now also see why your component function names must start with an uppercase character.

All built-in elements like div, image, or header start with lowercase characters.

Custom components on the other hand, so components built by you or other developers must start with an uppercase character to tell React that it's not a built-in component. So that's how React tells custom components apart from built-in components.

This does not just prevent potential name clashes, like for example here where header with a lowercase h, would clash with the builtin header.

*/

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
