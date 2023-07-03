import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import type { FC } from 'react'

const MenuClose: FC<IconProps> = (props) => {
  return (
    <Icon {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.6533 13.3467L19.7733 12.2267"
        stroke="#A5B3CF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2267 19.7733L15.8934 16.1067"
        stroke="#A5B3CF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.7734 19.7733L12.2267 12.2267"
        stroke="#A5B3CF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66663 17.28V20C2.66663 26.6667 5.33329 29.3333 12 29.3333H20C26.6666 29.3333 29.3333 26.6667 29.3333 20V12C29.3333 5.33332 26.6666 2.66666 20 2.66666H12C5.33329 2.66666 2.66663 5.33332 2.66663 12"
        stroke="#A5B3CF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export default MenuClose
