import {React, useState, useEffect} from "react"
import "./armorDisplay.css"

const ArmorDisplay = (props) => {
    const [skill1, setSkill1] = useState([]);
    const [skill2, setSkill2] = useState([]);
    const [skill3, setSkill3] = useState([]);
    const [skill4, setSkill4] = useState([]);
    const [slotsDisplay, setSlotsDisplay] = useState("---")
    
    useEffect(()=>{
            let splitSkill1 = props.skill1.split(":");
            setSkill1(splitSkill1)
            let splitSkill2 = props.skill2.split(":");
            setSkill2(splitSkill2)
            let splitSkill3 = props.skill3.split(":");
            setSkill3(splitSkill3)
            let splitSkill4 = props.skill3.split(":");
            setSkill4(splitSkill4)
            let slotLine = "---"
            let i = 0
            for(i = 0; i < props.slots; i++){
                slotLine =slotLine.replace("-","0")
                setSlotsDisplay(slotLine)
            }
    },[])
    return(
        <div className = "armorDisplayContainer">
            <div className = "armorInfoDisplay">
                <div>
                    <img src={"/images/" + props.type + ".png"}></img>
                </div>
                <div>
                    {props.name}
                </div>
                <div>
                    Defense: {props.defense}
                </div>
                <div>
                    Slots: {slotsDisplay}
                </div>
            </div>
            <div className = "skillDisplay">
                {props.skill1 !== ":" && <div className = "skillRow">
                    <div className = "skillRow1">{skill1[0]}</div>
                    <div className = "skillRow2">{skill1[1]}</div>
                </div>}
                {props.skill2 !== ":" && <div className = "skillRow">
                    <div className = "skillRow1">{skill2[0]}</div>
                    <div className = "skillRow2">{skill2[1]}</div>
                </div>}
                {props.skill3 !== ":" && <div className = "skillRow">
                    <div className = "skillRow1">{skill3[0]}</div>
                    <div className = "skillRow2">{skill3[1]}</div>
                </div>}
                {props.skill4 !== ":" && <div className = "skillRow">
                    <div className = "skillRow1">{skill4[0]}</div>
                    <div className = "skillRow2">{skill4[1]}</div>
                </div>}

            </div>
            <div className = "skillDisplay">
                <div className = "skillRow">
                    <div className = "skillRow1">Fire Res:</div>
                    <div>{props.fireRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Water Res:</div>
                    <div>{props.waterRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Thunder Res:</div>
                    <div>{props.thunderRes}</div>
                </div>
                <div className = "skillRow">
                    <div className = "skillRow1">Ice Res:</div>
                    <div>{props.iceRes}</div>
                </div>
                <div className = "skillRow"  style = {{borderBottom: "0px solid black"}}>
                    <div className = "skillRow1">Dragon Res:</div>
                    <div>{props.dragonRes}</div>
                </div>
            </div>
        </div>
    )
}

export default ArmorDisplay;