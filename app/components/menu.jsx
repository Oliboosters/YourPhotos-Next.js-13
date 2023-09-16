'use client'

import Styles from './components.module.css'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSnapchat } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

// Components
import Albums from './albums'
import Posts from './posts'


export default function Menu({ children, website }) {
    let [link, setLink] = useState('/featured')

    const changeLink = (newLink) => {
        setLink(link = newLink)
    }
      
    const navItems = [
        {
            Id: 1,
            Name: "Featured",
            Link: "/featured"
        },
        {
            Id: 2,
            Name: "Albums",
            Link: "/albums"
        },
        {
            Id: 3,
            Name: "Posts",
            Link: "/posts"
        }
    ]
   
    function DisplayContent({ link }) {
        if(link === "/featured")
        {
          return <>{children}</>
        }
        
        if(link === "/albums")
        {
          return <Albums></Albums>
        }
      
        if(link === "/posts")
        {
          return <Posts></Posts>
        }
    }

    return ( 
        <>
            <nav className={Styles.menu_wrapper}>
                <ul className={Styles.left_side}>
                    {navItems.map((item , index) => (
                        <li key={index} className={Styles.menu_link_wrapper}>
                            <a href='#' onClick={() => { changeLink(item.Link) }}>{item.Name}</a>
                        </li>
                    ))}
                </ul>
                <ul className={Styles.right_side}>
                    <li>
                        <a href='#' className={Styles.media_icon}><FontAwesomeIcon icon={faFacebook}/></a>
                    </li>
                    <li>
                        <a href='#' className={Styles.media_icon}><FontAwesomeIcon icon={faInstagram}/></a>
                    </li>
                    <li>
                        <a href='#' className={Styles.media_icon}><FontAwesomeIcon icon={faSnapchat}/></a>
                    </li>
                    <li>
                        <a href={website} className={Styles.media_icon}><FontAwesomeIcon icon={faGlobe}/></a>
                    </li>    
                </ul>
            </nav>
            <DisplayContent link={link}></DisplayContent>
        </>
    )
}