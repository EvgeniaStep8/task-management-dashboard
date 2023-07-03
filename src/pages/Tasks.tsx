import { FC } from 'react';
import styles from './Tasks.module.css';
import TasksHeader from '../components/TaskHeader/TasksHeader';
import AddTaskButton from '../UI/buttons/AddTaskButton';
import Task from '../components/Task/Task';
import { performers } from '../utils/constants';


const Tasks: FC = () => {
  return (
    <div className={styles.tasks}>
      <TasksHeader title='ToDo' color='orange' count={2} />
      <AddTaskButton />
      <Task title='Taska' description='Just do it! Every day, every night just do it!' tagTitle='motivation' tagColor='violet' subtasks={6} completedSubtasks={3} performers={performers} views={10} messages={3} files={0} />
      <Task title='Taska2' description='Just do it! Every day, every night just do it!' tagTitle='design' tagColor='blue' subtasks={2} completedSubtasks={1} performers={performers} views={2} messages={0} files={1} />
    </div>
  )
}

export default Tasks;