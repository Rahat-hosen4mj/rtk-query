import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByNumber, reset } from './counterSlice';

const CounterView = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => (state.counter.count))
    return (
        <div>
            <h2>Counter App</h2>
            <h2>Count : {count}</h2>
            <button onClick={() => {dispatch(increment())}}>Incremnet</button>
            <button onClick={() => {dispatch(reset())}}>Reset</button>
            <button onClick={() => {dispatch(decrement())}}>Decremnet</button>
            <button onClick={() => {dispatch(incrementByNumber(5))}}>Incremnet 5</button>
        </div>
    );
};

export default CounterView;