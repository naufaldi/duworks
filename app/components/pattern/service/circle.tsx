import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react'
import type { FC } from 'react';
import React from 'react'

const Circle: FC<IconProps> = (props) => {
  return (
    <Icon {...props} viewBox="0 0 635 635" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="317.5" cy="317.5" r="317" stroke="#E6ECF7" />
      <circle cx="317.5" cy="317.5" r="253" stroke="#E6ECF7" />
      <circle cx="317.5" cy="317.5" r="197" stroke="#E6ECF7" />
      <circle cx="317.5" cy="317.5" r="141" stroke="#E6ECF7" />
      <circle cx="317.5" cy="317.5" r="93" stroke="#E6ECF7" />
      <circle cx="317.5" cy="317.5" r="50" stroke="#E6ECF7" />
    </Icon>
  )
}

export default Circle
