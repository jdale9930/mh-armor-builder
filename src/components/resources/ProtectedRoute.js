import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";


const ProtectedRoutes = (props) => {
  const redirect = props.authRequired ? "/login" : "/home";

  if ((props.authRequired && !props.currentUser) || (!props.authRequired && props.currentUser)) {
    return <Redirect to={redirect} />;
  }
  return <Route exact path={props.path} component={props.component} />;
};

function mapStateToProps(state){
    return{
        currentUser: state.user.username
    }
}

const mapDispatchToProps ={
}
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes);