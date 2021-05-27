import React from 'react'
import { useTranslation } from 'react-i18next'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'
import AddChildInput from '../add-child-input/add-child-input'

interface IPersonalInfo {
  acceptGdpr: boolean
  toggleSetAcceptGdpr: () => void
  includeChild: boolean
  toggleIncludeChild: () => void
}

const PersonalInfo: React.FC<IPersonalInfo> = ({
  acceptGdpr,
  toggleSetAcceptGdpr,
  includeChild,
  toggleIncludeChild,
}) => {
  const [t] = useTranslation()

  return (
    <>
      <h1 className="text-primary fw-bold">{t('finish-purchase-title')}</h1>
      <h4>{t('personal-info')}</h4>
      <form>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input placeholder={t('first-and-last-name')} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input placeholder={t('street')} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input placeholder={t('city')} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input placeholder={t('postal-code')} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input placeholder={t('email')} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input placeholder={t('phone-number')} />
        </InputGroup>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked={acceptGdpr}
            onClick={toggleSetAcceptGdpr}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            {t('gdpr-agreement')}
          </label>
        </div>
        <AddChildInput
          inputGroupClass="d-block d-md-none"
          checked={includeChild}
          toggle={toggleIncludeChild}
        />
      </form>
    </>
  )
}

export default PersonalInfo
