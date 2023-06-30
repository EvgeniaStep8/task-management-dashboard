import { FC } from 'react';
import { getColor, IIconProps } from './utils';

const StatusIcon: FC<IIconProps> = ({ color }) => (
  <svg
    fill={getColor(color)}
    width='16px'
    height='16px'
    viewBox='0 0 16 16'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle r="10" />
  </svg>
);

export default StatusIcon;
