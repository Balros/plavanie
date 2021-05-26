import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap'

const regularTicketPrice = 32.99
const childTicketPrice = 5

interface IPaymentSummary {
  includeChild: boolean
}

const PaymentSummary: React.FC<IPaymentSummary> = ({ includeChild }) => {
  const [t] = useTranslation()

  return (
    <>
      <h1 className="text-primary fw-bold mt-3 mt-md-0">
        {t('payment-summary')}
      </h1>
      <Card className="mb-4 p-3 mx-0 card-shadow border-0">
        <Row>
          <Col>
            <CardBody>
              <CardTitle tag="h5">{t('season-ticket')}</CardTitle>
              <CardText>{t('season-ticket-description')}</CardText>
              <CardText tag="h5">
                {t('regular-price', { regularTicketPrice: regularTicketPrice })}
              </CardText>
              {includeChild && <CardText>{t('additional-child')}</CardText>}
              {includeChild && (
                <CardText tag="h5">
                  {t('additional-child-price', {
                    childTicketPrice: childTicketPrice,
                  })}
                </CardText>
              )}
            </CardBody>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default PaymentSummary
