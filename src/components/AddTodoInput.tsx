import { PlusCircle } from "phosphor-react";

import styles from './AddTodoInput.module.css'

export function AddTodoInput() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button type='submit'>
        Criar
        <PlusCircle size={18}/>
      </button>
    </div>
  )
}
