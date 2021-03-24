
import './App.css';
import ArmorMaker from "./components/armor-maker/armorMaker"
import DecorationMaker from "./components/decorationMaker/decorationMaker"
import ArmorSetBuilder from "./components/armorSetBuilder/armorSetBuilder"
import{Switch, Route, BrowserRouter, Redirect, NavLink, useHistory} from "react-router-dom"

function App() {
  return (
    <div>
    <BrowserRouter>
    <main>
    <nav>
      <NavLink className = "link" to = "/armorMaker">Armor Maker</NavLink>
      <NavLink className = "link" to = "/decorationMaker">Decoration Maker</NavLink>
      <NavLink className = "link" to = "/armorSetBuilder">Armor Set Maker</NavLink>
    </nav>
      <Switch>
        <Route path = "/armorMaker" component = {ArmorMaker}></Route>
        <Route path = "/decorationMaker" component = {DecorationMaker}></Route>
        <Route path = "/armorSetBuilder" component = {ArmorSetBuilder}></Route>
      </Switch>
        {/* <ArmorMaker></ArmorMaker> */}
        </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
