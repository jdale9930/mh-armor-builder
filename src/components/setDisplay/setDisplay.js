import {React, useEffect, useState} from "react"
import {connect} from "react-redux";
import {equipArmor, unequipArmor, clearArmor} from "../../Redux/Actions"
import ArmorDisplay from "../armorDisplay/armorDisplay"
import DecorationDisplay from "../decorationDisplay/decorationDisplay"
import TalismanDisplay from "../talismans/talismanDisplay"
import TotalStatsDisplay from "../totalStatsDisplay/totalStatsDisplay"
import Collapse from 'react-bootstrap/Collapse'
import Card from "react-bootstrap/Card"
import "../decorationDisplay/decorationDisplay.css"

import axios from "axios"
import "./setDisplay.css"

const SetDisplay = (props) => {
    const [HeadDecoArray, setHeadDecoArray] = useState([])
    const [TorsoDecoArray, setTorsoDecoArray] = useState([])
    const [ArmsDecoArray, setArmsDecoArray] = useState([])
    const [WaistDecoArray, setWaistDecoArray] = useState([])
    const [LegsDecoArray, setLegsDecoArray] = useState([])
    const [open, setOpen] = useState(false);
    
    return (
        <div>
            <div className = "armorDisplay">
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Head.png" alt = "Head"/>
                    <div className = "armorPieceDisplay">
                        <ArmorDisplay
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

                        <div className = "row">
                            <DecorationDisplay
                            location = "setDisplay"
                            none = {false}
                            name = {props.HeadDecos.slot1.Decoration}
                            skill1 = {props.HeadDecos.slot1.Skill.Name}
                            skill1Value = {props.HeadDecos.slot1.Skill.Value}
                            piece = "Head"
                            slot = "1"
                            />
                            <DecorationDisplay
                            location = "setDisplay"
                            none = {false}
                            name = {props.HeadDecos.slot2.Decoration}
                            skill1 = {props.HeadDecos.slot2.Skill.Name}
                            skill1Value = {props.HeadDecos.slot2.Skill.Value}
                            piece = "Head"
                            slot = "2"
                            />

                           <DecorationDisplay
                            location = "setDisplay"
                            none = {false}
                            name = {props.HeadDecos.slot3.Decoration}
                            skill1 = {props.HeadDecos.slot3.Skill.Name}
                            skill1Value = {props.HeadDecos.slot3.Skill.Value}
                            piece = "Head"
                            slot = "3"
                            />
                        </div>
                    </div>
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Torso.png" alt = "Torso"/>
                    <div className = "armorPieceDisplay">
                        <ArmorDisplay
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
                
                        <div className = "row">
                            <DecorationDisplay
                            location = "setDisplay"
                            none = {false}
                            name = {props.TorsoDecos.slot1.Decoration}
                            skill1 = {props.TorsoDecos.slot1.Skill.Name}
                            skill1Value = {props.TorsoDecos.slot1.Skill.Value}
                            piece = "Torso"
                            slot = "1"

                            />
                            <DecorationDisplay
                            location = "setDisplay"
                            none = {false}
                            name = {props.TorsoDecos.slot2.Decoration}
                            skill1 = {props.TorsoDecos.slot2.Skill.Name}
                            skill1Value = {props.TorsoDecos.slot2.Skill.Value}
                            piece = "Torso"
                            slot = "2"
                            />

                            <DecorationDisplay
                            location = "setDisplay"
                            none = {false}
                            name = {props.TorsoDecos.slot3.Decoration}
                            skill1 = {props.TorsoDecos.slot3.Skill.Name}
                            skill1Value = {props.TorsoDecos.slot3.Skill.Value}
                            piece = "Torso"
                            slot = "3"

                            />
                        </div>
                    </div>
                </div>

                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Arms.png" alt = "Arms"/>
                    <div className = "armorPieceDisplay">
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
                <div className = "row">
                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.ArmsDecos.slot1.Decoration}
                    skill1 = {props.ArmsDecos.slot1.Skill.Name}
                    skill1Value = {props.ArmsDecos.slot1.Skill.Value}
                    piece = "Arms"
                    slot = "1"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.ArmsDecos.slot2.Decoration}
                    skill1 = {props.ArmsDecos.slot2.Skill.Name}
                    skill1Value = {props.ArmsDecos.slot2.Skill.Value}
                    piece = "Arms"
                    slot = "2"
                    />

                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.ArmsDecos.slot3.Decoration}
                    skill1 = {props.ArmsDecos.slot3.Skill.Name}
                    skill1Value = {props.ArmsDecos.slot3.Skill.Value}
                    piece = "Arms"
                    slot = "3"
                    />
                </div>
                </div>
                </div>

                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Waist.png" alt = "Waist"/>
                    <div className = "armorPieceDisplay">
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
                <div className = "row">
                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.WaistDecos.slot1.Decoration}
                    skill1 = {props.WaistDecos.slot1.Skill.Name}
                    skill1Value = {props.WaistDecos.slot1.Skill.Value}
                    piece = "Waist"
                    slot = "1"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.WaistDecos.slot2.Decoration}
                    skill1 = {props.WaistDecos.slot2.Skill.Name}
                    skill1Value = {props.WaistDecos.slot2.Skill.Value}
                    piece = "Waist"
                    slot = "2"
                    />

                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.WaistDecos.slot3.Decoration}
                    skill1 = {props.WaistDecos.slot3.Skill.Name}
                    skill1Value = {props.WaistDecos.slot3.Skill.Value}
                    piece = "Waist"
                    slot = "3"
                    />
                </div>
                </div>
                </div>

                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Legs.png" alt = "Legs"/>
                    <div className = "armorPieceDisplay">
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
                <div className = "row">
                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.LegsDecos.slot1.Decoration}
                    skill1 = {props.LegsDecos.slot1.Skill.Name}
                    skill1Value = {props.LegsDecos.slot1.Skill.Value}
                    piece = "Legs"
                    slot = "1"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.LegsDecos.slot2.Decoration}
                    skill1 = {props.LegsDecos.slot2.Skill.Name}
                    skill1Value = {props.LegsDecos.slot2.Skill.Value}
                    piece = "Legs"
                    slot = "2"
                    />

                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.LegsDecos.slot3.Decoration}
                    skill1 = {props.LegsDecos.slot3.Skill.Name}
                    skill1Value = {props.LegsDecos.slot3.Skill.Value}
                    piece = "Legs"
                    slot = "3"
                    />
                </div>
                </div>
                </div>

                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Talisman_Icon_White.png" alt = "Legs"/>
                    <div className = "armorPieceDisplay">
                <TalismanDisplay
                // key = {headState.armor_id}
                none = {false}
                location = "Builder"
                name = {props.talismanState.Name}
                piece = {props.talismanState.Piece}
                rarity = {props.talismanState.Rarity}
                slot1 = {props.talismanState.Slots.slot1.value}
                slot2 = {props.talismanState.Slots.slot2.value}
                slot3 = {props.talismanState.Slots.slot3.value}
                skill1 = {props.talismanState.Skills.skill1.Skill}
                skill1Value = {props.talismanState.Skills.skill1.Value}
                skill2 = {props.talismanState.Skills.skill2.Skill}
                skill2Value = {props.talismanState.Skills.skill2.Value}
                />
                <div className = "row">
                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.TalismanDecos.slot1.Decoration}
                    skill1 = {props.TalismanDecos.slot1.Skill.Name}
                    skill1Value = {props.TalismanDecos.slot1.Skill.Value}
                    piece = "Talisman"
                    slot = "1"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.TalismanDecos.slot2.Decoration}
                    skill1 = {props.TalismanDecos.slot2.Skill.Name}
                    skill1Value = {props.TalismanDecos.slot2.Skill.Value}
                    piece = "Talisman"
                    slot = "2"
                    />

                    <DecorationDisplay
                    location = "setDisplay"
                    none = {false}
                    name = {props.TalismanDecos.slot3.Decoration}
                    skill1 = {props.TalismanDecos.slot3.Skill.Name}
                    skill1Value = {props.TalismanDecos.slot3.Skill.Value}
                    piece = "Talisman"
                    slot = "3"
                    />
                </div>
                </div>
                </div>
            </div>
            <TotalStatsDisplay></TotalStatsDisplay>
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
        TalismanDecos: state.deco.TalismanDecos
    }
}

const mapDispatchToProps ={
    equipArmor,
    unequipArmor,
    clearArmor
}
export default connect(mapStateToProps, mapDispatchToProps)(SetDisplay);