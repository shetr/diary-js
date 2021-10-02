import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { App } from "./control/app";

ReactDOM.render(
  <React.StrictMode>
    <header>
			<nav>
        <ul>
					<li>
						<a href="#main">Main page</a>
					</li>
					<li>
						<a href="#login">Login</a>
					</li>
					<li>
						<a href="#register">Register</a>
					</li>
        </ul>
      </nav>
			<h1>
				Diary
			</h1>
			<div id="user">
			</div>
		</header>

		<main>

		</main>

		<footer>
		</footer>
  </React.StrictMode>,
  document.getElementById('root')
);

let app = new App();

reportWebVitals();