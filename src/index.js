import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ReactDOMServer from 'react-dom/server';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

/** There are two key reasons why rendering on the server may be used in a real world app. First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines. Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load. */ 
// ReactDOM.render(ReactDOMServer.renderToString(<App />), document.getElementById('root'))