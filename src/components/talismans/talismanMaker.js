import {react, useState} from "react"
import {connect} from "react-redux";

const TalismanMaker = (props) =>{

}

function mapStateToProps(state){
    return{
    }
}

const mapDispatchToProps ={
    currentUser = state.user
}
export default connect(mapStateToProps, mapDispatchToProps)(TalismanMaker);
