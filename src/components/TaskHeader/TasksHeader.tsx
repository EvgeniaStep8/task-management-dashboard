import { FC } from 'react';
import StatusIcon from '../../UI/icons/StatusIcon';
import KebabIcon from '../../UI/icons/KebabIcon';
import { TIconColor } from '../../UI/icons/utils';
import styles from './TasksHeader.module.css';

interface ITaskHaederProps {
	title: string;
	color: TIconColor;
	count: number;
}

const TasksHeader: FC<ITaskHaederProps> = ({ title, color, count}) => {
	return (
		<div className={styles.header}>
			<div className={styles.info} >
			  <StatusIcon color={color} />
			  <h2 className={styles.title}>{title}</h2>
			  <div className={styles.counter}>{count}</div>
			</div>
			<KebabIcon color='black' width='30px' height='30px' className={styles.kebab} />
		</div>
	)
}

export default TasksHeader;