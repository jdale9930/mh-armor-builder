import {react, useState} from "react"
import {connect} from "react-redux";

const TalismanMaker = (props) =>{

}

function mapStateToProps(state){
    return{
        currentUser: state.user
    }
}

const mapDispatchToProps ={
}
export default connect(mapStateToProps, mapDispatchToProps)(TalismanMaker);
