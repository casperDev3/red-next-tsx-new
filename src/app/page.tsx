import Image from 'next/image'
import styles from './page.module.css'
import Slider from '@/components/slider'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Slider />
      </div>
    </main>
  )
}
