import React from 'react';
import { Redirect,Route } from 'react-router';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (

        <Route
            {...rest}
            render={({location}) =>
            loggedInUser.email ? (
                children
            ):(
                <Redirect to = {{pathname:"/login",
                state: {from:location}
            }}>

            </Redirect>

            )
            }
            ></Route>
    );
};

export default PrivateRoute;