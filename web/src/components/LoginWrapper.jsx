import React from "react";
import { useHistory } from "react-router-dom";


const LoginWrapper = ({isLoggedIn, children}) => {

    const history = useHistory();

    return (
        <>
            {isLoggedIn ? (
                children
            ) : (
                history.push("/login")
            )}
        </>
    )
}

export default LoginWrapper