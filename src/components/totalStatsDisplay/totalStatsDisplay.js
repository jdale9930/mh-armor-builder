import {react, useEffect, useState} from "react"
import {connect} from "react-redux"
import "./totalStatsDisplay.css"
import axios from "axios"

const TotalStatsDisplay = (props) => {
    const [skills, setSkills] = useState([{skill: "", value: 0}])
    const [totalSkills, setTotalSkills] = useState([{skill: "", value:0}])
    const [stats, setStats] = useState({
        defense: 0,
        fireRes: 0,
        waterRes: 0,
        thunderRes: 0,
        iceRes: 0,
        dragonRes: 0
    })
    
    useEffect(()=>{
        setSkills([
            {skill: props.headState.Skills.skill1.Skill,value: props.headState.Skills.skill1.Value},
            {skill: props.headState.Skills.skill2.Skill,value: props.headState.Skills.skill2.Value},
            {skill: props.headState.Skills.skill3.Skill,value: props.headState.Skills.skill3.Value},
            {skill: props.headState.Skills.skill4.Skill,value: props.headState.Skills.skill4.Value},
            {skill: props.HeadDecos.slot1.Skill.Name, value: props.HeadDecos.slot1.Skill.Value},
            {skill: props.HeadDecos.slot2.Skill.Name, value: props.HeadDecos.slot2.Skill.Value},
            {skill: props.HeadDecos.slot3.Skill.Name, value: props.HeadDecos.slot3.Skill.Value},

            {skill: props.torsoState.Skills.skill1.Skill,value: props.torsoState.Skills.skill1.Value},
            {skill: props.torsoState.Skills.skill2.Skill,value: props.torsoState.Skills.skill2.Value},
            {skill: props.torsoState.Skills.skill3.Skill,value: props.torsoState.Skills.skill3.Value},
            {skill: props.torsoState.Skills.skill4.Skill,value: props.torsoState.Skills.skill4.Value},
            {skill: props.TorsoDecos.slot1.Skill.Name, value: props.TorsoDecos.slot1.Skill.Value},
            {skill: props.TorsoDecos.slot2.Skill.Name, value: props.TorsoDecos.slot2.Skill.Value},
            {skill: props.TorsoDecos.slot3.Skill.Name, value: props.TorsoDecos.slot3.Skill.Value},

            {skill: props.armsState.Skills.skill1.Skill,value: props.armsState.Skills.skill1.Value},
            {skill: props.armsState.Skills.skill2.Skill,value: props.armsState.Skills.skill2.Value},
            {skill: props.armsState.Skills.skill3.Skill,value: props.armsState.Skills.skill3.Value},
            {skill: props.armsState.Skills.skill4.Skill,value: props.armsState.Skills.skill4.Value},
            {skill: props.ArmsDecos.slot1.Skill.Name, value: props.ArmsDecos.slot1.Skill.Value},
            {skill: props.ArmsDecos.slot2.Skill.Name, value: props.ArmsDecos.slot2.Skill.Value},
            {skill: props.ArmsDecos.slot3.Skill.Name, value: props.ArmsDecos.slot3.Skill.Value},

            {skill: props.waistState.Skills.skill1.Skill,value: props.waistState.Skills.skill1.Value},
            {skill: props.waistState.Skills.skill2.Skill,value: props.waistState.Skills.skill2.Value},
            {skill: props.waistState.Skills.skill3.Skill,value: props.waistState.Skills.skill3.Value},
            {skill: props.waistState.Skills.skill4.Skill,value: props.waistState.Skills.skill4.Value},
            {skill: props.WaistDecos.slot1.Skill.Name, value: props.WaistDecos.slot1.Skill.Value},
            {skill: props.WaistDecos.slot2.Skill.Name, value: props.WaistDecos.slot2.Skill.Value},
            {skill: props.WaistDecos.slot3.Skill.Name, value: props.WaistDecos.slot3.Skill.Value},

            {skill: props.legsState.Skills.skill1.Skill,value: props.legsState.Skills.skill1.Value},
            {skill: props.legsState.Skills.skill2.Skill,value: props.legsState.Skills.skill2.Value},
            {skill: props.legsState.Skills.skill3.Skill,value: props.legsState.Skills.skill3.Value},
            {skill: props.legsState.Skills.skill4.Skill,value: props.legsState.Skills.skill4.Value},
            {skill: props.LegsDecos.slot1.Skill.Name, value: props.LegsDecos.slot1.Skill.Value},
            {skill: props.LegsDecos.slot2.Skill.Name, value: props.LegsDecos.slot2.Skill.Value},
            {skill: props.LegsDecos.slot3.Skill.Name, value: props.LegsDecos.slot3.Skill.Value},

            {skill: props.talismanState.Skills.skill1.Skill,value: props.talismanState.Skills.skill1.Value},
            {skill: props.talismanState.Skills.skill2.Skill,value: props.talismanState.Skills.skill2.Value},
            {skill: props.TalismanDecos.slot1.Skill.Name, value: props.TalismanDecos.slot1.Skill.Value},
            {skill: props.TalismanDecos.slot2.Skill.Name, value: props.TalismanDecos.slot2.Skill.Value},
            {skill: props.TalismanDecos.slot3.Skill.Name, value: props.TalismanDecos.slot3.Skill.Value},

        ])
    },[props.armor, props.deco])

    useEffect(()=>{
        setStats({
            defense: 
            (props.headState.Stats.defense + props.torsoState.Stats.defense + props.armsState.Stats.defense + props.waistState.Stats.defense + props.legsState.Stats.defense),
            fireRes: 
            (props.headState.Stats.fireRes + props.torsoState.Stats.fireRes + props.armsState.Stats.fireRes + props.waistState.Stats.fireRes + props.legsState.Stats.fireRes),
            waterRes: 
            (props.headState.Stats.waterRes + props.torsoState.Stats.waterRes + props.armsState.Stats.waterRes + props.waistState.Stats.waterRes + props.legsState.Stats.waterRes),
            thunderRes: 
            (props.headState.Stats.thunderRes + props.torsoState.Stats.thunderRes + props.armsState.Stats.thunderRes + props.waistState.Stats.thunderRes + props.legsState.Stats.thunderRes),
            iceRes: 
            (props.headState.Stats.iceRes + props.torsoState.Stats.iceRes + props.armsState.Stats.iceRes + props.waistState.Stats.iceRes + props.legsState.Stats.iceRes),
            dragonRes: 
            (props.headState.Stats.dragonRes + props.torsoState.Stats.dragonRes + props.armsState.Stats.dragonRes + props.waistState.Stats.dragonRes + props.legsState.Stats.dragonRes),
        })
    },[props.armor])

    useEffect(()=>{
        let uniqueSkills = []
        skills.map((v)=>{
            // console.log("enter map", v)
            let idx = uniqueSkills.findIndex(obj=> obj.skill === v.skill)
            console.log(idx)
            if(idx === -1 && v.skill !== "" && v.skill !== "None"){
                uniqueSkills.push(v)
            }
            else if(uniqueSkills.length > 0 && v.skill !== "" && v.skill !== "None")(
                uniqueSkills[idx].value = uniqueSkills[idx].value + v.value
            )
        })
        console.log(uniqueSkills)
        setTotalSkills([...uniqueSkills])
    },[skills])

    return(
        <>
        <div className = "statsBox">
            <div style = {{width: "190px"}}>
                <div className = "totalName">Total Skills: </div>
                {totalSkills.map((v, idx)=>{
                    if(idx < 6){return(<div className = "skillRowDisplay">
                        <div className = "skillName">{v.skill}</div><div className = "skillValue">{v.value}</div>
                        </div>)}
                })}
            </div>
            <div style = {{width: "190px"}}>
                {totalSkills.map((v, idx)=>{
                    if(idx >= 6 && idx < 12){return(<div className = "skillRowDisplay">
                        <div className = "skillName">{v.skill}</div><div className = "skillValue">{v.value}</div>
                        </div>)}
                })}
            </div>
            <div style = {{width: "190px"}}>
                <div className = "totalName">Total Stats:</div>
            <div className = "skillDisplay">
                <div className = "skillRow" style = {{borderTop: "1px solid black"}}>
                    <div className = "skillRow1">Defense:</div>
                    <div className = "skillRow2">{stats.defense}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Fire Res:</div>
                    <div className = "skillRow2">{stats.fireRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Water Res:</div>
                    <div className = "skillRow2">{stats.waterRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Thunder Res:</div>
                    <div className = "skillRow2">{stats.thunderRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Ice Res:</div>
                    <div className = "skillRow2">{stats.iceRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Dragon Res:</div>
                    <div className = "skillRow2">{stats.dragonRes}</div>
                </div>
            </div>
        </div>
        </div>
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
        TalismanDecos: state.deco.TalismanDecos
    }
}

const mapDispatchToProps ={
}
export default connect(mapStateToProps, mapDispatchToProps)(TotalStatsDisplay);