import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap'
import { useForm } from 'react-hook-form'
import AddChildInput from '../add-child-input/add-child-input'

type FormValues = {
  name: string
  street: string
  city: string
  postalCode: number
  email: string
  phoneNumber: number
  gdpr: boolean
  includeChild: boolean
}

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'all' })

  console.log(errors)
  const nameRequired = t('name-required')
  const streetRequired = t('street-required')
  const cityRequired = t('city-required')
  const emailRequired = t('email-required')
  const postalCodeRequired = t('postal-code-required')
  const gdprRequired = t('gdpr-required')
  const postalCodeLengthError = t('postal-code-length-error')
  const phoneNumberError = t('phone-number-error')

  return (
    <>
      <h1 className="text-primary fw-bold">{t('finish-purchase-title')}</h1>
      <h4>{t('personal-info')}</h4>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data)
        })}
      >
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input
            id="name"
            {...register('name', { required: nameRequired })}
            placeholder={t('first-and-last-name')}
          />
        </InputGroup>
        {errors.name && (
          <p className="text-primary fw-bold">{errors.name.message}</p>
        )}

        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input
            {...register('street', { required: streetRequired })}
            placeholder={t('street')}
          />
        </InputGroup>
        {errors.street && (
          <p className="text-primary fw-bold">{errors.street.message}</p>
        )}

        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input
            {...register('city', { required: cityRequired })}
            placeholder={t('city')}
          />
        </InputGroup>
        {errors.city && (
          <p className="text-primary fw-bold">{errors.city.message}</p>
        )}

        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input
            type="number"
            {...register('postalCode', {
              required: postalCodeRequired,
              minLength: { value: 5, message: postalCodeLengthError },
              maxLength: { value: 5, message: postalCodeLengthError },
              // valueAsNumber: true,
            })}
            placeholder={t('postal-code')}
          />
        </InputGroup>
        {errors.postalCode && (
          <p className="text-primary fw-bold">{errors.postalCode.message}</p>
        )}

        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input
            {...register('email', { required: emailRequired })}
            placeholder={t('email')}
          />
        </InputGroup>
        {errors.email && (
          <p className="text-primary fw-bold">{errors.email.message}</p>
        )}

        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText className="bg-primary">@</InputGroupText>
          </InputGroupAddon>
          <Input
            type="tel"
            {...register('phoneNumber', {
              pattern: {
                message: phoneNumberError,
                value: /^(\+421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
              },
            })}
            placeholder={t('phone-number')}
          />
        </InputGroup>
        {errors.phoneNumber && (
          <p className="text-primary fw-bold">{errors.phoneNumber.message}</p>
        )}
        <div className="form-check mb-3">
          <input
            {...register('gdpr', { required: gdprRequired })}
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
          {errors.gdpr && (
            <p className="text-primary fw-bold">{errors.gdpr.message}</p>
          )}
        </div>
        <AddChildInput
          inputGroupClass="d-block d-md-none"
          checked={includeChild}
          toggle={toggleIncludeChild}
        />
        <Button
          type="submit"
          className="d-none d-md-inline-block "
          color="primary"
        >
          {t('continue-to-payment')}
        </Button>
      </form>
    </>
  )
}

export default PersonalInfo
