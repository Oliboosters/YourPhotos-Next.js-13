import Link from 'next/link'
import Styles from './components.module.css'

export default function Navbar() {
    return ( 
        <>
            <nav className={Styles.nav_wrapper}>
                <div>
                    <Link href={"/"} className={Styles.link}>
                        <div className={Styles.logo_your}>Your<span className={Styles.logo_photos}>Photos</span></div>
                    </Link>
                </div>
                <div>
                    <div className={Styles.logo_photos}>Login</div>
                </div>
            </nav>
        </>
    )
}