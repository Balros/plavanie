import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'
import logo from '../../../assets/images/kid-in-pool.jpg'
import Routes from '../../../routes/routes'

import './cover-image.scss'

interface ILandingPage {}

const CoverImage: React.FC<ILandingPage> = () => {
  const [t] = useTranslation()

  return (
    <div className="position-relative cover-image-div">
      <img src={logo} alt="kid-in-pool" />
      <Container>
        <Row>
          <Col>
            <div className="position-absolute bg-white rounded-end pt-4 pb-3 cover-image-description pe-3">
              <h2>{t('single-payment')}</h2>
              <p>{t('single-payment-description')}</p>
              <Link to={Routes.FORM}>
                <Button color="primary">{t('proceed-to-buy')}</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CoverImage
