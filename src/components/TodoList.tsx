import { ClipboardText } from "phosphor-react";
import { TodoListItem } from "./TodoListItem";

import styles from './TodoList.module.css'

export function TodoList() {
  return (
    <div className={styles.container}>
      <header>
        <strong>
          Tarefas criadas <span>0</span>
        </strong>
        <strong>Concluídas <span>0 de 0</span></strong>
      </header>
      
      <div className={styles.emptyTodoListItems}>
        <ClipboardText size={56}/>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

      <ul className={styles.todoListItems}>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </ul>
    </div>
  )
}
