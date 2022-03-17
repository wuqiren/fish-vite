import './App.css';

import { Button } from 'tdesign-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 引入组件库全局样式资源
import logo from './fish.png';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header">
          🚀 + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier
        </p>

        <div className="body">
          <Button theme="default" variant="base">
            填充按钮22dd32
          </Button>

          {/* <Button onClick={() => setCount((count) => count + 1)}>
            🪂 Click me : {count}
          </Button>
          <Button type="primary">
            <Link to="/about">About</Link>
          </Button> */}
          <p> Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>

          <p>
            Mess up the code in <code>App.tsx </code> and save the file.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer">
              Vite Docs
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://github.com/wuqiren"
              target="_blank"
              rel="noopener noreferrer">
              Fish&apos;s blog
            </a>
          </p>
        </div>
      </header>
    </div>
  );
};

export default App;
