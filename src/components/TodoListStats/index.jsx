import { useRecoilValue } from 'recoil';

// selector
import { todoListStatsState } from '@recoil/todo';

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {Math.round(percentCompleted)}</li>
    </ul>
  );
};

export default TodoListStats;
