import {React, useState} from "react"
import ArmorSearcher from "../armorSearcher/armorSearcher"
import DecorationSearcher from "../decorationSearcher/decorationSearcher"
import {connect} from "react-redux";
import {equipArmor, unequipArmor, clearArmor} from "../../Redux/Actions"
import "./armorSetBuilder.css"
//import {helmetImg, chestImg from "../resources/images/Helmet_Icon_White.png"

const ArmorSetBuilder = () => {
    const [searchSelect, setSearchSelect] = useState("Armor")
    return (
        <div>
            <h1>Armor Set Builder</h1>
            <div className = "setBuilderMain">
                <div className = "armorDisplay">
                    <div>
                        <img className = "armorIcon" src="/images/Head.png" alt = "Helmet"/>
                        
                    </div>
                    <img className = "armorIcon" src="/images/Torso.png" alt = "Chest"/>
                    <img className = "armorIcon" src="/images/Arms.png" alt = "Arm"/>
                    <img className = "armorIcon" src="/images/Waist.png" alt = "Waist"/>
                    <img className = "armorIcon" src="/images/Legs.png" alt = "Leg"/>
                </div>
                <div>
                    <div>
                        <button onClick={()=>{setSearchSelect("Armor")}}>Armor</button>
                        <button onClick={()=>{setSearchSelect("Decoration")}}>Decoration</button>
                    </div>
                    {searchSelect === "Armor" &&
                    <ArmorSearcher></ArmorSearcher>}
                    {searchSelect === "Decoration" &&
                    <DecorationSearcher></DecorationSearcher>}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        armor: state.armor,
        headState: state.armor.head,
        torsoState: state.armor.torso,
        armsState: state.armor.arms,
        waistState: state.armor.waist,
        legsState: state.armor.legs,
        talismanState: state.armor.talisman,
    }
}

const mapDispatchToProps ={
    equipArmor,
    unequipArmor,
    clearArmor
}
export default connect(mapStateToProps, mapDispatchToProps)(ArmorSetBuilder);