import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Nav, Navbar, Row } from 'reactstrap'

import logo from '../../assets/images/ba-logo-white.svg'
import Routes from '../../routes/routes'

import './navigation.scss'

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  return (
    <>
      {/* <div className="bg-primary"> */}
      <Navbar color="primary" className="sticky-top">
        <Container>
          <Nav className="w-100">
            <li className="w-100 bg-primary">
              <Link to={Routes.HOME}>
                <img className="d-block logo-ba" src={logo} alt="kid-in-pool" />
              </Link>
            </li>
          </Nav>
        </Container>
      </Navbar>
      {/* </div> */}
    </>
  )
}

export default Navigation
