import React from 'react'
import { useTranslation } from 'react-i18next'

interface IAddChildInput {
  inputGroupClass?: string
  checked: boolean
  toggle: () => void
}

const AddChildInput: React.FC<IAddChildInput> = ({
  inputGroupClass,
  checked,
  toggle,
}) => {
  const [t] = useTranslation()

  return (
    <div className={`form-check ${inputGroupClass}`}>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        checked={checked}
        onClick={toggle}
      />
      <label className="form-check-label" htmlFor="flexCheckChecked">
        {t('add-child')}
      </label>
    </div>
  )
}

export default AddChildInput
