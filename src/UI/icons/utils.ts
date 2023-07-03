export type TIconColor = 'blue' | 'orange' | 'yellow' | 'green' | 'black' | 'gray';

export const getColor = (color: TIconColor): string => {
  switch (color) {
    case 'blue':
      return '#2a26f0';
    case 'orange':
      return '#fa6c07';
    case 'yellow':
      return '#fcc708';
    case 'green':
      return '#02b372';
    case 'black':
      return '#000';
    case 'gray':
      return '#7c7c82';

  };
};

export default getColor;

export interface IIconProps {
  color: TIconColor,
  width?: string,
  height?: string,
  className?: string,
}