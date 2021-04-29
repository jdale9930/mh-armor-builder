import {react, useState} from "react"
import "./login.css"
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {login, logout} from "../../Redux/Actions"
import axios from "axios"
import {useHistory} from "react-router-dom"

const Signup = (props) => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[error, setError] = useState("")
    let history = useHistory()

    async function signup(data){
        setError("")
        try{
            let response = await axios.post("/user/signup", data)
            if(response.data.success === true){
                props.login(response.data.data.username, response.data.data.user_id);
                props.history.push("/armorSetBuilder");
            }
            else{setError(response.data.error)}
        }
        catch(err){
            setError("Something went wrong!")
        }
    }
    return(
        <>
        <div className = "loginRoot">
            <div className = "loginTitle">Monster Hunter Rise Armor Set Builder</div>
            <div>Login to be able to create and upload your own armor sets,
                as well as view others made by your fellow players!
            </div>
            <div>
                Username: 
                <input type = "text" value = {username} onChange = {(evt)=>{setUsername(evt.target.value)}}></input>
            </div>
            <div>
                Password: 
                <input type = "password" value = {password} onChange = {(evt)=>{setPassword(evt.target.value)}}></input>
            </div>
            <div>{error}</div>
            <button onClick ={()=>{signup({username, password})}}>Signup</button>
            <div>
                Already have an account? <Link to = "/login">Login here!</Link>
            </div>

        </div>
        </>
    )
}

function mapStateToProps(state){
    return{
    }
}

const mapDispatchToProps ={
    login,
    logout
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);