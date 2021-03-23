import React, { useState, useEffect } from 'react'
import '../styles/ProfileScreen.css'
import Nav from '../components/Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import PlansScreen from './PlansScreen'
import db from '../firebase'


function ProfileScreen() {

    const user = useSelector(selectUser);
    const [subscription, setSubscription] = useState(null)

    useEffect(() => {
        db.collection('customers')
            .doc(user.uid)
            .collection('subscriptions')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(async subscription => {
                    setSubscription({
                        role: subscription.data().role,
                        current_period_end: subscription.data().current_period_end.seconds,
                        current_period_start: subscription.data().current_period_start.seconds,
                    })
                })
            })
    }, [user.uid])


    return (
        <div className='profileScreen'>
            <Nav subscription={subscription} />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="http://blogs.studentlife.utoronto.ca/lifeatuoft/files/2015/02/FullSizeRender.jpg" alt="Profile" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans {subscription?.role}</h3>
                            <PlansScreen />
                            <button onClick={() => auth.signOut()} className='profileScreen__signOut' >Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
