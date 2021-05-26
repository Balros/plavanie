import React from 'react'
import { useTranslation } from 'react-i18next'

import './purchase-form.scss'

interface ILandingPage {}

const LandingPage: React.FC<ILandingPage> = () => {
  const [t] = useTranslation()
  return <>{t('purchase-from')}</>
}

export default LandingPage
