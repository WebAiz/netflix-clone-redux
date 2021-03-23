import React, { useState } from 'react'
import '../styles/LoginScreen.css'
import SignupScreen from './SignupScreen'

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
                <img
                    className='loginScreen__logo'
                    src="https://img.pngio.com/netflix-logo-png-transparent-svg-vector-freebie-supply-netflix-logo-transparent-background-800_600.png" alt="" />

                <button onClick={() => setSignIn(true)} className='loginScreen__button'>
                    Sign In
                </button>
                <div className="loginScreen__gradient" />
                <div className="loginScreen__body">
                    {signIn ? (
                        <SignupScreen />
                    ) : (
                        <>
                            <h1>Unlimited films, TV programs and more.</h1>
                            <h2>Watch anywhere. Cancek at any time</h2>
                            <h3>Ready to watch? Enter your enail to craete or restart your membership</h3>
                            <div className="loginScreen__input">
                                <form action="">
                                    <input type='email' placeholder='Email Address' />
                                    <button
                                        onClick={() => setSignIn(true)}
                                        className='loginScreen__getStarted'>
                                        GET STARTED
                                </button>
                                </form>
                            </div>
                        </>
                    )}

                </div>

            </div>

        </div >
    )
}

export default LoginScreen

