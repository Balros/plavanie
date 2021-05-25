import React from 'react'
import { useTranslation } from 'react-i18next'
import { Navbar, NavbarBrand } from 'reactstrap'
import './navigation.scss'

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  const [t] = useTranslation()

  return (
    <Navbar color="primary" light expand="sm">
      <div className="logo-ba"></div>
    </Navbar>
  )
}

export default Navigation
