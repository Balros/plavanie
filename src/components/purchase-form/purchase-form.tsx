import React, { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap'

import PersonalInfo from './personal-info/personal-info'
import PaymentSummary from './payment-summary/payment-summary'
import AddChildInput from './add-child-input/add-child-input'

import './purchase-form.scss'

interface ILandingPage {}

const LandingPage: React.FC<ILandingPage> = () => {
  const [t] = useTranslation()
  const [includeChild, setIncludeChild] = useState(false)
  const [acceptGdpr, setAcceptGdpr] = useState(false)

  const toggleIncludeChild = useCallback(() => {
    setIncludeChild((prevIncludeChild) => !prevIncludeChild)
  }, [setIncludeChild])

  const toggleSetAcceptGdpr = useCallback(() => {
    setAcceptGdpr((prevAcceptGdpr) => !prevAcceptGdpr)
  }, [setAcceptGdpr])

  return (
    <>
      <Container>
        <Row>
          <Col className="pt-5">
            <Row>
              <Col md={6}>
                <PersonalInfo
                  acceptGdpr={acceptGdpr}
                  toggleSetAcceptGdpr={toggleSetAcceptGdpr}
                  includeChild={includeChild}
                  toggleIncludeChild={toggleIncludeChild}
                />
                <Button className="d-none d-md-inline-block " color="primary">
                  {t('continue-to-payment')}
                </Button>
              </Col>
              <Col md={6}>
                <PaymentSummary includeChild={includeChild} />
                <AddChildInput
                  inputGroupClass="d-none d-md-block"
                  checked={includeChild}
                  toggle={toggleIncludeChild}
                />
                <Button className="d-inline-block d-md-none" color="primary">
                  {t('continue-to-payment')}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LandingPage
