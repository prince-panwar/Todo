import Header from "../components/Header"
import TodoInput from "../components/TodoInput"
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <div className={styles.Header}>
    <Header/>
    <TodoInput />
   </div>
    </main>
  )
}
