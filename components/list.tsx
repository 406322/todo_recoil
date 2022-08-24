import { useRecoilValue } from "recoil";
import { Todo } from "../models/todo";
import { filteredTodoListState } from "../state/recoil/selectors"
import { ListItem } from "./listItem";
import { useState, useEffect } from "react";

export const List = () => {

  const todoList = useRecoilValue(filteredTodoListState);
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {todoList &&
        todoList.map((todo: Todo) => <ListItem key={todo.id} props={todo} />)}
    </>
  );
};
