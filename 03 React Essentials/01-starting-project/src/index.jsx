/* 

The index.jsx file is the key because the code that is loaded and executed here and in the end, the transformed React code you wrote.

This index.jsx file does import something from the App.jsx file. It imports the App component 

This index.jsx file, acts as the main entry point of our React app since it is the first file to be loaded by the HTML file. And it's in this place where the React app boots up. 

It's this special React DOM library, which in the end belongs to the overall React library which ultimately renders this App component.
 
*/

import ReactDOM from "react-dom/client";

/*

And this App component is rendered by passing JSX code to this render method.

*/

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");

/*

And this App component is rendered by passing JSX code to this render method.

This render method, however, is being called on an object that's created with another method, the createRoot method.

This method takes an existing HTML element as an input, so an element that's not being created by React but that instead is part of the index.html file already.

In this case, that would be this div here with the id root, since that's what we're selecting here with getElementById, that's what's getting passed to this createRoot method.

And then with that element selected and set as a root for the React project.

React goes ahead and injects a React component, the App component in this case, into this element. It renders this component and all its contents, including any nested components it may contain and their content into this div.

*/

ReactDOM.createRoot(entryPoint).render(<App />);

/*

So the createRoot and render methods are responsible for rendering a single root component, the App component in this case which then in turn may contain as many nested components as needed.

*/