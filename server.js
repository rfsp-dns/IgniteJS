require('@babel/register')({ extensions: ['.js', '.jsx'] });

const express = require('express');
const app = express();
let port = 3000;
const fs = require('fs');
const path = require('path');

// Minimal JSX runtime
global.React = {
  createElement(type, props, ...children) {
    props = props || {};
    props.children = children.flat().map(child =>
      typeof child === 'string' ? child : child
    );
    return type(props);
  }
};


// Route
app.get('/', (req, res) => {
  try {
    const App = require('./public/App.js').default; //You can change the default app
    const html = App(); // JSX render
    res.send(html);
  } catch (error) {
    console.error("App rendering failed:", error);

    const errorPagePath = path.join(__dirname, 'private', 'Error.html');

    fs.readFile(errorPagePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Failed to load error page:", err);
        return res.status(500).send('Internal Server Error');
      }

      let safeErrorMessage = (error.stack || error.toString())
        .replace(/\x1b\[[0-9;]*m/g, '') // remove ANSI
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      const html = data.replace('{{ERROR_MESSAGE}}', safeErrorMessage);
      res.status(500).send(html);
    });
  }
});


const args = process.argv.slice(2);

// Find the --port argument and extract the value
const portArg = args.find(arg => arg.startsWith('--port='));

// Extract the port value
let custompPort = portArg ? portArg.split('=')[1] : null;

// Check if the port is valid
if (custompPort && !isNaN(custompPort) && custompPort >= 1 && custompPort <= 65535) {
    port = custompPort;
} 


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
