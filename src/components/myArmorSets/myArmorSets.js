import {react, useState, useEffect} from "react"
import ArmorSetDisplay from "./armorSetDisplay"
import {connect} from "react-redux";
import axios from "axios"

const MyArmorSets = (props) =>{
    const [armorSets, setArmorSets] = useState([])
    const [name, setName] = useState("")
    const [skill, setSkill] = useState("")
    const [weapon, setWeapon] = useState("")

    useEffect(()=>{searchArmorSets()},[])
    async function searchArmorSets(){
        let results = await axios.get(`/armorset/search?id=${props.currentUser.id}&name=${name}&skill=${skill}&weapon=${weapon}`,{user_id: props.currentUser.id})
        console.log(results.data)
        setArmorSets(results.data.data)}
    return(
        <div>
            <h1>My Armor Sets</h1>
            <div style = {{display: "flex"}}>
            {armorSets.length > 0 && armorSets.map((v)=>{
                return <ArmorSetDisplay
                name = {v.name}
                weapon = {v.weapon}
                description = {v.description}
                defense = {v.defense}
                fireRes = {v.fireRes}
                waterRes = {v.waterRes}
                thunderRes = {v.thunderRes}
                iceRes = {v.iceRes}
                dragonRes = {v.dragonRes}
                head = {v.head}
                torso = {v.torso}
                arms = {v.arms}
                waist = {v.waist}
                legs = {v.legs}
                talisman = {v .talisman_id}
                skill1 = {v.skill1}
                skill1Value = {v.skill1Value}
                skill2 = {v.skill2}
                skill2Value = {v.skill2Value}
                skill3 = {v.skill3}
                skill3Value = {v.skill3Value}
                skill4 = {v.skill4}
                skill4Value = {v.skill4Value}
                skill5 = {v.skill5}
                skill5Value = {v.skill5Value}
                skill6 = {v.skill6}
                skill6Value = {v.skill6Value}
                skill7 = {v.skill7}
                skill7Value = {v.skill7Value}
                skill8 = {v.skill8}
                skill8Value = {v.skill8Value}
                skill9 = {v.skill9}
                skill9Value = {v.skill9Value}
                skill10 = {v.skill10}
                skill10Value = {v.skill10Value}
                skill11 = {v.skill11}
                skill11Value = {v.skill11Value}
                skill12 = {v.skill12}
                skill12Value = {v.skill12Value}
                skill13 = {v.skill13}
                skill13Value = {v.skill13Value}
                skill14 = {v.skill14}
                skill14Value = {v.skill14Value}
                skill15 = {v.skill15}
                skill15Value = {v.skill15Value}
                skill16 = {v.skill16}
                skill16Value = {v.skill16Value}
                headSlot1 = {v.headSlot1}
                headSlot2 = {v.headSlot2}
                headSlot3 = {v.headSlot3}
                torsoSlot1 = {v.torsoSlot1}
                torsoSlot2 = {v.torsoSlot2}
                torsoSlot3 = {v.torsoSlot3}
                armsSlot1 = {v.armsSlot1}
                armsSlot2 = {v.armsSlot2}
                armsSlot3 = {v.armsSlot3}
                waistSlot1 = {v.waistSlot1}
                waistSlot2 = {v.waistSlot2}
                waistSlot3 = {v.waistSlot3}
                legsSlot1 = {v.legsSlot1}
                legsSlot2 = {v.legsSlot2}
                legsSlot3 = {v.legsSlot3}
                talismanSlot1 = {v.talismanSlot1}
                talismanSlot2 = {v.talismanSlot2}
                talismanSlot3 = {v.talismanSlot3}
                history = {props.history}
                />
            })}
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(MyArmorSets);