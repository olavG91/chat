import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Login = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {

        firebase.auth().onAuthStateChanged(setUser)
        // console.log(user);

    }, []);

    const continueToChat = () => {

        props.loggedIn(user);

    }

    useEffect(() => {

        console.log("Nu kör vi useEffect");

        props.loggedIn(user);

    }, [user, props])

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.error(error);
            });
    };

    const handleSignup = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log("Successful signup!");
                result.user.updateProfile({
                    displayName: name
                })
                    .then((data) => {
                        console.log("Divider");
                        console.log(result.user);
                        setUser(result.user);
                        continueToChat();
                    });

            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleLogout = () => {
        firebase.auth().signOut();
    }

    return (
        <div>
            {user == null ? (

                <div>
                    <form onSubmit={handleSignup}>
                        <h2>Sign up</h2>
                        <input type="text" name="name" placeholder="Displayname" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <button type="submit">Sign up</button>
                    </form>


                    <form onSubmit={handleLogin}>
                        <h2>Sign in</h2>
                        <input type="email" name="email" placeholder="Email" />
                        <input type="password" name="password" placeholder="Password" />
                        <button type="submit">Sign in</button>
                    </form>

                </div>
            ) : (<button onClick={handleLogout}>Logga ut</button>)}
        </div>
    )
}

export default Login;