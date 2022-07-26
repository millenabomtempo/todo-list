import { Header } from './components/Header'
import { ClipboardText, PlusCircle, Trash } from 'phosphor-react'

import styles from './App.module.css'
import './global.css'
import { AddTodoInput } from './components/AddTodoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <main className={styles.container}>
      <Header />
      <div className={styles.content}>
        <AddTodoInput />

        <TodoList />
      </div>
    </main>
  )
}

export default App
