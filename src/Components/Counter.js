import React, {Component} from 'react'
import { connect } from 'react-redux'


function reducer() {
    return (
        <div>
            <button onClick={() => { props.dispatch({ type: 'increment' })}}>+1</button>
            <button onClick={() => { props.dispatch({ type: 'increment_n', payload: 5 })}}>+1</button>
            <span></span>
            <buttononClick={() => { props.dispatch({ type: 'decrement' })}}>-1</buttononClick=>
        </div>
    )
}

const mapStateToProps = state=> ({
    count: state.count
})



export default connect(mapStateToProps)(Counter)_
