import './App.scss'
import './assets/styles.scss'
import { useTranslation } from 'react-i18next'
import Navigation from './navigation/navigation'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

function App() {
  const [t] = useTranslation()

  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">{t('landing-page')}</Link>
            </li>
            <li>
              <Link to="/form">{t('purchase-from')}</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              {t('landing-page')}
            </Route>
            <Route exact path="/form">
              {t('purchase-from')}
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
