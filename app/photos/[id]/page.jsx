import Link from 'next/link'
import Image from 'next/image'
import Styles from './photos.module.css'
import GetImage from '@/lib/getImage'

export default async function PhotoDetails({ params }){
    const image = await GetImage(params.id)
    
    return (
        <div className={Styles.content}>
            {image.map((img) => (
                <>
                    <h1>Photo Nr. {img?.id}</h1>

                    <Image
                        src={img?.url}
                        alt={img?.title}
                        width={200}
                        height={200}
                        placeholder='blur'
                        blurDataURL={img?.thumbnailUrl}
                    ></Image>

                    <div className={Styles.info_box}>
                        <h3>Titel:<p>{img?.title}</p></h3>
                        <h3>Url:<p>{img?.url}</p></h3>
                        <h3>Thumbnail Url:<p>{img?.thumbnailUrl}</p></h3>
                    </div>
                </>
            ))}

            <Link href={"/users/1"}>Return</Link>
        </div>
    )
}