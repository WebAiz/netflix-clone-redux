import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import "../styles/Nav.css"


function Nav({ subscription }) {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    // hides navbar when page is scrolled down
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    //code will run only when componnet mounts, when we scroll we trigger transitionNavBar
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    onClick={() => { subscription ? history.push('/') : history.push('/profile') }}
                    className='nav__logo' src="https://img.pngio.com/netflix-logo-png-transparent-svg-vector-freebie-supply-netflix-logo-transparent-background-800_600.png" alt="" />

                <img
                    onClick={() => history.push('/profile')}
                    className="nav__avatar" src="http://blogs.studentlife.utoronto.ca/lifeatuoft/files/2015/02/FullSizeRender.jpg" alt="" />
            </div>

        </div>
    )
}

export default Nav
