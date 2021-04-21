import {react, useEffect, useState} from "react"
import {connect} from "react-redux";
import TalismanMaker from "./talismanMaker"
import TalismanDisplay from "./talismanDisplay"
import TalismanSearcher from "./talismanSearcher"
import skills from "../resources/skills"
import axios from "axios"
import "./talisman.css"

const MyTalismans = (props) =>{
    const [view, setView] = useState("Collection")

    return(
        <div className = "myTalismansDisplay">
            <h1>My Talismans</h1>
            View your collection of talismans, as well as create new ones!
            {view === "Collection" &&<button className = "viewButton"
                onClick={()=>{setView("Maker")}}>Talisman Maker</button>}
            {view === "Maker" &&<button className = "viewButton"
                onClick={()=>{setView("Collection")}}>Return to Collection</button>}
            <div>
            {view === "Collection" && <TalismanSearcher/>}
            {view === "Maker" && <TalismanMaker/>}
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        currentUser: state.user
    }
}

const mapDispatchToProps ={
    
}
export default connect(mapStateToProps, mapDispatchToProps)(MyTalismans);