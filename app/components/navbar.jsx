import Link from 'next/link'
import Styles from './components.module.css'

export default function Navbar() {
    return ( 
        <>
            <nav className={Styles.nav_wrapper}>
                <div>
                    <Link href={"/"} className={Styles.logo}>
                        <div>Your<span>Photos</span></div>
                    </Link>
                </div>
                <div>
                    <div className={Styles.logo_photos}>Login</div>
                </div>
            </nav>
        </>
    )
}