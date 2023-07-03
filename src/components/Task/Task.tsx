import { FC } from 'react';
import styles from './Task.module.css';
import Tag from '../../UI/tag/Tag';
import KebabIcon from '../../UI/icons/KebabIcon';
import { TColorTag } from '../../UI/tag/Tag';
import { TPerformers } from '../Performers/Performers';
import ProgressViewer from '../../UI/progress-viewer/ProgressViewer';
import Performers from '../Performers/Performers';
import TaskInfo from '../TaskInfo/TaskInfo';

interface ITaskProps {
	title: string,
	description: string,
	tagTitle: string,
	tagColor: TColorTag,
	subtasks: number,
	completedSubtasks: number,
	performers: TPerformers,
	views: number,
	messages: number,
	files: number,
}

const Task: FC<ITaskProps> = ({ title, description, tagTitle, tagColor, subtasks, completedSubtasks, performers, views, messages, files }) => {
	return (
		<div className={styles.task}>
			<div className={styles.header} >
				<Tag name={tagTitle} color={tagColor} />
			  <KebabIcon color='black' width='30px' height='30px' className={styles.kebab} />
			</div>
			<div className={styles.main}>
        <h3 className={styles.title}>{title}</h3>
			  <p className={styles.description}>{description}</p>
			  <ProgressViewer subtasks={subtasks} completedSubtasks={completedSubtasks} />
			</div>
			<div className={styles.footer} >
				<Performers performers={performers} />
				<TaskInfo views={views} messages={messages} files={files} />
			</div>
		</div>
	)
}

export default Task;