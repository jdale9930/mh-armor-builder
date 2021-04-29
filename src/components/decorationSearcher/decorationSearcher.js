import {React, useState} from "react"
import "./decorationSearcher.css"
import axios from "axios"
import DecorationDisplay from "../decorationDisplay/decorationDisplay"
import skills from "../resources/skills"


const DecorationSearcher = () => {
    const [name, setName] = useState("")
    const [skill, setSkill] = useState("")
    const [searchResults, setSearchResults] = useState([])
    
    async function searchDecoration(){
            let results = await axios.get(`/decoration/search?name=${name}&skill=${skill}`)
            setSearchResults(results.data.data)
    }

    return(
        <div>
            <div className = "decoSearchBoxDisplay">
                <div>
                    <div>Decoration Name:</div>
                    <input type = "text" value = {name}
                    onChange = {(evt)=>{setName(evt.target.value)}}></input>
                    </div>
                <div>
                    <div>Skill:</div>
                    <select value = {skill} onChange = {(evt)=>{setSkill(evt.target.value)}}>
                        <option value = ""></option>
                        {skills.map((v)=><option value = {v} key = {v.name}>{v}</option>)}
                    </select>
                
                </div>
                <button style = {{marginLeft: "5px", width: "180px"}}onClick = {()=>{searchDecoration()}}>Search</button>
            </div>
            <div className = "SearchDecoDisplay">
                {searchResults.length > 0 && 
                searchResults.map((v)=>
                <DecorationDisplay
                key = {v.decoration_id}
                none = {false}
                name = {v.name}
                skill1 = {v.skill1}
                skill1Value = {v.skill1Value}
                slot = {v.slot}
                />)}
            </div>
        </div>
    )
}

export default DecorationSearcher