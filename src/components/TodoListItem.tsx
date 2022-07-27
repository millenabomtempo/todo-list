import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { Task } from '../App'

import styles from './TodoListItem.module.css'

interface TodoListItemProps {
  task: Task
  onHandleDeleteTask: (taskId: string) => void
  onHandleUpdateTaskStatus: (taskId: string) => void
}

export function TodoListItem({ task, onHandleDeleteTask, onHandleUpdateTaskStatus }: TodoListItemProps) {

  function handleUpdateTaskStatus() {
    onHandleUpdateTaskStatus(task.id)
  }

  function handleDeleteTask() {
    onHandleDeleteTask(task.id)
  }

  return (
    <li className={styles.container}>
      <div>
      <input 
        type="radio" 
        checked={task.isCompleted}
        onChange={handleUpdateTaskStatus}
        onClick={handleUpdateTaskStatus}
      />
      <p>{task.title}</p>
      <button
        onClick={handleDeleteTask}
      >
        <Trash size={20} />
      </button>
      </div>
    </li>
  )
}
