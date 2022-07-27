import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header'
import { AddTodoInput } from './components/AddTodoInput'
import { TodoList } from './components/TodoList'

import styles from './App.module.css'
import './global.css'

export interface Task {
  id: string
  title: string
  isCompleted: boolean
}

function App() {
  const [addTask, setAddTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])
  const [isCompleted, setIsCompleted] = useState(false)
  
  function handleAddTask(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setAddTask(e.target.value)
  }

  function updateTasks(e: FormEvent){
    e.preventDefault()
    setTasks([
      ...tasks, 
      {
        id: uuidv4(),
        title: addTask,
        isCompleted: false
      }
    ])
    setAddTask('')
  }

  function deleteTask(taskId: string) {
    const filterdTasks = tasks.filter(task => {return task.id !== taskId})
    setTasks(filterdTasks)
  }

  function updateTaskStatus(taskId: string) {
    setIsCompleted(!isCompleted)
    
    const updatedStatus = tasks.map(task => {
      if(task.id === taskId) {
        task.isCompleted = isCompleted
        return task
      }
      return task
    })
    setTasks(updatedStatus);
  }

  const totalCompleted = tasks.reduce((acc, task) => {
    if(task.isCompleted === true) {
      return acc + 1
    }
    return acc
  }, 0)

  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <AddTodoInput 
          addTask={addTask}
          onHandleAddTask={handleAddTask}
          onHandleUpdateTasks={updateTasks}
        />

        <TodoList 
          isListEmpty={tasks.length ? false : true}
          tasks={tasks}
          onHandleDeleteTask={deleteTask}
          onHandleUpdateTaskStatus={updateTaskStatus}
          totalCompleted={totalCompleted}
        />
      </div>
    </main>
  )
}

export default App
