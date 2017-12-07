import React, { Component } from 'react';
import {connect} from 'react-redux';
import MyWork from '../components/myWork'
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // dispatch1: () => {
        //     dispatch(actionCreator)
        // }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyWork)