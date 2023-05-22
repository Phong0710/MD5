import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;


    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>

                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>

            </div>
            <div className={styles.row}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="What needs to be done?"
                           aria-label="Username"
                           aria-describedby="basic-addon1" onChange={(e) => setIncrementAmount(e.target.value)}/>
                </div>
                <span className={styles.value}>{count}</span>

                {/*<input*/}
                {/*  className={styles.textbox}*/}
                {/*  aria-label="Set increment amount"*/}
                {/*  value={incrementAmount}*/}
                {/*  onChange={(e) => setIncrementAmount(e.target.value)}*/}
                {/*/>*/}
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                    Add Async
                </button>
            </div>

            <div className="input-group">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" value=""
                           aria-label="Radio button for following text input"/>
                </div>
                <input type="text" className="form-control" aria-label="Text input with radio button" value={count} onChange={event.target.value} />

            </div>
        </div>
    );
}
