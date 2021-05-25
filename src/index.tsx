import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './custom.scss'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const langWhitelist = ['sk']

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'sk',
    lng:
      localStorage.getItem('i18n.locale') ||
      (langWhitelist.includes(navigator.language) && navigator.language) ||
      'sk',
    debug: false,
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    supportedLngs: langWhitelist,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={'loading'}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
