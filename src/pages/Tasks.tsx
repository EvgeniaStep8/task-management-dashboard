import { FC } from 'react';
import MessageIcon from '../UI/icons/MessageIcon';
import StatusIcon from '../UI/icons/StatusIcon';
import ClipIcon from '../UI/icons/ClipIcon';
import ViewsIcon from '../UI/icons/ViewsIcon';
import CheckListTaskIcon from '../UI/icons/CheckListTaskIcon';
import KebabIcon from '../UI/icons/KebabIcon';

const Tasks: FC = () => {
  return (
    <div>
      <MessageIcon color='gray' />
      <StatusIcon color='blue' />
      <ClipIcon color='gray' />
      <ViewsIcon color='gray' />
      <CheckListTaskIcon color='gray' />
      <KebabIcon color='black' />
    </div>
  )
}

export default Tasks;