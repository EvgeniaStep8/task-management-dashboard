import { FC } from 'react';
import styles from './AddTaskButton.module.css';

const AddTaskButton: FC = () => (
  <button type='button' className={styles.button}>+ Add New Task</button>
);

export default AddTaskButton;