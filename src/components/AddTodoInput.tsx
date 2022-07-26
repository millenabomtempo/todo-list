import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";

import styles from './AddTodoInput.module.css'

interface AddTodoInputProps {
  addTask: string
  onHandleAddTask: (e: ChangeEvent<HTMLInputElement>) => void
  onHandleUpdateTasks: (e: FormEvent) => void
}

export function AddTodoInput({ addTask, onHandleAddTask, onHandleUpdateTasks}:AddTodoInputProps) {
  return (
    <form className={styles.container} onSubmit={onHandleUpdateTasks}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa'
        value={addTask}
        onChange={onHandleAddTask}
      />
      <button 
        type='submit'
      >
        Criar
        <PlusCircle size={18}/>
      </button>
    </form>
  )
}
