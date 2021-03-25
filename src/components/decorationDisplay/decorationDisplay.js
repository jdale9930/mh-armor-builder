import {React, useState, useEffect} from "react"
import "./decorationDisplay.css"

const DecorationDisplay = (props) => {
    const [skill1, setSkill1] = useState([]);
    const [skill2, setSkill2] = useState([]);

    const [slotsDisplay, setSlotsDisplay] = useState("0--")
    
    useEffect(()=>{
            let splitSkill1 = props.skill1.split(":");
            setSkill1(splitSkill1)
            let splitSkill2 = props.skill2.split(":");
            setSkill2(splitSkill2)
            let slotLine = "0--"
            let i = 1
            for(i = 1; i < props.slots; i++){
                slotLine =slotLine.replace("-","0")
                setSlotsDisplay(slotLine)
            }
    },[])
    return(
        <div className = "armorDisplayContainer">
            <div className = "armorInfoDisplay">
                <div>
                    <img src={"/images/decoration.png"} style = {{width: "50px"}}></img>
                </div>
                <div>
                    {props.name}
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
            </div>
            <div className = "skillDisplay">
                <div>Add Decoration to:</div>
                <button>Head</button>
                <button>Torso</button>
                <button>Arms</button>
                <button>Waist</button>
                <button>Legs</button>
                <button>Talisman</button>

            </div>
        </div>
    )
}

export default DecorationDisplay;