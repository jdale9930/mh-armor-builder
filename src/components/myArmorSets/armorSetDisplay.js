import {react, useState, useEffect} from "react"
import {connect} from "react-redux";
import axios from "axios"
import "./myArmorSets.css"
import ArmorDisplay from "../armorDisplay/armorDisplay"
import DecorationDisplay from "../decorationDisplay/decorationDisplay"
import TalismanDisplay from "../talismans/talismanDisplay"
import {equipArmor, unequipArmor, clearArmor, clearDecosFromPiece, equipDeco} from "../../Redux/Actions"


const ArmorSetDisplay = (props) => {
    const [display, setDisplay] = useState("Info")
    const [collapsed, setCollapsed] = useState(false)
    const [head, setHead] = useState([])
    const [torso, setTorso] = useState([])
    const [arms, setArms] = useState([])
    const [waist, setWaist] = useState([])
    const [legs, setLegs] = useState([])
    const [talisman, setTalisman] = useState([])
    const [headSlot1, setHeadSlot1] = useState([])
    const [headSlot2, setHeadSlot2] = useState([])
    const [headSlot3, setHeadSlot3] = useState([])
    const [torsoSlot1, setTorsoSlot1] = useState([])
    const [torsoSlot2, setTorsoSlot2] = useState([])
    const [torsoSlot3, setTorsoSlot3] = useState([])
    const [armsSlot1, setArmsSlot1] = useState([])
    const [armsSlot2, setArmsSlot2] = useState([])
    const [armsSlot3, setArmsSlot3] = useState([])
    const [waistSlot1, setWaistSlot1] = useState([])
    const [waistSlot2, setWaistSlot2] = useState([])
    const [waistSlot3, setWaistSlot3] = useState([])
    const [legsSlot1, setLegsSlot1] = useState([])
    const [legsSlot2, setLegsSlot2] = useState([])
    const [legsSlot3, setLegsSlot3] = useState([])
    const [talismanSlot1, setTalismanSlot1] = useState([])
    const [talismanSlot2, setTalismanSlot2] = useState([])
    const [talismanSlot3, setTalismanSlot3] = useState([])
    const [skills, setSkills] = useState([
        {skill: props.skill1, value: props.skill1Value},
        {skill: props.skill2, value: props.skill2Value},
        {skill: props.skill3, value: props.skill3Value},
        {skill: props.skill4, value: props.skill4Value},
        {skill: props.skill5, value: props.skill5Value},
        {skill: props.skill6, value: props.skill6Value},
        {skill: props.skill7, value: props.skill7Value},
        {skill: props.skill8, value: props.skill8Value},
        {skill: props.skill9, value: props.skill9Value},
        {skill: props.skill10, value: props.skill10Value},
        {skill: props.skill11, value: props.skill11Value},
        {skill: props.skill12, value: props.skill12Value},
        {skill: props.skill13, value: props.skill13Value},
        {skill: props.skill14, value: props.skill14Value},
        {skill: props.skill15, value: props.skill15Value},
        {skill: props.skill16, value: props.skill16Value},
    ])
        const weaponNoSpace = props.weapon.replace(/\s+/g, '');
        skills.sort((a, b) =>(a.value < b.value) ? 1 :
        (a.value === b.value)? ((a.skill > b.skill) ? 1 : -1): -1)

        useEffect(()=>{getArmor()},[])
     async function getArmor(){   
        let results = await axios.get(`/armor/search?name=${props.head}&skill=&slots=%&piece=`)
        setHead(results.data.data)
        results = await axios.get(`/armor/search?name=${props.torso}&skill=&slots=%&piece=`)
        setTorso(results.data.data)
        results = await axios.get(`/armor/search?name=${props.arms}&skill=&slots=%&piece=`)
        setArms(results.data.data)
        results = await axios.get(`/armor/search?name=${props.waist}&skill=&slots=%&piece=`)
        setWaist(results.data.data)
        results = await axios.get(`/armor/search?name=${props.legs}&skill=&slots=%&piece=`)
        setLegs(results.data.data)
        results = await axios.get(`/talisman/search?id=${props.currentUser.id}&name=${props.talisman}&skill=&slots=$`,{user_id: props.currentUser.id})
        setTalisman(results.data.data)

        results = await axios.get(`/decoration/search?name=${props.headSlot1}&skill=`)
        setHeadSlot1(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.headSlot2}&skill=`)
        setHeadSlot2(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.headSlot3}&skill=`)
        setHeadSlot3(results.data.data)

        results = await axios.get(`/decoration/search?name=${props.torsoSlot1}&skill=`)
        setTorsoSlot1(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.torsoSlot2}&skill=`)
        setTorsoSlot2(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.torsoSlot3}&skill=`)
        setTorsoSlot3(results.data.data)

        results = await axios.get(`/decoration/search?name=${props.armsSlot1}&skill=`)
        setArmsSlot1(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.armsSlot2}&skill=`)
        setArmsSlot2(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.armsSlot3}&skill=`)
        setArmsSlot3(results.data.data)

        results = await axios.get(`/decoration/search?name=${props.waistSlot1}&skill=`)
        setWaistSlot1(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.waistSlot2}&skill=`)
        setWaistSlot2(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.waistSlot3}&skill=`)
        setWaistSlot3(results.data.data)

        results = await axios.get(`/decoration/search?name=${props.legsSlot1}&skill=`)
        setLegsSlot1(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.legsSlot2}&skill=`)
        setLegsSlot2(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.legsSlot3}&skill=`)
        setLegsSlot3(results.data.data)

        results = await axios.get(`/decoration/search?name=${props.talismanSlot1}&skill=`)
        setTalismanSlot1(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.talismanSlot2}&skill=`)
        setTalismanSlot2(results.data.data)
        results = await axios.get(`/decoration/search?name=${props.talismanSlot3}&skill=`)
        setTalismanSlot3(results.data.data)
        
     }    

    async function goToArmorSetMaker(){
        props.clearArmor()
        props.clearDecosFromPiece("Head")
        props.clearDecosFromPiece("Torso")
        props.clearDecosFromPiece("Arms")
        props.clearDecosFromPiece("Waist")
        props.clearDecosFromPiece("Legs")
        props.clearDecosFromPiece("Talisman")

        props.equipArmor(
            {
                Name: head[0].name,
                Piece: "Head",
                ArmorSet: head[0].armorSet,
                Rarity: head[0].rarity,
                Gender: head[0].gender,
                Slots: {
                    slot1: {Value: head[0].slot1, isFilled: false}, 
                    slot2: {Value: head[0].slot2, isFilled: false}, 
                    slot3: {Value: head[0].slot3, isFilled: false}
                },
                Skills: {
                    skill1: {Skill: head[0].skill1, Value: head[0].skill1Value},
                    skill2: {Skill: head[0].skill2, Value: head[0].skill2Value},
                    skill3: {Skill: head[0].skill3, Value: head[0].skill3Value},
                    skill4: {Skill: head[0].skill4, Value: head[0].skill4Value}},
                Stats: {
                    defense: head[0].defense,
                    fireRes: head[0].fireRes,
                    waterRes: head[0].waterRes,
                    thunderRes: head[0].thunderRes,
                    iceRes: head[0].iceRes,
                    dragonRes: head[0].dragonRes
                    },
                },
        "Head");
        headSlot1[0] && props.equipDeco({Decoration: headSlot1[0].name, Skill: {Name: headSlot1[0].skill1, Value: headSlot1[0].skill1Value}}, "Head", 1)
        headSlot2[0] && props.equipDeco({Decoration: headSlot2[0].name, Skill: {Name: headSlot2[0].skill1, Value: headSlot2[0].skill1Value}}, "Head", 2)
        headSlot3[0] && props.equipDeco({Decoration: headSlot3[0].name, Skill: {Name: headSlot3[0].skill1, Value: headSlot3[0].skill1Value}}, "Head", 3)
        
        props.equipArmor(
            {
                Name: torso[0].name,
                Piece: "Torso",
                ArmorSet: torso[0].armorSet,
                Rarity: torso[0].rarity,
                Gender: torso[0].gender,
                Slots: {
                    slot1: {Value: torso[0].slot1, isFilled: false}, 
                    slot2: {Value: torso[0].slot2, isFilled: false}, 
                    slot3: {Value: torso[0].slot3, isFilled: false}
                },
                Skills: {
                    skill1: {Skill: torso[0].skill1, Value: torso[0].skill1Value},
                    skill2: {Skill: torso[0].skill2, Value: torso[0].skill2Value},
                    skill3: {Skill: torso[0].skill3, Value: torso[0].skill3Value},
                    skill4: {Skill: torso[0].skill4, Value: torso[0].skill4Value}},
                Stats: {
                    defense: torso[0].defense,
                    fireRes: torso[0].fireRes,
                    waterRes: torso[0].waterRes,
                    thunderRes: torso[0].thunderRes,
                    iceRes: torso[0].iceRes,
                    dragonRes: torso[0].dragonRes
                    },
                },
        "Torso");
        torsoSlot1[0] && props.equipDeco({Decoration: torsoSlot1[0].name, Skill: {Name: torsoSlot1[0].skill1, Value: torsoSlot1[0].skill1Value}}, "Torso", 1)
        torsoSlot2[0] && props.equipDeco({Decoration: torsoSlot2[0].name, Skill: {Name: torsoSlot2[0].skill1, Value: torsoSlot2[0].skill1Value}}, "Torso", 2)
        torsoSlot3[0] && props.equipDeco({Decoration: torsoSlot3[0].name, Skill: {Name: torsoSlot3[0].skill1, Value: torsoSlot3[0].skill1Value}}, "Torso", 3)

        props.equipArmor(
            {
                Name: arms[0].name,
                Piece: "Arms",
                ArmorSet: arms[0].armorSet,
                Rarity: arms[0].rarity,
                Gender: arms[0].gender,
                Slots: {
                    slot1: {Value: arms[0].slot1, isFilled: false}, 
                    slot2: {Value: arms[0].slot2, isFilled: false}, 
                    slot3: {Value: arms[0].slot3, isFilled: false}
                },
                Skills: {
                    skill1: {Skill: arms[0].skill1, Value: arms[0].skill1Value},
                    skill2: {Skill: arms[0].skill2, Value: arms[0].skill2Value},
                    skill3: {Skill: arms[0].skill3, Value: arms[0].skill3Value},
                    skill4: {Skill: arms[0].skill4, Value: arms[0].skill4Value}},
                Stats: {
                    defense: arms[0].defense,
                    fireRes: arms[0].fireRes,
                    waterRes: arms[0].waterRes,
                    thunderRes: arms[0].thunderRes,
                    iceRes: arms[0].iceRes,
                    dragonRes: arms[0].dragonRes
                    },
                },
        "Arms");
        armsSlot1[0] && props.equipDeco({Decoration: armsSlot1[0].name, Skill: {Name: armsSlot1[0].skill1, Value: armsSlot1[0].skill1Value}}, "Arms", 1)
        armsSlot2[0] && props.equipDeco({Decoration: armsSlot2[0].name, Skill: {Name: armsSlot2[0].skill1, Value: armsSlot2[0].skill1Value}}, "Arms", 2)
        armsSlot3[0] && props.equipDeco({Decoration: armsSlot3[0].name, Skill: {Name: armsSlot3[0].skill1, Value: armsSlot3[0].skill1Value}}, "Arms", 3)

        props.equipArmor(
            {
                Name: waist[0].name,
                Piece: "Waist",
                ArmorSet: waist[0].armorSet,
                Rarity: waist[0].rarity,
                Gender: waist[0].gender,
                Slots: {
                    slot1: {Value: waist[0].slot1, isFilled: false}, 
                    slot2: {Value: waist[0].slot2, isFilled: false}, 
                    slot3: {Value: waist[0].slot3, isFilled: false}
                },
                Skills: {
                    skill1: {Skill: waist[0].skill1, Value: waist[0].skill1Value},
                    skill2: {Skill: waist[0].skill2, Value: waist[0].skill2Value},
                    skill3: {Skill: waist[0].skill3, Value: waist[0].skill3Value},
                    skill4: {Skill: waist[0].skill4, Value: waist[0].skill4Value}},
                Stats: {
                    defense: waist[0].defense,
                    fireRes: waist[0].fireRes,
                    waterRes: waist[0].waterRes,
                    thunderRes: waist[0].thunderRes,
                    iceRes: waist[0].iceRes,
                    dragonRes: waist[0].dragonRes
                    },
                },
        "Waist");
        waistSlot1[0] && props.equipDeco({Decoration: waistSlot1[0].name, Skill: {Name: waistSlot1[0].skill1, Value: waistSlot1[0].skill1Value}}, "Waist", 1)
        waistSlot2[0] && props.equipDeco({Decoration: waistSlot2[0].name, Skill: {Name: waistSlot2[0].skill1, Value: waistSlot2[0].skill1Value}}, "Waist", 2)
        waistSlot3[0] && props.equipDeco({Decoration: waistSlot3[0].name, Skill: {Name: waistSlot3[0].skill1, Value: waistSlot3[0].skill1Value}}, "Waist", 3)

        props.equipArmor(
            {
                Name: legs[0].name,
                Piece: "Legs",
                ArmorSet: legs[0].armorSet,
                Rarity: legs[0].rarity,
                Gender: legs[0].gender,
                Slots: {
                    slot1: {Value: legs[0].slot1, isFilled: false}, 
                    slot2: {Value: legs[0].slot2, isFilled: false}, 
                    slot3: {Value: legs[0].slot3, isFilled: false}
                },
                Skills: {
                    skill1: {Skill: legs[0].skill1, Value: legs[0].skill1Value},
                    skill2: {Skill: legs[0].skill2, Value: legs[0].skill2Value},
                    skill3: {Skill: legs[0].skill3, Value: legs[0].skill3Value},
                    skill4: {Skill: legs[0].skill4, Value: legs[0].skill4Value}},
                Stats: {
                    defense: legs[0].defense,
                    fireRes: legs[0].fireRes,
                    waterRes: legs[0].waterRes,
                    thunderRes: legs[0].thunderRes,
                    iceRes: legs[0].iceRes,
                    dragonRes: legs[0].dragonRes
                    },
                },
        "Legs");
        legsSlot1[0] && props.equipDeco({Decoration: legsSlot1[0].name, Skill: {Name: legsSlot1[0].skill1, Value: legsSlot1[0].skill1Value}}, "Legs", 1)
        legsSlot2[0] && props.equipDeco({Decoration: legsSlot2[0].name, Skill: {Name: legsSlot2[0].skill1, Value: legsSlot2[0].skill1Value}}, "Legs", 2)
        legsSlot3[0] && props.equipDeco({Decoration: legsSlot3[0].name, Skill: {Name: legsSlot3[0].skill1, Value: legsSlot3[0].skill1Value}}, "Legs", 3)
    
        props.equipArmor(
            {
                Name: talisman[0].name,
                Rarity: talisman[0].rarity,
                Piece: "Talisman",
                Slots: {
                    slot1: {value: talisman[0].slot1, isFilled: false}, 
                    slot2: {value: talisman[0].slot2, isFilled: false}, 
                    slot3: {value: talisman[0].slot3, isFilled: false}
                },
                Skills: {
                    skill1: {Skill: talisman[0].skill1, Value: talisman[0].skill1Value},
                    skill2: {Skill: talisman[0].skill2, Value: talisman[0].skill2Value},
                },
            }, "Talisman")
            talismanSlot1[0] && props.equipDeco({Decoration: talismanSlot1[0].name, Skill: {Name: talismanSlot1[0].skill1, Value: talismanSlot1[0].skill1Value}}, "Talisman", 1)
            talismanSlot2[0] && props.equipDeco({Decoration: talismanSlot2[0].name, Skill: {Name: talismanSlot2[0].skill1, Value: talismanSlot2[0].skill1Value}}, "Talisman", 2)
            talismanSlot3[0] && props.equipDeco({Decoration: talismanSlot3[0].name, Skill: {Name: talismanSlot3[0].skill1, Value: talismanSlot3[0].skill1Value}}, "Talisman", 3)

            props.history.push(`/armorSetBuilder`)
    }
    return(
    <>
        <div style = {{margin: "auto"}}>
            <div className = "armorsetNameDisplay">
                <img className = "displayIcon" src={"/images/" + weaponNoSpace + ".png"}alt = {`${props.piece}`}/>
                <div className = "armorsetName">{props.name}</div> 
                {collapsed === true ? <button className = "collapseButton" onClick = {()=>{setCollapsed(false)}}>Expand</button> :
                <button className = "collapseButton "onClick = {()=>{setCollapsed(true)}}>Collapse</button>}
            </div>
            <button style = {{width: "33%", marginLeft: "2px"}}onClick = {()=>{setDisplay("Info")}}>Info</button>
            <button style = {{width: "33%"}} onClick = {()=>{setDisplay("Armor"); getArmor()}}>Armor</button>
            <button style = {{width: "33%"}} onClick = {()=>{goToArmorSetMaker()}}>View in Armor Maker</button>
            {collapsed === false &&
            display === "Info" &&
            <div className = "armorsetDisplay">
                <div style = {{width: "200px"}}>
                    <b>Weapon: </b>
                    <div>{props.weapon}</div>
                    <b>Description:</b>
                    <div>{props.description}</div>
            
                <div style = {{display: "flex", marginTop: "8px"}}>
                    <div>
                    <b>Total Stats:</b>
                    <div style = {{border: "1px solid black", width: "190px"}}>
                        <div className = "skillRow">
                            <div className = "skillRow1">Defense:</div>
                            <div className = "skillRow2">{props.defense}</div>
                        </div>
                        <div className = "skillRow">
                            <div className = "skillRow1">Fire Res:</div>
                            <div className = "skillRow2">{props.fireRes}</div>
                        </div>
                        <div className = "skillRow">
                            <div className = "skillRow1">Water Res:</div>
                           <div className = "skillRow2">{props.waterRes}</div>
                        </div>
                        <div className = "skillRow">
                            <div className = "skillRow1">Thunder Res:</div>
                            <div className = "skillRow2">{props.thunderRes}</div>
                        </div>
                        <div className = "skillRow">
                            <div className = "skillRow1">Ice Res:</div>
                            <div className = "skillRow2">{props.iceRes}</div>
                        </div>
                        <div className = "skillRow">
                            <div className = "skillRow1">Dragon Res:</div>
                            <div className = "skillRow2">{props.dragonRes}</div>
                        </div>
                    </div>
                    </div>
                <div style = {{marginLeft: "5px"}}>
                    <b>Total Skills:</b>
                    <div style = {{width: "300px", display: "flex", flexFlow: "row wrap"}}>
                    {skills.map((v, idx)=>{
                        if(v.value > 0){return(<div className = "skillRowDisplay">
                        <div className = "skillName">{v.skill}</div><div className = "skillValue">{v.value}</div>
                        </div>)}})}
                    </div>
                </div>
                </div>
                </div>
            </div>
            }
            {collapsed === false && display === "Armor" &&
            <div>
                {head.length > 0 && 
                head.map((v)=>
                <ArmorDisplay
                key = {v.armor_id}
                none = {false}
                name = {v.name}
                piece = {v.piece}
                class = {v.class}
                slot1 = {v.slot1}
                slot2 = {v.slot2}
                slot3 = {v.slot3}
                skill1 = {v.skill1}
                skill1Value = {v.skill1Value}
                skill2 = {v.skill2}
                skill2Value = {v.skill2Value}
                skill3 = {v.skill3}
                skill3Value = {v.skill3Value}
                skill4 = {v.skill4}
                skill4Value = {v.skill4Value}
                defense = {v.defense}
                fireRes = {v.fireRes}
                waterRes = {v.waterRes}
                thunderRes = {v.thunderRes}
                iceRes = {v.iceRes}
                dragonRes = {v.dragonRes}
                rarity = {v.rarity}
                myArmorSet = {true}
                />)}
                <div className = "row">
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {headSlot1[0] ? headSlot1[0].name : "None"}
                    skill1 = {headSlot1[0] ? headSlot1[0].skill1 : "None"}
                    skill1Value = {headSlot1[0] ? headSlot1[0].skill1Value : 0}
                    piece = "Head"
                    slot = "1"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {headSlot2[0] ? headSlot2[0].name : "None"}
                    skill1 = {headSlot2[0] ? headSlot2[0].skill1 : "None"}
                    skill1Value = {headSlot2[0] ? headSlot2[0].skill1Value : 0}
                    piece = "Head"
                    slot = "2"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {headSlot3[0] ? headSlot3[0].name : "None"}
                    skill1 = {headSlot3[0] ? headSlot3[0].skill1 : "None"}
                    skill1Value = {headSlot3[0] ? headSlot3[0].skill1Value : 0}
                    piece = "Head"
                    slot = "3"
                    />
                </div>

                {torso.length > 0 && 
                torso.map((v)=>
                <ArmorDisplay
                key = {v.armor_id}
                none = {false}
                name = {v.name}
                piece = {v.piece}
                class = {v.class}
                slot1 = {v.slot1}
                slot2 = {v.slot2}
                slot3 = {v.slot3}
                skill1 = {v.skill1}
                skill1Value = {v.skill1Value}
                skill2 = {v.skill2}
                skill2Value = {v.skill2Value}
                skill3 = {v.skill3}
                skill3Value = {v.skill3Value}
                skill4 = {v.skill4}
                skill4Value = {v.skill4Value}
                defense = {v.defense}
                fireRes = {v.fireRes}
                waterRes = {v.waterRes}
                thunderRes = {v.thunderRes}
                iceRes = {v.iceRes}
                dragonRes = {v.dragonRes}
                rarity = {v.rarity}
                myArmorSet = {true}
                />)}
                <div className = "row">
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {torsoSlot1[0] ? torsoSlot1[0].name : "None"}
                    skill1 = {torsoSlot1[0] ? torsoSlot1[0].skill1 : "None"}
                    skill1Value = {torsoSlot1[0] ? torsoSlot1[0].skill1Value : 0}
                    piece = "Torso"
                    slot = "1"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {torsoSlot2[0] ? torsoSlot2[0].name : "None"}
                    skill1 = {torsoSlot2[0] ? torsoSlot2[0].skill1 : "None"}
                    skill1Value = {torsoSlot2[0] ? torsoSlot2[0].skill1Value : 0}
                    piece = "Torso"
                    slot = "2"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {torsoSlot3[0] ? torsoSlot3[0].name : "None"}
                    skill1 = {torsoSlot3[0] ? torsoSlot3[0].skill1 : "None"}
                    skill1Value = {torsoSlot3[0] ? torsoSlot3[0].skill1Value : 0}
                    piece = "Torso"
                    slot = "3"
                    />
                </div>
                {arms.length > 0 && 
                arms.map((v)=>
                <ArmorDisplay
                key = {v.armor_id}
                none = {false}
                name = {v.name}
                piece = {v.piece}
                class = {v.class}
                slot1 = {v.slot1}
                slot2 = {v.slot2}
                slot3 = {v.slot3}
                skill1 = {v.skill1}
                skill1Value = {v.skill1Value}
                skill2 = {v.skill2}
                skill2Value = {v.skill2Value}
                skill3 = {v.skill3}
                skill3Value = {v.skill3Value}
                skill4 = {v.skill4}
                skill4Value = {v.skill4Value}
                defense = {v.defense}
                fireRes = {v.fireRes}
                waterRes = {v.waterRes}
                thunderRes = {v.thunderRes}
                iceRes = {v.iceRes}
                dragonRes = {v.dragonRes}
                rarity = {v.rarity}
                myArmorSet = {true}
                />)}
                <div className = "row">
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {armsSlot1[0] ? armsSlot1[0].name : "None"}
                    skill1 = {armsSlot1[0] ? armsSlot1[0].skill1 : "None"}
                    skill1Value = {armsSlot1[0] ? armsSlot1[0].skill1Value : 0}
                    piece = "Arms"
                    slot = "1"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {armsSlot2[0] ? armsSlot2[0].name : "None"}
                    skill1 = {armsSlot2[0] ? armsSlot2[0].skill1 : "None"}
                    skill1Value = {armsSlot2[0] ? armsSlot2[0].skill1Value : 0}
                    piece = "Arms"
                    slot = "2"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {armsSlot3[0] ? armsSlot3[0].name : "None"}
                    skill1 = {armsSlot3[0] ? armsSlot3[0].skill1 : "None"}
                    skill1Value = {armsSlot3[0] ? armsSlot3[0].skill1Value : 0}
                    piece = "Arms"
                    slot = "3"
                    />
                </div>
                {waist.length > 0 && 
                waist.map((v)=>
                <ArmorDisplay
                key = {v.armor_id}
                none = {false}
                name = {v.name}
                piece = {v.piece}
                class = {v.class}
                slot1 = {v.slot1}
                slot2 = {v.slot2}
                slot3 = {v.slot3}
                skill1 = {v.skill1}
                skill1Value = {v.skill1Value}
                skill2 = {v.skill2}
                skill2Value = {v.skill2Value}
                skill3 = {v.skill3}
                skill3Value = {v.skill3Value}
                skill4 = {v.skill4}
                skill4Value = {v.skill4Value}
                defense = {v.defense}
                fireRes = {v.fireRes}
                waterRes = {v.waterRes}
                thunderRes = {v.thunderRes}
                iceRes = {v.iceRes}
                dragonRes = {v.dragonRes}
                rarity = {v.rarity}
                myArmorSet = {true}
                />)}
                <div className = "row">
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {waistSlot1[0] ? waistSlot1[0].name : "None"}
                    skill1 = {waistSlot1[0] ? waistSlot1[0].skill1 : "None"}
                    skill1Value = {waistSlot1[0] ? waistSlot1[0].skill1Value : 0}
                    piece = "Waist"
                    slot = "1"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {waistSlot2[0] ? waistSlot2[0].name : "None"}
                    skill1 = {waistSlot2[0] ? waistSlot2[0].skill1 : "None"}
                    skill1Value = {waistSlot2[0] ? waistSlot2[0].skill1Value : 0}
                    piece = "Waist"
                    slot = "2"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {waistSlot3[0] ? waistSlot3[0].name : "None"}
                    skill1 = {waistSlot3[0] ? waistSlot3[0].skill1 : "None"}
                    skill1Value = {waistSlot3[0] ? waistSlot3[0].skill1Value : 0}
                    piece = "Waist"
                    slot = "3"
                    />
                </div>
                {legs.length > 0 && 
                legs.map((v)=>
                <ArmorDisplay
                key = {v.armor_id}
                none = {false}
                name = {v.name}
                piece = {v.piece}
                class = {v.class}
                slot1 = {v.slot1}
                slot2 = {v.slot2}
                slot3 = {v.slot3}
                skill1 = {v.skill1}
                skill1Value = {v.skill1Value}
                skill2 = {v.skill2}
                skill2Value = {v.skill2Value}
                skill3 = {v.skill3}
                skill3Value = {v.skill3Value}
                skill4 = {v.skill4}
                skill4Value = {v.skill4Value}
                defense = {v.defense}
                fireRes = {v.fireRes}
                waterRes = {v.waterRes}
                thunderRes = {v.thunderRes}
                iceRes = {v.iceRes}
                dragonRes = {v.dragonRes}
                rarity = {v.rarity}
                myArmorSet = {true}
                />)}
                <div className = "row">
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {legsSlot1[0] ? legsSlot1[0].name : "None"}
                    skill1 = {legsSlot1[0] ? legsSlot1[0].skill1 : "None"}
                    skill1Value = {legsSlot1[0] ? legsSlot1[0].skill1Value : 0}
                    piece = "Legs"
                    slot = "1"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {legsSlot2[0] ? legsSlot2[0].name : "None"}
                    skill1 = {legsSlot2[0] ? legsSlot2[0].skill1 : "None"}
                    skill1Value = {legsSlot2[0] ? legsSlot2[0].skill1Value : 0}
                    piece = "Legs"
                    slot = "2"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {legsSlot3[0] ? legsSlot3[0].name : "None"}
                    skill1 = {legsSlot3[0] ? legsSlot3[0].skill1 : "None"}
                    skill1Value = {legsSlot3[0] ? legsSlot3[0].skill1Value : 0}
                    piece = "Legs"
                    slot = "3"
                    />
                </div>
                {talisman.length > 0 && talisman.map((v)=><TalismanDisplay
                name = {v.name}
                location = {props.location}
                rarity = {v.rarity}
                skill1 = {v.skill1}
                skill1Value = {v.skill1Value}
                skill2 = {v.skill2}
                skill2Value = {v.skill2Value}
                slot1 = {v.slot1}
                slot2 = {v.slot2}
                slot3 = {v.slot3}
                />)}
                <div className = "row">
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {talismanSlot1[0] ? talismanSlot1[0].name : "None"}
                    skill1 = {talismanSlot1[0] ? talismanSlot1[0].skill1 : "None"}
                    skill1Value = {talismanSlot1[0] ? talismanSlot1[0].skill1Value : 0}
                    piece = "Torso"
                    slot = "1"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {talismanSlot2[0] ? talismanSlot2[0].name : "None"}
                    skill1 = {talismanSlot2[0] ? talismanSlot2[0].skill1 : "None"}
                    skill1Value = {talismanSlot2[0] ? talismanSlot2[0].skill1Value : 0}
                    piece = "Torso"
                    slot = "2"
                    />
                    <DecorationDisplay
                    location = "setDisplay"
                    myArmorSet = {true}
                    none = {false}
                    name = {talismanSlot3[0] ? talismanSlot3[0].name : "None"}
                    skill1 = {talismanSlot3[0] ? talismanSlot3[0].skill1 : "None"}
                    skill1Value = {talismanSlot3[0] ? talismanSlot3[0].skill1Value : 0}
                    piece = "Torso"
                    slot = "3"
                    />
                </div>
        </div>}
    </div>
        
    </>
    )
}

function mapStateToProps(state){
    return{
        armor: state.armor,
        decos: state.decos,
        currentUser: state.user,
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
        TalismanDecos: state.deco.TalismanDecos,
        currentUser: state.user
    }
}

const mapDispatchToProps ={
    equipArmor,
    unequipArmor,
    clearArmor,
    clearDecosFromPiece,
    equipDeco
}
export default connect(mapStateToProps, mapDispatchToProps)(ArmorSetDisplay);