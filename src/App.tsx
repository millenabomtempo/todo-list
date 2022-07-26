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

  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <AddTodoInput 
          addTask={addTask}
          onHandleAddTask={handleAddTask}
          onHandleUpdateTasks={updateTasks}
        />

        <TodoList />
      </div>
    </main>
  )
}

export default App
