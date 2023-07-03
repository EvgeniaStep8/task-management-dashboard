import { FC } from 'react';
import { getColor, IIconProps } from './utils';

const CheckListIcon: FC<IIconProps> = ({ color }) => (
  <svg
    width='24px'
    height='24px'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fill='none'
      stroke={getColor(color)}
      strokeWidth='2'
      d='M12,20 L24,20 M12,12 L24,12 M12,4 L24,4 M1,19 L4,22 L9,17 M1,11 L4,14 L9,9 M9,1 L4,6 L1,3'
    />
  </svg>
);

export default CheckListIcon;
