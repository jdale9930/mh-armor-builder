import {react, useState, useEffect} from "react"
import {connect} from "react-redux";
import "./armorSetBuilder.css"
import axios from "axios"

const SaveArmorSet = (props) =>{
    const [name, setName] = useState("")
    const [weapon, setWeapon] = useState("Any")
    const [description, setDescription] = useState("")
    const [skills, setSkills] = useState([{skill: "", value: 0}])
    const [totalSkills, setTotalSkills] = useState([{skill: "", value:0}])
    const [error, setError] = useState("")
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
            let idx = uniqueSkills.findIndex(obj=> obj.skill === v.skill)
            if(idx === -1 && v.skill !== "" && v.skill !== "None"){
                uniqueSkills.push(v)
            }
            else if(uniqueSkills.length > 0 && v.skill !== "" && v.skill !== "None")(
                uniqueSkills[idx].value = uniqueSkills[idx].value + v.value
            )
        })
        setTotalSkills([...uniqueSkills])
    },[skills])

    async function save(){
    try{
        setError("")
        let savedSkills = [...totalSkills]
        for(let i = 0; i < 16; i++){
            !savedSkills[i] && savedSkills.push({skill: "", value: 0})
        }
        let data = {
            user_id: props.currentUser.id,
            name: name,
            weapon: weapon,
            description: description,
            defense: stats.defense,
            fireRes: stats.fireRes,
            waterRes: stats.waterRes,
            thunderRes: stats.thunderRes,
            iceRes: stats.iceRes,
            dragonRes: stats.dragonRes,
            head: props.armor.Head.Name,
            torso: props.armor.Torso.Name,
            arms: props.armor.Arms.Name,
            waist: props.armor.Waist.Name,
            legs: props.armor.Legs.Name,
            talisman_id: props.armor.Talisman.Name,
            skill1: savedSkills[0].skill,
            skill1Value: savedSkills[0].value,
            skill2: savedSkills[1].skill,
            skill2Value: savedSkills[1].value,
            skill3: savedSkills[2].skill,
            skill3Value: savedSkills[2].value,
            skill4: savedSkills[3].skill,
            skill4Value: savedSkills[3].value,
            skill5: savedSkills[4].skill,
            skill5Value: savedSkills[4].value,
            skill6: savedSkills[5].skill,
            skill6Value: savedSkills[5].value,
            skill7: savedSkills[6].skill,
            skill7Value: savedSkills[6].value,
            skill8: savedSkills[7].skill,
            skill8Value: savedSkills[7].value,
            skill9: savedSkills[8].skill,
            skill9Value: savedSkills[8].value,
            skill10: savedSkills[9].skill,
            skill10Value: savedSkills[9].value,
            skill11: savedSkills[10].skill,
            skill11Value: savedSkills[10].value,
            skill12: savedSkills[11].skill,
            skill12Value: savedSkills[11].value,
            skill13: savedSkills[12].skill,
            skill13Value: savedSkills[12].value,
            skill14: savedSkills[13].skill,
            skill14Value: savedSkills[13].value,
            skill15: savedSkills[14].skill,
            skill15Value: savedSkills[14].value,
            skill16: savedSkills[15].skill,
            skill16Value: savedSkills[15].value,
            headSlot1: props.HeadDecos.slot1.Decoration,
            headSlot2: props.HeadDecos.slot2.Decoration,
            headSlot3: props.HeadDecos.slot3.Decoration,
            torsoSlot1: props.TorsoDecos.slot1.Decoration,
            torsoSlot2: props.TorsoDecos.slot2.Decoration,
            torsoSlot3: props.TorsoDecos.slot3.Decoration,
            armsSlot1: props.ArmsDecos.slot1.Decoration,
            armsSlot2: props.ArmsDecos.slot2.Decoration,
            armsSlot3: props.ArmsDecos.slot3.Decoration,
            waistSlot1: props.WaistDecos.slot1.Decoration,
            waistSlot2: props.WaistDecos.slot2.Decoration,
            waistSlot3: props.WaistDecos.slot3.Decoration,
            legsSlot1: props.LegsDecos.slot1.Decoration,
            legsSlot2: props.LegsDecos.slot2.Decoration,
            legsSlot3: props.LegsDecos.slot3.Decoration,
            talismanSlot1: props.TalismanDecos.slot1.Decoration,
            talismanSlot2: props.TalismanDecos.slot2.Decoration,
            talismanSlot3: props.TalismanDecos.slot3.Decoration
        }
        await axios.post("/armorset/add",data)
        .then((response)=>{
            setError(response.data.error)})
        }
        catch(err){
            setError(err)
        }
    }
    return(
        <div className = "saveArmorSetDisplay">
            <div>Save your Armor Set to use later!</div>
            <div>
                <div>Name:</div>
                <input type = "text" value = {name} onChange = {(evt)=>{setName(evt.target.value)}}></input>
            </div>
            <div>
                <div>Weapon:</div>
                <select value = {weapon} onChange={(evt)=>{setWeapon(evt.target.value)}}>
                    <option value = {""}>Any</option>
                    <option value = {"Great Sword"}>Great Sword</option>
                    <option value = {"Sword and Shield"}>Sword and Shield</option>
                    <option value = {"Dual Blades"}>Dual Blades</option>
                    <option value = {"Long Sword"}>Long Sword</option>
                    <option value = {"Hammer"}>Hammer</option>
                    <option value = {"Hunting Horn"}>Hunting Horn</option>
                    <option value = {"Lance"}>Lance</option>
                    <option value = {"Gunlance"}>Gunlance</option>
                    <option value = {"Switch Axe"}>Switch Axe</option>
                    <option value = {"Charge Blade"}>Charge Blade</option>
                    <option value = {"Insect Glaive"}>Insect Glaive</option>
                    <option value = {"Light Bowgun"}>Light Bowgun</option>
                    <option value = {"Heavy Bowgun"}>Heavy Bowgun</option>
                    <option value = {"Bow"}>Bow</option>
                </select>
            </div>
            <div>
                <div>Description:</div>
                <textarea rows = "7" cols = "50" maxlength = "256" value = {description} onChange = {(evt)=>{setDescription(evt.target.value)}}></textarea>
            </div>
            <div>{error}</div>
            <button onClick = {()=>{save()}}>Save Armor Set</button>
        </div>
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
        TalismanDecos: state.deco.TalismanDecos
    }
}

const mapDispatchToProps ={

}
export default connect(mapStateToProps, mapDispatchToProps)(SaveArmorSet);