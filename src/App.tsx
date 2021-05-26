import { useTranslation } from 'react-i18next'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import Navigation from './components/navigation/navigation'
import LandingPage from './components/landing-page/landing-page'
import PurchaseForm from './components/purchase-form/purchase-form'
import Routes from './routes/routes'

import './App.scss'
import './assets/styles.scss'

function App() {
  const [t] = useTranslation()

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path={Routes.HOME}>
            <LandingPage />
          </Route>
          <Route exact path={Routes.FORM}>
            <PurchaseForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
