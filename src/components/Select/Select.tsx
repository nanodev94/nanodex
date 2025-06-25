import ReactSelect, { type MultiValue, type SingleValue } from 'react-select'

import Option from './CustomOption'
import ValueContainer from './CustomValueContainer'

export interface SelectOption {
  label: string
  value: string
  icon?: React.ReactNode
}

interface Props {
  options: SelectOption[]
  defaultValue?: string
  onChange?: (newValue: SelectOption | null) => void
}

const Select = ({ options, defaultValue, onChange }: Props) => {
  const defaultOption = options.find(opt => opt.value === defaultValue)

  const handleChange = (
    newValue: SingleValue<SelectOption> | MultiValue<SelectOption>
  ) => {
    onChange?.(newValue as SingleValue<SelectOption>)
  }

  return (
    <ReactSelect
      components={{
        Option,
        ValueContainer,
      }}
      defaultValue={defaultOption}
      onChange={handleChange}
      options={options}
      isMulti={false}
    />
  )
}

export default Select
