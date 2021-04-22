import {React, useState} from "react"
import ArmorSearcher from "../armorSearcher/armorSearcher"
import DecorationSearcher from "../decorationSearcher/decorationSearcher"
import TalismanSearcher from "../talismans/talismanSearcher"
import SetDisplay from "../setDisplay/setDisplay"
import TotalStatsDisplay from "../totalStatsDisplay/totalStatsDisplay"
import SaveArmorSet from "./saveArmorSet"
import {connect} from "react-redux";
import {equipArmor, unequipArmor, clearArmor} from "../../Redux/Actions"
import "./armorSetBuilder.css"
//import {helmetImg, chestImg from "../resources/images/Helmet_Icon_White.png"

const ArmorSetBuilder = (props) => {
    const [searchSelect, setSearchSelect] = useState("Armor")

    async function save(){

    }
    return (
        <div>
            <h1>Armor Set Builder</h1>
            <h1>{props.currentUser}</h1>
            <div className = "setBuilderMain">
                <SetDisplay></SetDisplay>
                
                <div style = {{marginLeft: "auto", width: "500px"}}>
                    <div>
                        <button onClick={()=>{setSearchSelect("Armor")}}>Armor</button>
                        <button onClick={()=>{setSearchSelect("Decoration")}}>Decoration</button>
                        <button onClick={()=>{setSearchSelect("Talisman")}}>My Talismans</button>
                        <button onClick={()=>{setSearchSelect("TotalStatsDisplay")}}>Stats</button>
                        <button onClick={()=>{setSearchSelect("Save")}}>Save Armor Set</button>

                    </div>
                    {searchSelect === "Armor" &&
                    <ArmorSearcher></ArmorSearcher>}
                    {searchSelect === "Decoration" &&
                    <DecorationSearcher></DecorationSearcher>}
                    {searchSelect === "TotalStatsDisplay" &&
                    <TotalStatsDisplay></TotalStatsDisplay>}
                    {searchSelect === "Talisman" &&
                    <TalismanSearcher location = "BuilderSearch"/>}
                    {searchSelect === "Save" &&
                    <SaveArmorSet/>}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        armor: state.armor,
        headState: state.armor.Head,
        torsoState: state.armor.Torso,
        armsState: state.armor.Arms,
        waistState: state.armor.Waist,
        legsState: state.armor.Legs,
        talismanState: state.armor.Talisman,
        currentUser: state.user.username,
        user: state.user
    }
}

const mapDispatchToProps ={
    equipArmor,
    unequipArmor,
    clearArmor
}
export default connect(mapStateToProps, mapDispatchToProps)(ArmorSetBuilder);