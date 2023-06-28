import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import type { FC } from 'react'

const Menu: FC<IconProps> = (props) => {
  return (
    <Icon {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 9.33334H28" stroke="#A5B3CF" stroke-width="1.5" stroke-linecap="round" />
      <path d="M12.6533 16H28" stroke="#A5B3CF" stroke-width="1.5" stroke-linecap="round" />
      <path d="M4 16H7.98667" stroke="#A5B3CF" stroke-width="1.5" stroke-linecap="round" />
      <path d="M4 22.6667H28" stroke="#A5B3CF" stroke-width="1.5" stroke-linecap="round" />
    </Icon>
  )
}

export default Menu
