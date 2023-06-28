import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import type { FC } from 'react';


const MessagesIcon: FC<IconProps> = (props) => {
  return (
    <Icon
      {...props}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 20.5H7.5C4.5 20.5 2.5 19 2.5 15.5V8.5C2.5 5 4.5 3.5 7.5 3.5H17.5C20.5 3.5 22.5 5 22.5 8.5V15.5C22.5 19 20.5 20.5 17.5 20.5Z"
        stroke="#A5B3CF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 9L14.37 11.5C13.34 12.32 11.65 12.32 10.62 11.5L7.5 9"
        stroke="#A5B3CF"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default MessagesIcon;
