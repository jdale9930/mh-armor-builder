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

    const [headLocal, setHeadLocal] = useState({
        name: "None", skill1: ":", skill2: ":", skill3: ":", skill4: ":"})
    const [torsoLocal, setTorsoLocal] = useState({
        name: "None", skill1: ":", skill2: ":", skill3: ":", skill4: ":"})
    const [armsLocal, setArmsLocal] = useState({
        name: "None", skill1: ":", skill2: ":", skill3: ":", skill4: ":"})
    const [waistLocal, setWaistLocal] = useState({
        name: "None", skill1: ":", skill2: ":", skill3: ":", skill4: ":"})
    const [legsLocal, setLegsLocal] = useState({
        name: "None", skill1: ":", skill2: ":", skill3: ":", skill4: ":"})

    useEffect(()=>{
        axios.get(`/armor/search?name=${props.headState}&skill=%&slots=%&type=Head`)
        .then(response => setHeadLocal(response.data.data[0]))
        // .then(console.log(headLocal))
        // .then(console.log(headLocal.skill1))
    },[props.headState])

    useEffect(()=>{
        axios.get(`/armor/search?name=${props.torsoState}&skill=%&slots=%&type=Torso`)
        .then(response => setTorsoLocal(response.data.data[0]))
        // .then(console.log(headLocal))
        // .then(console.log(headLocal.skill1))
    },[props.torsoState])

    useEffect(()=>{
        axios.get(`/armor/search?name=${props.armsState}&skill=%&slots=%&type=Arms`)
        .then(response => setArmsLocal(response.data.data[0]))
    },[props.armsState])

    useEffect(()=>{
        axios.get(`/armor/search?name=${props.waistState}&skill=%&slots=%&type=Waist`)
        .then(response => setWaistLocal(response.data.data[0]))
    },[props.waistState])

    useEffect(()=>{
        axios.get(`/armor/search?name=${props.legsState}&skill=%&slots=%&type=Legs`)
        .then(response => setLegsLocal(response.data.data[0]))
    },[props.legsState])
    
    useEffect(()=>{
        setHeadDecoArray([])
        for(let i = 0; i < props.HeadDecos.length; i++){
            axios.get(`/decoration/search?name=${props.HeadDecos[i].deco}&skill=%`)
            .then(response =>{
                setHeadDecoArray([])
                response.data.data.map((v) =>{
                let decoInf = {
                    name: response.data.data[0].name,
                    skill1: response.data.data[0].skill1,
                    skill2: response.data.data[0].skill2,
                    slots: response.data.data[0].slots,}
                    setHeadDecoArray([...HeadDecoArray, decoInf])
                    console.log(HeadDecoArray)
                })})
            }
            //eslint-disable-next-line react-hooks/exhaustive-deps
        },[props.HeadDecos])

        useEffect(()=>{
            setTorsoDecoArray([])
            for(let i = 0; i < props.TorsoDecos.length; i++){
                axios.get(`/decoration/search?name=${props.TorsoDecos[i].deco}&skill=%`)
                .then(response =>{
                    setTorsoDecoArray([])
                    response.data.data.map((v) =>{
                    let decoInf = {
                        name: response.data.data[0].name,
                        skill1: response.data.data[0].skill1,
                        skill2: response.data.data[0].skill2,
                        slots: response.data.data[0].slots,}
                        setTorsoDecoArray([...TorsoDecoArray, decoInf])
                        console.log(TorsoDecoArray)
                    })})
                }
                //eslint-disable-next-line react-hooks/exhaustive-deps
            },[props.TorsoDecos])
        
        useEffect(()=>{
            setArmsDecoArray([])
            for(let i = 0; i < props.ArmsDecos.length; i++){
                axios.get(`/decoration/search?name=${props.ArmsDecos[i].deco}&skill=%`)
                .then(response =>{
                    setArmsDecoArray([])
                    response.data.data.map((v) =>{
                    let decoInf = {
                        name: response.data.data[0].name,
                        skill1: response.data.data[0].skill1,
                        skill2: response.data.data[0].skill2,
                        slots: response.data.data[0].slots,}
                        setArmsDecoArray([...ArmsDecoArray, decoInf])
                        console.log(ArmsDecoArray)
                    })})
                    }
                    //eslint-disable-next-line react-hooks/exhaustive-deps
                },[props.ArmsDecos])

            useEffect(()=>{
                setWaistDecoArray([])
                for(let i = 0; i < props.WaistDecos.length; i++){
                    axios.get(`/decoration/search?name=${props.WaistDecos[i].deco}&skill=%`)                        .then(response =>{
                        setWaistDecoArray([])
                        response.data.data.map((v) =>{
                        let decoInf = {
                            name: response.data.data[0].name,
                            skill1: response.data.data[0].skill1,
                            skill2: response.data.data[0].skill2,
                            slots: response.data.data[0].slots,}
                            setWaistDecoArray([...WaistDecoArray, decoInf])
                            console.log(WaistDecoArray)
                        })})
                    }
                        //eslint-disable-next-line react-hooks/exhaustive-deps
                },[props.WaistDecos])

            useEffect(()=>{
                setLegsDecoArray([])
                for(let i = 0; i < props.LegsDecos.length; i++){
                    axios.get(`/decoration/search?name=${props.LegsDecos[i].deco}&skill=%`)                        .then(response =>{
                        setLegsDecoArray([])
                        response.data.data.map((v) =>{
                        let decoInf = {
                            name: response.data.data[0].name,
                            skill1: response.data.data[0].skill1,
                            skill2: response.data.data[0].skill2,
                            slots: response.data.data[0].slots,}
                            setLegsDecoArray([...LegsDecoArray, decoInf])
                            console.log(LegsDecoArray)
                        })})
                    }
                        //eslint-disable-next-line react-hooks/exhaustive-deps
                },[props.LegsDecos])
    
    return (
        <div>
            <div className = "armorDisplay">
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Head.png" alt = "Head"/>
                    {props.headState === "None" ? <ArmorDisplay none = {true}/>:<ArmorDisplay
                key = {headLocal.armor_id}
                none = {false}
                name = {headLocal.name}
                type = {headLocal.type}
                class = {headLocal.class}
                skill1 = {headLocal.skill1}
                skill2 = {headLocal.skill2}
                skill3 = {headLocal.skill3}
                skill4 = {headLocal.skill4}
                defense = {headLocal.defense}
                fireRes = {headLocal.fireRes}
                waterRes = {headLocal.waterRes}
                thunderRes = {headLocal.thunderRes}
                iceRes = {headLocal.iceRes}
                dragonRes = {headLocal.dragonRes}
                slots = {headLocal.slots}
                rarity = {headLocal.rarity}
                />}
                </div>
                <div className = "row">
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
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Torso.png" alt = "Torso"/>
                    {props.torsoState === "None" ? <ArmorDisplay none = {true}/>:<ArmorDisplay
                key = {torsoLocal.armor_id}
                none = {false}
                name = {torsoLocal.name}
                type = {torsoLocal.type}
                class = {torsoLocal.class}
                skill1 = {torsoLocal.skill1}
                skill2 = {torsoLocal.skill2}
                skill3 = {torsoLocal.skill3}
                skill4 = {torsoLocal.skill4}
                defense = {torsoLocal.defense}
                fireRes = {torsoLocal.fireRes}
                waterRes = {torsoLocal.waterRes}
                thunderRes = {torsoLocal.thunderRes}
                iceRes = {torsoLocal.iceRes}
                dragonRes = {torsoLocal.dragonRes}
                slots = {torsoLocal.slots}
                rarity = {torsoLocal.rarity}
                />}
                </div>
                <div className = "row">
                {props.TorsoDecos.length > 0 && TorsoDecoArray.map((v) =>
                    <DecorationDisplay
                        name = {v.name}
                        skill1 = {v.skill1}
                        skill2 = {v.skill2}
                        slots = {v.slots}
                        location = "setDisplay"
                        key = {v.name}
                        type = "Torso"
                    />
                )}
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Arms.png" alt = "Arms"/>
                    {props.armsState === "None" ? <ArmorDisplay none = {true}/>:<ArmorDisplay
                key = {armsLocal.armor_id}
                none = {false}
                name = {armsLocal.name}
                type = {armsLocal.type}
                class = {armsLocal.class}
                skill1 = {armsLocal.skill1}
                skill2 = {armsLocal.skill2}
                skill3 = {armsLocal.skill3}
                skill4 = {armsLocal.skill4}
                defense = {armsLocal.defense}
                fireRes = {armsLocal.fireRes}
                waterRes = {armsLocal.waterRes}
                thunderRes = {armsLocal.thunderRes}
                iceRes = {armsLocal.iceRes}
                dragonRes = {armsLocal.dragonRes}
                slots = {armsLocal.slots}
                rarity = {armsLocal.rarity}
                />}
                </div>
                <div className = "row">
                {props.ArmsDecos.length > 0 && ArmsDecoArray.map((v) =>
                    <DecorationDisplay
                        name = {v.name}
                        skill1 = {v.skill1}
                        skill2 = {v.skill2}
                        slots = {v.slots}
                        location = "setDisplay"
                        key = {v.name}
                        type = "Arms"
                    />
                )}
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Waist.png" alt = "Waist"/>
                    {props.waistState === "None" ? <ArmorDisplay none = {true}/>:<ArmorDisplay
                key = {waistLocal.armor_id}
                none = {false}
                name = {waistLocal.name}
                type = {waistLocal.type}
                class = {waistLocal.class}
                skill1 = {waistLocal.skill1}
                skill2 = {waistLocal.skill2}
                skill3 = {waistLocal.skill3}
                skill4 = {waistLocal.skill4}
                defense = {waistLocal.defense}
                fireRes = {waistLocal.fireRes}
                waterRes = {waistLocal.waterRes}
                thunderRes = {waistLocal.thunderRes}
                iceRes = {waistLocal.iceRes}
                dragonRes = {waistLocal.dragonRes}
                slots = {waistLocal.slots}
                rarity = {waistLocal.rarity}
                />}
                </div>
                <div className = "row">
                {props.WaistDecos.length > 0 && WaistDecoArray.map((v) =>
                    <DecorationDisplay
                        name = {v.name}
                        skill1 = {v.skill1}
                        skill2 = {v.skill2}
                        slots = {v.slots}
                        location = "setDisplay"
                        key = {v.name}
                        type = "Waist"
                    />
                )}
                </div>
                <div className = "setRow">
                    <img className = "armorIcon" src="/images/Legs.png" alt = "Legs"/>
                    {props.legsState === "None" ? <ArmorDisplay none = {true}/>:<ArmorDisplay
                key = {legsLocal.armor_id}
                none = {false}
                name = {legsLocal.name}
                type = {legsLocal.type}
                class = {legsLocal.class}
                skill1 = {legsLocal.skill1}
                skill2 = {legsLocal.skill2}
                skill3 = {legsLocal.skill3}
                skill4 = {legsLocal.skill4}
                defense = {legsLocal.defense}
                fireRes = {legsLocal.fireRes}
                waterRes = {legsLocal.waterRes}
                thunderRes = {legsLocal.thunderRes}
                iceRes = {legsLocal.iceRes}
                dragonRes = {legsLocal.dragonRes}
                slots = {legsLocal.slots}
                rarity = {legsLocal.rarity}
                />}
                </div>
                </div>
                <div className = "row">
                {props.LegsDecos.length > 0 && LegsDecoArray.map((v) =>
                    <DecorationDisplay
                        name = {v.name}
                        skill1 = {v.skill1}
                        skill2 = {v.skill2}
                        slots = {v.slots}
                        location = "setDisplay"
                        key = {v.name}
                        type = "Legs"
                    />
                )}
            </div>
            <TotalStatsDisplay
                Head = {{skills: [headLocal.skill1,
                    headLocal.skill2,
                    headLocal.skill3,
                    headLocal.skill4],
                stats: {
                    defense: headLocal.defense,
                    fireRes: headLocal.fireRes,
                    waterRes: headLocal.waterRes,
                    thunderRes: headLocal.thunderRes,
                    iceRes: headLocal.iceRes,
                    dragonRes: headLocal.dragonRes,
                    slots: headLocal.slots
                }
                }}
                Torso = {{skills: {skill1: torsoLocal.skill1,
                    skill2: torsoLocal.skill2,
                    skill3: torsoLocal.skill3,
                    skill4: torsoLocal.skill4},
                stats: {
                    defense: torsoLocal.defense,
                    fireRes: torsoLocal.fireRes,
                    waterRes: torsoLocal.waterRes,
                    thunderRes: torsoLocal.thunderRes,
                    iceRes: torsoLocal.iceRes,
                    dragonRes: torsoLocal.dragonRes,
                    slots: torsoLocal.slots
                }
                }}
                Arms = {armsLocal}
                Waist = {waistLocal}
                Legs = {legsLocal}
                />
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