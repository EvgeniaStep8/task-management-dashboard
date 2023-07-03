import { FC } from 'react';
import styles from './Avatar.module.css';
import cn from 'classnames';

interface IAvatarProps {
	avatar: string,
	name: string,
	className?: string,
}

const Avatar: FC<IAvatarProps> = ({ avatar, name, className }) => {
	return (
		<img src={avatar} alt={name}  className={cn(styles.avatar, className)} />
	)
}

export default Avatar;