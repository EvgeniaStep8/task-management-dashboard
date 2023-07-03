import { FC } from 'react';
import styles from './TaskInfo.module.css';
import ViewsIcon from '../../UI/icons/ViewsIcon';
import MessageIcon from '../../UI/icons/MessageIcon';
import ClipIcon from '../../UI/icons/ClipIcon';

interface ITaskInfoProps {
	views: number,
	messages: number,
	files: number,
}

const TaskInfo: FC<ITaskInfoProps> = ({ views, messages, files }) => (
	<ul className={styles.list}>
		<li className={styles.item}>
			<ViewsIcon color='gray' />
			<p className={styles.counter}>{views}</p>
		</li>
		<li className={styles.item}>
			<MessageIcon color='gray' />
			<p className={styles.counter}>{messages}</p>
		</li>
		<li className={styles.item}>
			<ClipIcon color='gray' />
			<p className={styles.counter}>{files}</p>
		</li>
	</ul>
);

export default TaskInfo;