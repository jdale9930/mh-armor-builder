import {react, useState} from "react"
import {connect} from "react-redux";

const MyTalismans = (props) =>{

}

function mapStateToProps(state){
    return{
    }
}

const mapDispatchToProps ={
    currentUser = state.user
}
export default connect(mapStateToProps, mapDispatchToProps)(MyTalismans);