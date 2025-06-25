import { components, type OptionProps } from 'react-select'

import type { SelectOption } from '../Select'

const CustomOption = ({ children, ...props }: OptionProps<SelectOption>) => (
  <components.Option {...props}>
    <div className='flex items-center gap-2'>
      {props.data.icon}
      {children}
    </div>
  </components.Option>
)

export default CustomOption
