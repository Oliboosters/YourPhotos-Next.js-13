import Link from 'next/link'
import Styles from './page.module.css'

export default async function HomePage() {
  let userId = 1

  return (
    <main>
      <div className={Styles.container}>
        <h1>YourPhotos Demo</h1>
        <p>Navigate to the Users Page by clicking the link bellow</p>
        <Link href={`/users/${userId}`}>Users Page</Link>
      </div>
    </main>
  )
}
