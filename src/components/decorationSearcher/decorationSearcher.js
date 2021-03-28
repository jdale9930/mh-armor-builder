import {React, useState} from "react"
import "./decorationSearcher.css"
import axios from "axios"
import DecorationDisplay from "../decorationDisplay/decorationDisplay"

const DecorationSearcher = () => {
    const [name, setName] = useState("")
    const [skill, setSkill] = useState("")
    const [searchResults, setSearchResults] = useState([])
    
    async function searchDecoration(){
            let results = await axios.get(`/decoration/search?name=${name}&skill=${skill}`)
            //console.log(results)
            setSearchResults(results.data.data)
    }

    return(
        <div>
            <div className = "searchBox">
                <div>
                <div className = "row">
                    <div className = "searchSpacer">Search by Name:</div>
                    <input type = "text" value = {name}
                    onChange = {(evt)=>{setName(evt.target.value)}}></input>
                </div>

                <div className = "row">
                    <div className = "searchSpacer">Search by Skill: </div>
                    <input type = "text" value = {skill}
                    onChange = {(evt)=>{setSkill(evt.target.value)}}></input>
                </div>
                </div>
                <button className = "searchButton" onClick = {()=>{searchDecoration()}}>Search</button>
            </div>
            <div className = "SearchDisplay">
                {searchResults.length > 0 && 
                searchResults.map((v)=>
                <DecorationDisplay
                key = {v.decoration_id}
                none = {false}
                name = {v.name}
                skill1 = {v.skill1}
                skill2 = {v.skill2}
                slots = {v.slots}
                />)}
            </div>
        </div>
    )
}

export default DecorationSearcher