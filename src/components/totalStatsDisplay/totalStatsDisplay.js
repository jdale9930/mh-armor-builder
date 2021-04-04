import {react, useEffect, useState} from "react"
import {connect} from "react-redux"
import axios from "axios"

const TotalStatsDisplay = (props) => {

    const [defense, setDefense] = useState(0)
    const [fireRes, setFireRes] = useState(0)
    const [waterRes, setWaterRes] = useState(0)
    const [thunderRes, setThunderRes] = useState(0)
    const [iceRes, setIceRes] = useState(0)
    const [dragonRes, setDragonRes] = useState(0)
    const [totalSlots, setTotalSlots] = useState(0)
    const [skills, setSkills] = useState([])
    const [skillCount, setSkillCount] = useState(0)
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
        },[props.headState])
    
        useEffect(()=>{
            axios.get(`/armor/search?name=${props.torsoState}&skill=%&slots=%&type=Torso`)
            .then(response => setTorsoLocal(response.data.data[0]))
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

    // useEffect(()=>{
    //     let defenseTotal = 
    //     props.Head.stats.defense + 
    //     props.Torso.stats.defense +
    //     props.Arms.stats.defense +
    //     props.Waist.stats.defense +
    //     props.Legs.stats.defense
    //     setDefense(defenseTotal)

    //     let fireResTotal = 
    //     props.Head.stats.fireRes + 
    //     props.Torso.stats.fireRes +
    //     props.Arms.stats.fireRes +
    //     props.Waist.stats.ireRes +
    //     props.Legs.stats.fireRes
    //     setFireRes(fireResTotal)

    //     let waterResTotal = 
    //     props.Head.stats.waterRes + 
    //     props.Torso.stats.waterRes +
    //     props.Arms.stats.waterRes +
    //     props.Waist.stats.waterRes +
    //     props.Legs.stats.waterRes
    //     setWaterRes(waterResTotal)

    //     let thunderResTotal = 
    //     props.Head.stats.thunderRes + 
    //     props.Torso.stats.thunderRes +
    //     props.Arms.stats.thunderRes +
    //     props.Waist.stats.thunderRes +
    //     props.Legs.stats.thunderRes
    //     setThunderRes(thunderResTotal)

    //     let iceResTotal = 
    //     props.Head.stats.iceRes + 
    //     props.Torso.stats.iceRes +
    //     props.Arms.stats.iceRes +
    //     props.Waist.stats.iceRes +
    //     props.Legs.stats.iceRes
    //     setIceRes(iceResTotal)

    //     let dragonResTotal = 
    //     props.Head.stats.dragonRes + 
    //     props.Torso.stats.dragonRes +
    //     props.Arms.stats.daragonRes +
    //     props.Waist.stats.dragonRes +
    //     props.Legs.stats.dragonRes
    //     setDragonRes(dragonResTotal)

    //     let slotsTotal = 
    //     props.Head.stats.slots + 
    //     props.Torso.stats.slots +
    //     props.Arms.stats.slots +
    //     props.Waist.stats.slots +
    //     props.Legs.stats.slots
    //     setTotalSlots(slotsTotal)
    // },[props.armor])

    useEffect(()=>{
        let headSkills = []
            if(headLocal.skill1 !== ":"){
                let splitSkill = headLocal.skill1.split(":");
                headSkills.push({skill: splitSkill[0], value: splitSkill[1]})}
            if(headLocal.skill2 !== ":"){
                let splitSkill = headLocal.skill2.split(":");
                headSkills.push({skill: splitSkill[0], value: splitSkill[1]})}
            if(headLocal.skill3 !== ":"){
                let splitSkill = headLocal.skill3.split(":");
                headSkills.push({skill: splitSkill[0], value: splitSkill[1]})}
            if(headLocal.skill4 !== ":"){
                let splitSkill = headLocal.skill4.split(":");
                headSkills.push({skill: splitSkill[0], value: splitSkill[1]})}    
            
        console.log(headSkills)
    
        for(let i = 0; i < headSkills.length; i++)
        {
            let newArray = [...skills]
            let idx = newArray.findIndex(obj => obj.skill === headSkills[i].skill)
            console.log(idx)
            if(idx === -1){
                newArray = [...skills, headSkills[i]]
                console.log(newArray)
                setSkills([...newArray])
            }
            else{
                newArray[idx] = {...newArray[idx], value: (newArray[idx].value + headSkills[i].value)}
                console.log(newArray)
                setSkills([...newArray])
            }}
        // }

        // for(let i = 0; i <props.Torso.skills.length; i++)
        // {
        //     let splitSkill = props.Torso.skills[i].split(":");
        //     let newArray = [...skills]
        //     let idx = newArray.findIndex(obj => obj.skill === splitSkill[0])
        //     if(idx === -1){
                
        //         newArray = [...newArray,{id: skillCount, skill: splitSkill[0], value: splitSkill[1]}]
        //         console.log(newArray)
        //         setSkills([...newArray])
        //     }
        //     else{
        //         newArray[idx] = {...newArray[idx], value: (newArray[idx].value + splitSkill[1])}
        //         setSkills([...newArray])
        //     }
        // }
    },[props.deco, props.headState])

    return(
        <>
        {skills.length > 0 &&
        // <div>Skill:{skills[0].skill}Value:{skills[0].value}</div>,
        <div>{skills[0]}</div>}
        <div>Thunder Res{thunderRes}</div>
        <button onClick = {()=>{console.log(skills)}}>Test</button>
        </>
    )
} 
function mapStateToProps(state){
    return{
        armor: state.armor,
        deco: state.deco,
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
}
export default connect(mapStateToProps, mapDispatchToProps)(TotalStatsDisplay);