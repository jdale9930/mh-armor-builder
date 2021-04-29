import {React, useState, useEffect} from "react"
import axios from "axios"
import ArmorSearcher from "../armorSearcher/armorSearcher"
import DecorationSearcher from "../decorationSearcher/decorationSearcher"
import TalismanSearcher from "../talismans/talismanSearcher"
import SetDisplay from "../setDisplay/setDisplay"
import TotalStatsDisplay from "../totalStatsDisplay/totalStatsDisplay"
import SaveArmorSet from "./saveArmorSet"
import {connect} from "react-redux";
import {equipArmor, unequipArmor, clearArmor, clearDecosFromPiece, equipDeco} from "../../Redux/Actions"
import "./armorSetBuilder.css"
//import {helmetImg, chestImg from "../resources/images/Helmet_Icon_White.png"

const ArmorSetBuilder = (props) => {
    const [searchSelect, setSearchSelect] = useState("Armor")
    const [savedArmorSets, setSavedArmorSets] = useState([])
    const [loadIdx, setLoadIdx] = useState("")
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

    useEffect(()=>{searchArmorSets()},[])
    async function searchArmorSets(){
        let results = await axios.get(`/armorset/search?id=${props.currentUser.id}&name=&skill=&slots=`,{user_id: props.currentUser.id})
        setSavedArmorSets(results.data.data)}

        async function LoadArmorSet(){
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
            }
        useEffect(()=>{getArmor()},[loadIdx])
        async function getArmor(){  
            if(loadIdx){ 
               console.log() 
               let results = await axios.get(`/armor/search?name=${savedArmorSets[loadIdx].head}&skill=&slots=%&piece=`)
               setHead(results.data.data)
               results = await axios.get(`/armor/search?name=${savedArmorSets[loadIdx].torso}&skill=&slots=%&piece=`)
               setTorso(results.data.data)
               results = await axios.get(`/armor/search?name=${savedArmorSets[loadIdx].arms}&skill=&slots=%&piece=`)
               setArms(results.data.data)
               results = await axios.get(`/armor/search?name=${savedArmorSets[loadIdx].waist}&skill=&slots=%&piece=`)
               setWaist(results.data.data)
               results = await axios.get(`/armor/search?name=${savedArmorSets[loadIdx].legs}&skill=&slots=%&piece=`)
               setLegs(results.data.data)
               results = await axios.get(`/talisman/search?id=${props.currentUser.id}&name=${savedArmorSets[loadIdx].talisman_id}&skill=&slots=$`,{user_id: props.currentUser.id})
               setTalisman(results.data.data)
       
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].headSlot1}&skill=`)
               setHeadSlot1(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].headSlot2}&skill=`)
               setHeadSlot2(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].headSlot3}&skill=`)
               setHeadSlot3(results.data.data)
       
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].torsoSlot1}&skill=`)
               setTorsoSlot1(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].torsoSlot2}&skill=`)
               setTorsoSlot2(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].torsoSlot3}&skill=`)
               setTorsoSlot3(results.data.data)
       
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].armsSlot1}&skill=`)
               setArmsSlot1(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].armsSlot2}&skill=`)
               setArmsSlot2(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].armsSlot3}&skill=`)
               setArmsSlot3(results.data.data)
       
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].waistSlot1}&skill=`)
               setWaistSlot1(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].waistSlot2}&skill=`)
               setWaistSlot2(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].waistSlot3}&skill=`)
               setWaistSlot3(results.data.data)
       
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].legsSlot1}&skill=`)
               setLegsSlot1(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].legsSlot2}&skill=`)
               setLegsSlot2(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].legsSlot3}&skill=`)
               setLegsSlot3(results.data.data)
       
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].talismanSlot1}&skill=`)
               setTalismanSlot1(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].talismanSlot2}&skill=`)
               setTalismanSlot2(results.data.data)
               results = await axios.get(`/decoration/search?name=${savedArmorSets[loadIdx].talismanSlot3}&skill=`)
               setTalismanSlot3(results.data.data)
            }
               
            }  
    return (
        <div>
            <h1>Armor Set Builder</h1>
            <div className = "loadClear">
                
                <div>
                    <div>Load Saved Armor Set:</div>
                    <div>
                        <select onChange={(evt)=>{setLoadIdx(evt.target.value)}} style ={{ width: "130px"}}>
                            <option value = ""></option>
                            {savedArmorSets.length > 0 &&
                            savedArmorSets.map((v,idx)=><option value = {idx} key = {v.name}>{v.name}</option>)}
                        </select>
                        <button onClick={()=>{LoadArmorSet()}}>Load</button>
                    </div>
                </div>
                <button style ={{marginLeft: "60px"}} onClick={()=>{
                    props.clearArmor()
                    props.clearDecosFromPiece("Head")
                    props.clearDecosFromPiece("Torso")
                    props.clearDecosFromPiece("Arms")
                    props.clearDecosFromPiece("Waist")
                    props.clearDecosFromPiece("Legs")
                    props.clearDecosFromPiece("Talisman")
                }}>Clear Armor Set</button>
            </div>
            <div className = "setBuilderMain">
                <SetDisplay></SetDisplay>
                
                <div style = {{margin: "auto", marginTop: "5px", width: "500px"}}>
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
        currentUser: state.user,
        user: state.user
    }
}

const mapDispatchToProps ={
    equipArmor,
    unequipArmor,
    clearArmor,
    clearDecosFromPiece,
    equipDeco
}
export default connect(mapStateToProps, mapDispatchToProps)(ArmorSetBuilder);