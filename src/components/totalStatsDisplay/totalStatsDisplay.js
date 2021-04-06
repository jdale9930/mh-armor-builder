import {react, useEffect, useState} from "react"
import {connect} from "react-redux"
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
        ])
    },[props.headState])

    useEffect(()=>{
        console.log(totalSkills)
        for(let i = 0; i <= skills.length - 1; i++){
            let inArray = false
            if(totalSkills.length > 0 && skills.length > 0)
            {
                for(let j = 0; i < totalSkills.length - 1; i++){
                    console.log("inner for", i, totalSkills[j].skill, skills[i].skill, inArray)
                    if((totalSkills[j].skill) === (skills[i].skill)){
                        console.log("if succesful", i, j)
                        setTotalSkills([...totalSkills, totalSkills[j] = {skill: skills[i].skill, value: totalSkills[j].value + skills[i.value]}])
                        inArray = true
                        break
                    }
                }
                console.log(i, inArray)
            }
            if(inArray === false && skills.length > 0){
                console.log(skills, i)
                setTotalSkills([totalSkills, skills[i]])
            }
        }
    },[skills])

    return(
        <>
        <button onClick = {()=>{console.log(skills, totalSkills)}}>Test</button>
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