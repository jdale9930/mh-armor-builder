import {React, useState} from "react"
import "./armorDisplay.css"

const ArmorDisplay = (props) => {
    return(
        <div>
            <div>
                <img src={"/images/" + props.type}></img>
            </div>
        </div>
    )
}