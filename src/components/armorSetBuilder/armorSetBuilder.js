import {React, useState} from "react"
import ArmorSearcher from "../armorSearcher/armorSearcher"
import "./armorSetBuilder.css"
//import {helmetImg, chestImg from "../resources/images/Helmet_Icon_White.png"

const ArmorSetBuilder = () => {

    return (
        <div>
            <h1>Armor Set Builder</h1>
            <div className = "setBuilderMain">
            <div className = "armorDisplay">
                <img className = "armorIcon" src="/images/Head.png" alt = "Helmet"/>
                <img className = "armorIcon" src="/images/Torso.png" alt = "Chest"/>
                <img className = "armorIcon" src="/images/Arms.png" alt = "Arm"/>
                <img className = "armorIcon" src="/images/Waist.png" alt = "Waist"/>
                <img className = "armorIcon" src="/images/Legs.png" alt = "Leg"/>
            </div>
            <ArmorSearcher></ArmorSearcher>
            </div>
        </div>
    )
}

export default ArmorSetBuilder