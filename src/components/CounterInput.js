import React from 'react'
import {useDispatch} from 'react-redux'
import {incremetAction, decremetAction} from '../redux/Actions'

const CounterInput = () => {
 const dispatch = useDispatch()
    return (
        <div className='buttons'>
            <div onClick={()=>dispatch(incremetAction())} >+</div>
            <div onClick={()=>dispatch(decremetAction())} >-</div>
        </div>
 
)
}

export default CounterInput
