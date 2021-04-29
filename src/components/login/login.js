import {react, useState} from "react"
import "./login.css"
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {login, logout} from "../../Redux/Actions"
import axios from "axios"

const Login = (props) => {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[error, setError] = useState("")

    async function login(data){
        setError("")
        console.log(data)
        try{
            let response = await axios.post("/user/login", data)
            if(response.data.success === true){
                props.login(response.data.data.username, response.data.data.user_id)
                props.history.push("/armorSetBuilder");

            }
            else{setError(response.error)}
        }
        catch(err){
            setError("Something went wrong!")
            console.log(error)
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
                <input type = "text" value = {password} onChange = {(evt)=>{setPassword(evt.target.value)}}></input>
            </div>
            <div>{error}</div>
            <button onClick ={()=>{login({username, password})}}>Login</button>
            <div>
                Don't have an account? <Link to = "/signup">Sign up here!</Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);