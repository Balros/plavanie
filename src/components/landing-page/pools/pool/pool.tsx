import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap'
import logo from '../../../../assets/images/tehelne-pole.jpg'

import './pool.scss'

export interface IPoolProps {
  id?: number
  title?: string
  imageAddress?: string
  altImage?: string
  description?: string
  temperature?: number
  occupancy?: number
  fromDate?: Date
}

const Pool: React.FC<IPoolProps> = ({
  id,
  title,
  imageAddress,
  description,
  temperature,
  occupancy,
  fromDate,
}) => {
  const [t] = useTranslation()

  return (
    <Col className="d-flex pe-md-5 pb-4">
      <Card className="mb-4 mx-0 card-shadow border-0">
        <Row className="g-0 h-100">
          <Col md={3}>
            <CardImg className="pool-image" src={logo} alt="Card image cap" />
          </Col>
          <Col md={9} className="d-flex flex-column">
            <CardBody className="d-flex flex-column">
              <CardTitle tag="h5">{title}</CardTitle>
              <CardText className="flex-fill">{description}</CardText>
              <Row>
                <Col xs={3}>
                  <CardText className="font-weight-bold">
                    {temperature && `${temperature}°C`}
                  </CardText>
                </Col>
                <Col xs={5}>
                  <CardText>
                    {occupancy && `${occupancy}% ${t('occupancy')}`}
                  </CardText>
                </Col>
                <Col xs={4}>{/* <CardText>{fromDate}</CardText> */}</Col>
              </Row>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default Pool
