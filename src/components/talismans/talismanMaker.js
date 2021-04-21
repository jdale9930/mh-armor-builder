import {react, useEffect, useState} from "react"
import {connect} from "react-redux";
import "./talisman.css"
import skills from "../resources/skills"
import axios from "axios"



const TalismanMaker = (props) =>{
    const [name, setName] = useState("")
    const [rarity, setRarity] = useState(0)
    const [skill1, setSkill1] = useState("")
    const [skill1Val, setSkill1Val] = useState(0)
    const [skill2, setSkill2] = useState("")
    const [skill2Val, setSkill2Val] = useState(0)
    const [slot1, setSlot1] = useState(0)
    const [slot2, setSlot2] = useState(0)
    const [slot3, setSlot3] = useState(0)
    const [error, setError] = useState("")

    useEffect(()=>{
        skill1Val > 7 && setSkill1Val(7)
        skill1Val < 0 && setSkill1Val(0)
        !skill1Val && setSkill1Val(0)
        skill2Val > 7 && setSkill2Val(7)
        skill2Val < 0 && setSkill2Val(0)
        !skill2Val && setSkill2Val(0)

    },[skill1Val, skill2Val])

    async function submit(){
        try{
            if(!name){
                throw("Give your talisman a name!")
            }
            if(name.length > 20 || name.length < 4){
                throw("Name must be between 4 and 20 characters")
            }
            if(skill1 === skill2){
                throw("Cannot use the same skill twice!")
            }

            let skill1Final = skill1
            let skill1ValFinal = skill1Val
            if(!skill1 || skill1Val === 0)
            {
                if(skill2 && skill2Val > 0){
                    skill1Final = skill2
                    skill1ValFinal = skill2Val
                }
                else{
                    throw("Please set a skill")
                }
            }
            let skill2Final = skill2
            let skill2ValFinal = skill2Val
            if(!skill2 || skill2Val === 0){
                skill2Final = ""
                skill2ValFinal = 0
            }

            let slotFinal = [slot1, slot2, slot3]
            slotFinal.sort()
            let slot1Final = slotFinal[2]
            let slot2Final = slotFinal[1]
            let slot3Final = slotFinal[0]
            let data = {
                user_id: props.currentUser.id,
                name: name,
                rarity: rarity,
                skill1: skill1Final,
                skill1Value: skill1ValFinal,
                skill2: skill2Final,
                skill2Value: skill2ValFinal,
                slot1: slot1Final,
                slot2: slot2Final,
                slot3: slot3Final
            }
            console.log("before axios")
            await axios.post("/talisman/add", data)
            .then((response)=>{
                console.log(response.data)
                console.log(response.data)
                if(response.data.error){}
            })
        }
        catch(err){
            return setError(err)
        }
    }
    return(
        <>
        <div className = "talismanMakerDisplay">
            <h1>Talisman Maker</h1>
            <div>Due to the random and currently unknown limits to the
                generation of Talismans in Monster Hunter Rise, we cannot currently 
                confirm whether or not any combination of skills is possible.
                We recommend that you create Talismans you have already
                obtained in game, or have reason to believe could exist.
            </div>

            <div className = "talismanMakerInputBox">
                <div>
                    <div>Talisman Name:</div>
                    <input type = "text" value = {name} onChange ={(evt)=>{setName(evt.target.value)}}></input>
                </div>
                <div>
                    <div>Talisman Rarity:</div>
                    <select value = {rarity} onChange = {(evt)=>{setRarity(evt.target.value)}}>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                    <option value = "6">6</option>
                    <option value = "7">7</option>
                </select>
                </div>
                <div>
                    <div>Skill 1:</div>
                    <select value = {skill1} onChange = {(evt)=>{setSkill1(evt.target.value)}}>
                    <option value = ""></option>
                    {skills.map((v)=><option value = {v} key = {v.name}>{v}</option>)}
                    </select>
                    <input type = "number" value = {skill1Val} style = {{width: "25px"}}
                    onChange = {(evt)=>{setSkill1Val(evt.target.value)}}></input>
                </div>

                <div>
                    <div>Skill 2:</div>
                    <select value = {skill2} onChange = {(evt)=>{setSkill2(evt.target.value)}}>
                    <option value = ""></option>
                    {skills.map((v)=><option value = {v} key = {v.name}>{v}</option>)}
                    </select>
                    <input type = "number" value = {skill2Val} style = {{width: "25px"}}
                    onChange = {(evt)=>{setSkill2Val(evt.target.value)}}></input>
                </div>
                <div>
                    <div>Slot 1:</div>
                    <input type = "radio" id = "slot10" name = "slot1" value = {0}
                    onChange = {(evt)=>{setSlot1(evt.target.value)}}></input>
                    <label for ="slot10">0</label>
                    <input type = "radio" id = "slot11" name = "slot1" value = {1}
                    onChange = {(evt)=>{setSlot1(evt.target.value)}}></input>
                    <label for ="slot11">1</label>
                    <input type = "radio" id = "slot12" name = "slot1" value = {2}
                    onChange = {(evt)=>{setSlot1(evt.target.value)}}></input>
                    <label for ="slot12">2</label>
                    <input type = "radio" id = "slot13" name = "slot1" value = {3}
                    onChange = {(evt)=>{setSlot1(evt.target.value)}}></input>
                    <label for ="slot13">3</label>
                </div>

                <div>
                    <div>Slot 2:</div>
                    <input type = "radio" id = "slot20" name = "slot2" value = {0}
                    onChange = {(evt)=>{setSlot2(evt.target.value)}}></input>
                    <label for ="slot20">0</label>
                    <input type = "radio" id = "slot21" name = "slot2" value = {1}
                    onChange = {(evt)=>{setSlot2(evt.target.value)}}></input>
                    <label for ="slot21">1</label>
                    <input type = "radio" id = "slot22" name = "slot2" value = {2}
                    onChange = {(evt)=>{setSlot2(evt.target.value)}}></input>
                    <label for ="slot22">2</label>
                    <input type = "radio" id = "slot23" name = "slot2" value = {3}
                    onChange = {(evt)=>{setSlot2(evt.target.value)}}></input>
                    <label for ="slot23">3</label>
                </div>

                <div>
                    <div>Slot 3:</div>
                    <input type = "radio" id = "slot30" name = "slot3" value = {0}
                    onChange = {(evt)=>{setSlot3(evt.target.value)}}></input>
                    <label for ="slot30">0</label>
                    <input type = "radio" id = "slot31" name = "slot3" value = {1}
                    onChange = {(evt)=>{setSlot3(evt.target.value)}}></input>
                    <label for ="slot31">1</label>
                    <input type = "radio" id = "slot32" name = "slot3" value = {2}
                    onChange = {(evt)=>{setSlot3(evt.target.value)}}></input>
                    <label for ="slot32">2</label>
                    <input type = "radio" id = "slot33" name = "slot3" value = {3}
                    onChange = {(evt)=>{setSlot3(evt.target.value)}}></input>
                    <label for ="slot33">3</label>
                </div>
                <div style = {{color: "red"}}>{error}</div>
                <button onClick = {()=>{submit()}}>Create Talisman</button>
            </div>

        </div>
        </>
    )
}

function mapStateToProps(state){
    return{
        currentUser: state.user
    }
}

const mapDispatchToProps ={
}
export default connect(mapStateToProps, mapDispatchToProps)(TalismanMaker);
