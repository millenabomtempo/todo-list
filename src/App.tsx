import { Header } from './components/Header'
import { AddTodoInput } from './components/AddTodoInput'
import { TodoList } from './components/TodoList'

import styles from './App.module.css'
import './global.css'

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
