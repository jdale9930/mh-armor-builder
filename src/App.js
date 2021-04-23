
import './App.css';
import ArmorMaker from "./components/armor-maker/armorMaker"
import DecorationMaker from "./components/decorationMaker/decorationMaker"
import SkillMaker from "./components/skillMaker/skillMaker"
import ArmorSetBuilder from "./components/armorSetBuilder/armorSetBuilder"
import Login from "./components/login/login"
import Signup from "./components/login/signup"
import MyTalismans from "./components/talismans/myTalismans"
import MyArmorSets from "./components/myArmorSets/myArmorSets"
import ProtectedRoutes from "./components/resources/ProtectedRoute"
import{Switch, Route, BrowserRouter, Redirect, NavLink, useHistory} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./Redux/store"
import {connect} from "react-redux";
import { propTypes } from 'react-bootstrap/esm/Image';


function App(props) {
  return (
    <Provider store = {store}>
    <div>
    <BrowserRouter>
    <main>
    {props.currentUser &&
    <nav>
      <NavLink className = "link" to = "/login">Login</NavLink>
      {/* <NavLink className = "link" to = "/armorMaker">Armor Maker</NavLink> */}
      {/* <NavLink className = "link" to = "/decorationMaker">Decoration Maker</NavLink> */}
      {/* <NavLink className = "link" to = "/skillMaker">Skill Maker</NavLink> */}
      <NavLink className = "link" to = "/armorSetBuilder">Armor Set Maker</NavLink>
      <NavLink className = "link" to = "/myTalismans">My Talismans</NavLink>
      <NavLink className = "link" to = "/myArmorSets">My Armor Sets</NavLink>


    </nav>
    }
      <Switch>
        <ProtectedRoutes
        authRequired = {false} 
        path = "/login" 
        component = {Login}
        />
        <ProtectedRoutes 
        authRequired = {false}
        path = "/signup" 
        component = {Signup}
        />
        <ProtectedRoutes 
        authRequired = {true}
        path = "/armorMaker" 
        component = {ArmorMaker}
        />
        <ProtectedRoutes
        authRequired = {true}
        path = "/decorationMaker" 
        component = {DecorationMaker}
        />
        <ProtectedRoutes
        authRequired = {true}
         path = "/skillMaker" 
         component = {SkillMaker}
         />

        <ProtectedRoutes 
        authRequired = {true}
        path = "/myArmorSets" 
        component = {MyArmorSets}
        />

        <ProtectedRoutes 
        authRequired = {true}
        path = "/armorSetBuilder" 
        component = {ArmorSetBuilder}
        />
        <ProtectedRoutes 
        authRequired = {true}
        path = "/myTalismans" 
        component = {MyTalismans}
        />
        


      </Switch>
      <Route path = "*">
        <Redirect to ="/login"/>
      </Route>
        {/* <ArmorMaker></ArmorMaker> */}
        </main>
    </BrowserRouter>
    </div>
    </Provider>
  );
}

function mapStateToProps(state){
  return{
    currentUser: state.user.username
  }
}

const mapDispatchToProps ={
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
