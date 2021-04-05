import {React, useEffect, useState} from "react"
import {connect} from "react-redux";
import {equipArmor, unequipArmor, clearArmor} from "../../Redux/Actions"
import ArmorDisplay from "../armorDisplay/armorDisplay"
import DecorationDisplay from "../decorationDisplay/decorationDisplay"
import TotalStatsDisplay from "../totalStatsDisplay/totalStatsDisplay"
import axios from "axios"
import "./setDisplay.css"

const SetDisplay = (props) => {
    const [HeadDecoArray, setHeadDecoArray] = useState([])
    const [TorsoDecoArray, setTorsoDecoArray] = useState([])
    const [ArmsDecoArray, setArmsDecoArray] = useState([])
    const [WaistDecoArray, setWaistDecoArray] = useState([])
    const [LegsDecoArray, setLegsDecoArray] = useState([])

    
    return (
        <div>
            <div className = "armorDisplay">
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Head.png" alt = "Head"/>
                <ArmorDisplay
                // key = {headState.armor_id}
                none = {false}
                name = {props.headState.Name}
                piece = {props.headState.Piece}
                rarity = {props.headState.Rarity}
                slot1 = {props.headState.Slots.slot1.Value}
                slot2 = {props.headState.Slots.slot2.Value}
                slot3 = {props.headState.Slots.slot3.Value}
                skill1 = {props.headState.Skills.skill1.Skill}
                skill1Value = {props.headState.Skills.skill1.Value}
                skill2 = {props.headState.Skills.skill2.Skill}
                skill2Value = {props.headState.Skills.skill2.Value}
                skill3 = {props.headState.Skills.skill3.Skill}
                skill3Value = {props.headState.Skills.skill3.Value}
                skill4 = {props.headState.Skills.skill4.Skill}
                skill4Value = {props.headState.Skills.skill4.Value}
                defense = {props.headState.Stats.defense}
                fireRes = {props.headState.Stats.fireRes}
                waterRes = {props.headState.Stats.waterRes}
                thunderRes = {props.headState.Stats.thunderRes}
                iceRes = {props.headState.Stats.iceRes}
                dragonRes = {props.headState.Stats.dragonRes}
                />
                </div>
                {/* <div className = "row">
                {props.HeadDecos.length > 0 && HeadDecoArray.map((v) =>
                    <DecorationDisplay
                        name = {v.name}
                        skill1 = {v.skill1}
                        skill2 = {v.skill2}
                        slots = {v.slots}
                        location = "setDisplay"
                        type = "Head"
                         key = {v.name}
                    />
                )}
                </div> */}
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Torso.png" alt = "Torso"/>
                <ArmorDisplay
                // key = {headState.armor_id}
                none = {false}
                name = {props.torsoState.Name}
                piece = {props.torsoState.Piece}
                rarity = {props.torsoState.Rarity}
                slot1 = {props.torsoState.Slots.slot1.Value}
                slot2 = {props.torsoState.Slots.slot2.Value}
                slot3 = {props.torsoState.Slots.slot3.Value}
                skill1 = {props.torsoState.Skills.skill1.Skill}
                skill1Value = {props.torsoState.Skills.skill1.Value}
                skill2 = {props.torsoState.Skills.skill2.Skill}
                skill2Value = {props.torsoState.Skills.skill2.Value}
                skill3 = {props.torsoState.Skills.skill3.Skill}
                skill3Value = {props.torsoState.Skills.skill3.Value}
                skill4 = {props.torsoState.Skills.skill4.Skill}
                skill4Value = {props.torsoState.Skills.skill4.Value}
                defense = {props.torsoState.Stats.defense}
                fireRes = {props.torsoState.Stats.fireRes}
                waterRes = {props.torsoState.Stats.waterRes}
                thunderRes = {props.torsoState.Stats.thunderRes}
                iceRes = {props.torsoState.Stats.iceRes}
                dragonRes = {props.torsoState.Stats.dragonRes}
                />
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Arms.png" alt = "Arms"/>
                <ArmorDisplay
                // key = {headState.armor_id}
                none = {false}
                name = {props.armsState.Name}
                piece = {props.armsState.Piece}
                rarity = {props.armsState.Rarity}
                slot1 = {props.armsState.Slots.slot1.Value}
                slot2 = {props.armsState.Slots.slot2.Value}
                slot3 = {props.armsState.Slots.slot3.Value}
                skill1 = {props.armsState.Skills.skill1.Skill}
                skill1Value = {props.armsState.Skills.skill1.Value}
                skill2 = {props.armsState.Skills.skill2.Skill}
                skill2Value = {props.armsState.Skills.skill2.Value}
                skill3 = {props.armsState.Skills.skill3.Skill}
                skill3Value = {props.armsState.Skills.skill3.Value}
                skill4 = {props.armsState.Skills.skill4.Skill}
                skill4Value = {props.armsState.Skills.skill4.Value}
                defense = {props.armsState.Stats.defense}
                fireRes = {props.armsState.Stats.fireRes}
                waterRes = {props.armsState.Stats.waterRes}
                thunderRes = {props.armsState.Stats.thunderRes}
                iceRes = {props.armsState.Stats.iceRes}
                dragonRes = {props.armsState.Stats.dragonRes}
                />
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Waist.png" alt = "Waist"/>
                <ArmorDisplay
                // key = {headState.armor_id}
                none = {false}
                name = {props.waistState.Name}
                piece = {props.waistState.Piece}
                rarity = {props.waistState.Rarity}
                slot1 = {props.waistState.Slots.slot1.Value}
                slot2 = {props.waistState.Slots.slot2.Value}
                slot3 = {props.waistState.Slots.slot3.Value}
                skill1 = {props.waistState.Skills.skill1.Skill}
                skill1Value = {props.waistState.Skills.skill1.Value}
                skill2 = {props.waistState.Skills.skill2.Skill}
                skill2Value = {props.waistState.Skills.skill2.Value}
                skill3 = {props.waistState.Skills.skill3.Skill}
                skill3Value = {props.waistState.Skills.skill3.Value}
                skill4 = {props.waistState.Skills.skill4.Skill}
                skill4Value = {props.waistState.Skills.skill4.Value}
                defense = {props.waistState.Stats.defense}
                fireRes = {props.waistState.Stats.fireRes}
                waterRes = {props.waistState.Stats.waterRes}
                thunderRes = {props.waistState.Stats.thunderRes}
                iceRes = {props.waistState.Stats.iceRes}
                dragonRes = {props.waistState.Stats.dragonRes}
                />
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Legs.png" alt = "Legs"/>
                <ArmorDisplay
                // key = {headState.armor_id}
                none = {false}
                name = {props.legsState.Name}
                piece = {props.legsState.Piece}
                rarity = {props.legsState.Rarity}
                slot1 = {props.legsState.Slots.slot1.Value}
                slot2 = {props.legsState.Slots.slot2.Value}
                slot3 = {props.legsState.Slots.slot3.Value}
                skill1 = {props.legsState.Skills.skill1.Skill}
                skill1Value = {props.legsState.Skills.skill1.Value}
                skill2 = {props.legsState.Skills.skill2.Skill}
                skill2Value = {props.legsState.Skills.skill2.Value}
                skill3 = {props.legsState.Skills.skill3.Skill}
                skill3Value = {props.legsState.Skills.skill3.Value}
                skill4 = {props.legsState.Skills.skill4.Skill}
                skill4Value = {props.legsState.Skills.skill4.Value}
                defense = {props.legsState.Stats.defense}
                fireRes = {props.legsState.Stats.fireRes}
                waterRes = {props.legsState.Stats.waterRes}
                thunderRes = {props.legsState.Stats.thunderRes}
                iceRes = {props.legsState.Stats.iceRes}
                dragonRes = {props.legsState.Stats.dragonRes}
                />
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
        HeadDecos: state.deco.HeadDecos,
        TorsoDecos: state.deco.TorsoDecos,
        ArmsDecos: state.deco.ArmsDecos,
        WaistDecos: state.deco.WaistDecos,
        LegsDecos: state.deco.LegsDecos,
    }
}

const mapDispatchToProps ={
    equipArmor,
    unequipArmor,
    clearArmor
}
export default connect(mapStateToProps, mapDispatchToProps)(SetDisplay);