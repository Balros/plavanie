import React from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'reactstrap'
import CoverImage from './cover-image/cover-image'
import Pools from './pools/pools'
import { IPoolProps } from './pools/pool/pool'

import './landing-page.scss'

interface ILandingPage {}

const MOCKED_POOL_DATA: IPoolProps[] = [
  {
    id: 0,
    title: 'Delfín',
    imageAddress: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna, sed do eiusmod tempor incididunt ut labore et dolore magna ',
    temperature: 22,
    occupancy: 60,
    fromDate: new Date(),
  },
  {
    id: 1,
    title: 'Zlaté piesky',
    imageAddress: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    temperature: 22,
    occupancy: 60,
    fromDate: new Date(),
  },
  {
    id: 2,
    title: 'Rosnička',
    imageAddress: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    temperature: 22,
    occupancy: 60,
    fromDate: new Date(),
  },
  {
    id: 3,
    title: 'Tehelné pole',
    imageAddress: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    temperature: 22,
    occupancy: 60,
    fromDate: new Date(),
  },
]

const LandingPage: React.FC<ILandingPage> = () => {
  const [t] = useTranslation()

  return (
    <>
      <CoverImage />
      <Container>
        <Row>
          <Col>
            <h1 className="text-primary fw-bold pt-5">{t('swimming-pools')}</h1>
            <h2 className="text-primary fw-normal">
              {t('swimming-pools-additional')}
            </h2>
            <Pools pools={MOCKED_POOL_DATA} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LandingPage
