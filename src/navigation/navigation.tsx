import React from 'react'
import { Navbar } from 'reactstrap'

import './navigation.scss'

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = () => {
  return (
    <Navbar color="primary" light expand="sm">
      <div className="logo-ba"></div>
    </Navbar>
  )
}

export default Navigation
