import {React, useState} from "react"
import ArmorSearcher from "../armorSearcher/armorSearcher"
import DecorationSearcher from "../decorationSearcher/decorationSearcher"
import SetDisplay from "../setDisplay/setDisplay"
import {connect} from "react-redux";
import {equipArmor, unequipArmor, clearArmor} from "../../Redux/Actions"
import "./armorSetBuilder.css"
//import {helmetImg, chestImg from "../resources/images/Helmet_Icon_White.png"

const ArmorSetBuilder = (props) => {
    const [searchSelect, setSearchSelect] = useState("Armor")


    return (
        <div>
            <h1>Armor Set Builder</h1>
            <div className = "setBuilderMain">
                <SetDisplay></SetDisplay>
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
        headState: state.armor.Head,
        torsoState: state.armor.Torso,
        armsState: state.armor.Arms,
        waistState: state.armor.Waist,
        legsState: state.armor.Legs,
        talismanState: state.armor.Talisman,
    }
}

const mapDispatchToProps ={
    equipArmor,
    unequipArmor,
    clearArmor
}
export default connect(mapStateToProps, mapDispatchToProps)(ArmorSetBuilder);