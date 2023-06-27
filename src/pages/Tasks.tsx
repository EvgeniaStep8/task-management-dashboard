import { FC } from 'react';
import AddTaskButton from '../UI/buttons/AddTaskButton';
import ref from '../images/original-4a79dc0519d1f236b2f3e873146b9f4d.webp';

const Tasks: FC = () => {
  return (
    <div>
      <AddTaskButton />
      <img src={ref} alt='' />
    </div>
  )
}

export default Tasks;