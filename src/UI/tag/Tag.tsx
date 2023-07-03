import { FC } from 'react';
import cn from 'classnames';
import styles from './Tag.module.css';

export type TColorTag = 'red' | 'yellow' | 'green' | 'blue' | 'violet' | 'gray' | 'orange';

interface ITagProps {
	name: string,
	color: TColorTag,
}

const Tag: FC<ITagProps> = ({ name, color }) => (
	<div className={cn(styles.Tag, styles[color])}>{name}</div>
)

export default Tag;