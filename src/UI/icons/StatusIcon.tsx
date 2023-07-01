import { FC } from 'react';
import { getColor, IIconProps } from './utils';

const StatusIcon: FC<IIconProps> = ({ color }) => (
  <svg
    fill={getColor(color)}
    width='16px'
    height='16px'
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx="16" cy="16" r="16"/>
  </svg>
);

export default StatusIcon;
