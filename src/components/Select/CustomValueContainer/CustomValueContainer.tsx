import { components, type ValueContainerProps } from 'react-select'

import type { SelectOption } from '../Select'

const CustomValueContainer = (props: ValueContainerProps<SelectOption>) => (
  <components.ValueContainer {...props}>
    <div className='flex items-center gap-2'>
      {props.getValue()[0].icon}
      {props.getValue()[0].label}
    </div>
  </components.ValueContainer>
)

export default CustomValueContainer
