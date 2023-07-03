import{ FC } from 'react';
import CheckListIcon from '../icons/CheckListIcon';
import styles from './ProgressViewer.module.css';

interface IProgressViewerProps {
	subtasks: number,
	completedSubtasks: number,
}

const ProgressViewer: FC<IProgressViewerProps> = ({ subtasks, completedSubtasks }) => (
	<div className={styles.viewer}>
		<CheckListIcon color='gray' />
    <p className={styles.text}>{`${completedSubtasks}/${subtasks}`}</p>
	</div>
)

export default ProgressViewer;