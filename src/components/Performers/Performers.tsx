import { FC } from 'react';
import styles from './Performes.module.css';
import Avatar from '../../UI/avatar/Avatar';

type TPerformer = {
	name: string,
	avatar: string,
	id: string,
}

export type TPerformers = Array<TPerformer>

interface IPerformersProps {
	performers: TPerformers,
}

const Performers: FC<IPerformersProps> = ({ performers }) => {
	return (
		<div className={styles.performers}>
			{performers.map(({ name, avatar, id }) => (
				<Avatar key={id} name={name} avatar={avatar} className={styles.avatar} />
			))}
		</div>
	)
}

export default Performers;