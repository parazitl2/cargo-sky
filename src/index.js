import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import i18next from 'i18next';
import {I18nextProvider} from 'react-i18next';
import ru from "./translations/ru.json";
import {BrowserRouter} from "react-router-dom";
import { init } from '@emailjs/browser';
import keys from "./application-keys.json";

init(keys.emailjs.user_ID);

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'ru',
    resources: {
        ru: {
            common: ru
        }
    },
});

ReactDOM.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
