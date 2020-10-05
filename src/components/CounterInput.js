import React from 'react'
import useDispatch from 'react-redux'

 const dispatch = useDispatch()

const CounterInput = () => {
    return (
        <div>
            <div onClick={()=>dispatch({type:'INCREMENT'})} >+</div>
            <div onClick={()=>dispatch({type:'DECREMENT'})} >-</div>
        </div>
 
)
}

export default CounterInput
