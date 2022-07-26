import logoImg from '../assets/logo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logoImg} alt="Imagem com um foguete e um texto escrito todo" />
    </header>
  )
}
