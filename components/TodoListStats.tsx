import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../state/recoil/selectors"
import { useState, useEffect } from "react";

export const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="m-5 p-5 rounded-md bg-gray-200 text-center">
      <h1 className="text-xl font-bold mb-2">Stats</h1>
      <ul>
        <li className="font-bold">Total items: {totalNum}</li>
        <li className="font-bold">Items completed: {totalCompletedNum}</li>
        <li className="font-bold">Items not completed: {totalUncompletedNum}</li>
        <li className="font-bold">Percent completed: {formattedPercentCompleted}%</li>
      </ul>
    </div>
  );
};
