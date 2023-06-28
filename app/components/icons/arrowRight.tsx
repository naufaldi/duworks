import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import type { FC } from 'react';
import React from 'react'

const ArrowRight: FC<IconProps> = (props) => {
  return (
    <Icon
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.9301 5.93L21.0001 12L14.9301 18.07"
        stroke="#A5B3CF"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 12H20.83"
        stroke="#A5B3CF"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  )
}

export default ArrowRight
