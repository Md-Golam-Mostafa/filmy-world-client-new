import React from 'react';
import { Circle } from 'react-spinners-css';
import { Navigate , Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Circle color="#be97e8" size={200} />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => (user.displayName) ? children : <Navigate 
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Navigate>

            }
        >

        </Route>
    );
};

export default PrivateRoute;