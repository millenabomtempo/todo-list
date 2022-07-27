import { ClipboardText } from "phosphor-react";
import { TodoListItem } from "./TodoListItem";

import styles from './TodoList.module.css'
import { Task } from "../App";
import { useState } from "react";

interface TodoListProps {
  isListEmpty: boolean
  tasks: Task[]
  totalCompleted: number
  onHandleDeleteTask: (taskId: string) => void
  onHandleUpdateTaskStatus: (taskId: string) => void
}

export function TodoList({ isListEmpty, tasks, onHandleDeleteTask, onHandleUpdateTaskStatus, totalCompleted }: TodoListProps) {
  console.log(totalCompleted);

  return (
    <div className={styles.container}>
      <header>
        <strong>
          Tarefas criadas <span>{tasks.length}</span>
        </strong>
        <strong>Concluídas {isListEmpty ? <span>0</span> : <span>{totalCompleted} de {tasks.length}</span>}</strong>
      </header>
      {isListEmpty ? (
        <div className={styles.emptyTodoListItems}>
          <ClipboardText size={56}/>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
       ): (
        <ul className={styles.todoListItems}>
          {tasks.map(task => (
            <TodoListItem 
              key={task.id}
              task={task}
              onHandleDeleteTask={onHandleDeleteTask}
              onHandleUpdateTaskStatus={onHandleUpdateTaskStatus}
            />
          ))}
        </ul>
        )}
    </div>
  )
}
