# Kraft.js

Kraft.js is a minimalist JSX runtime and server using Express.js. 

It enables server-side rendering of JSX-style components without the need for a full React setup. 

This is great for prototyping or creating lightweight dynamic pages.

---
## Features

- Lightweight server with Express
- Custom JSX runtime using Babel
- Server-side rendering without React dependency
- Simple file-based routing via `App.js`
---
## Project Structure

```
Kraft.js/
├── server.js              # Entry point with Babel JSX support
├── public/
│   └── App.js             # Main JSX component to render
├── private/
│   └── Error.html         # Fallback error page
├── package.json
└── README.md
```
---
## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Kraft.js.git
cd Kraft.js
```

2. Install dependecies :

```bash
npm install
```

3. Run the server :

```bash
node server.js
```
```bash
node server.js --port=1342
```

4. Open your browser to http://localhost:3000 or http://localhost:{PORT}
