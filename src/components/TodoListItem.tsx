import { Trash } from 'phosphor-react'

import styles from './TodoListItem.module.css'

export default function TodoListItem() {
  return (
    <li className={styles.container}>
      <div>
      <input type="radio" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ea vel perspiciatis?</p>
      <button>
        <Trash size={20} />
      </button>
      </div>
    </li>
  )
}
