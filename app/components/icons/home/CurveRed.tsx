import { Icon, IconProps } from '@chakra-ui/react'
import React, { FC } from 'react'

const CurveRed: FC<IconProps> = (props) => {
  return (
    <Icon {...props} viewBox="0 0 101 124" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0H81C92.0457 0 101 8.9543 101 20V124H80C35.8172 124 0 88.1828 0 44V0Z"
        fill="#E5212E"
      />
    </Icon>
  )
}

export default CurveRed
