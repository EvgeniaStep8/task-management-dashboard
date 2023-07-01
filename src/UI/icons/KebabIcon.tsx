import { FC } from 'react';
import { getColor, IIconProps } from './utils';

const KebabIcon: FC<IIconProps> = ({ color }) => (
  <svg
    width='30px'
    height='30px'
    viewBox='0 0 24 24'
    fill={getColor(color)}
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='6' r='2' transform='rotate(90 12 6)' />
    <circle cx='12' cy='12' r='2' transform='rotate(90 12 12)' />
    <path
      d='M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20Z'
    />
  </svg>
);

export default KebabIcon;
