import Image from 'next/image'
import Styles from './users.module.css'
import GetUser from '@/lib/getUser'
import Profile from '@/public/Profile Picture.jpg'

// Components
import Menu from '@/app/components/menu'
import Gallery from '@/app/components/gallery'
import FollowButton from '@/app/components/followBTN'

export default async function UserPage({ params }) {
  const user = await GetUser(params.id)

  return (
    <main>
      <div className={Styles.profile_content}>
        <Image className={Styles.profile_img}
            src={Profile}
            alt='User Profile Picture'
            quality={100}
            priority={true}
            placeholder='blur'
        ></Image>

        <div className={Styles.text_box}>
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis asperiores aspernatur ad obcaecati? Magnam perspiciatis fuga dolore!
          </p>
        </div>

        <div className={Styles.btn_wrapper}>
          <FollowButton></FollowButton>
        </div>
      </div>
      
      <Menu website={user.website}>
        <Gallery></Gallery>
      </Menu>
    </main>
  )
}
