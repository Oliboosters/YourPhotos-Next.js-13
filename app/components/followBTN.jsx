'use client'

import Styles from './components.module.css'
import { useState } from 'react'

export default function Posts() {
    let [btnState, setState] = useState('+ Follow')
    let following = false

    const changeState = () => {
        if(btnState === '+ Follow')
        {
            setState(btnState = 'UnFollow')
            following = !following
        }
        else setState(btnState = '+ Follow')
        
        console.log('Now Following: ' + following)
    }

    return (
        <>
            <button className={Styles.btn_green} onClick={changeState}>{btnState}</button>
        </>
    )
}