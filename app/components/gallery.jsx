import Link from 'next/link'
import Image from 'next/image'
import Styles from './components.module.css'
import GetImages from '@/lib/getALLImages'

export default async function PhotoGallery() {
    const images = await GetImages()

    return ( 
        <div className={Styles.photo_grid}>
            {images.map((img) => (
                <Link href={`/photos/${img?.id}`} className={Styles.card}>
                    <Image
                        src={img?.url}
                        alt='Profile'
                        fill={true}
                        priority={true}
                        sizes='100vw'
                    ></Image>

                    <div className={Styles.image_overlay}>
                        <div className={Styles.image_titel}>Photo {img?.id}</div>
                        <p className={Styles.image_description}>{img?.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}