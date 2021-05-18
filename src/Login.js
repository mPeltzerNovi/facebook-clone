import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core"; //deze moest erbij geimporteerd worden
import { auth, provider } from "./firebase";
import {useStateValue} from "./StateProvider";
import { actionTypes } from "./reducer";



//Login component maken:

function Login() {
    //Hook: -->Pulls the information from the datalayer
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in...
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className="login_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/8/8c/Facebook_Home_logo_old.svg"
                    alt=""
                />
                <img
                    src="https://feedonomics.com/wp-content/uploads/2018/05/facebook-logo-full-transparent.png"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}
            >
                Sign in
            </Button>

        </div>
    )
}

export default Login;
