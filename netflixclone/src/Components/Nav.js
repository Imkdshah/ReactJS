import React, { useState, useEffect } from 'react'
import st from  './Nav.module.css'




function Nav() {

    const [show,handleShow] = useState(false)

    useEffect(()=>{

        window.addEventListener('scroll',()=>{
            if (window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    },[])


    return (
        <nav>
        <div className={`${st.nav} ${show && `${st.nav_black}` }`}>
            <img 
            className={st.navLogo}
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' 
            alt="netflix"
            ></img>


            
        </div>
        </nav>
    )
}

export default Nav
