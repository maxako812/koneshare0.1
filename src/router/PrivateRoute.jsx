import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import Login from "../components/pages/Login";

// const PrivateRoute = ({ component: RouteComponent, ...options }) => {
//   const { userInfo } = useContext(UserContext);
//   const Component = userInfo ? RouteComponent : Login;

//   return <Route {...options} component={Component} />;
// };


export const PrivateRoute = (props) => {
  const { children, ...options } = props;
  const { userInfo } = useContext(UserContext);

  return (

    <Route
      {...options}
      render={({ location }) =>
        userInfo ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />

  )
}