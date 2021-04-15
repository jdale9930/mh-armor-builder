import {react, useState} from "react"
import {connect} from "react-redux";
import TalismanMaker from "./talismanMaker"
import TalismanDisplay from "./talismanDisplay"

const MyTalismans = (props) =>{
    return(
        <>
            <TalismanDisplay
            name = "example"
            rarity = "4"
            skill1 = "Attack Boost"
            skill1Value = "1"
            skill2 = "Constitution"
            skill2Value = "2"
            slot1 = "2"
            slot2 = "1"
            slot3 = "0"
            />
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
export default connect(mapStateToProps, mapDispatchToProps)(MyTalismans);