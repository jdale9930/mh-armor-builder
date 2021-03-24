import {React, useState} from "react"
import "./armorDisplay.css"

const ArmorDisplay = (props) => {
    return(
        <div>
            <div>
                <img src={"/images/" + props.type + ".png"}></img>
                {props.name}
            </div>
        </div>
    )
}

export default ArmorDisplay;