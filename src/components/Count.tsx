// @flow 
import * as React from 'react';
import {useEffect, useState} from "react";
import s from './Count.module.css'
import {Setting} from "./Setting";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper'
import {CountMain} from "./CountMain";

export type CounterStateType = {
    count: number
    maxValue: number
    startValue: number
    error: string
    // reachedMaxLimit: boolean
    disableInc: boolean
    disableDelete: boolean
}
export const Count = () => {

    const getInitialState = () => {
        const storage = localStorage.getItem('counter')
        if (storage) {
            return JSON.parse(storage)
        }
        return {
            count: 0,
            maxValue: 5,
            startValue: 0,
            error: '',
            // reachedMaxLimit: false,
            disableInc: false,
            disableDelete: true
        }
    }

    //
    const [counterState, setCounterState] = useState<CounterStateType>(getInitialState)
    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counterState))
    }, [counterState])

    return (
        <div className={s.counterWrapper}>
            <Setting counterState={counterState} setCounterState={setCounterState}/>
            <CountMain counterState={counterState} setCounterState={setCounterState}/>
        </div>

    );
};











    // const maxValue = 5
    // let minValue = 0
//     const [countStart, setStartCount] = useState<number>(0);
//     const [countMaxValue, setCountMax] = useState<number>(5);
//     const [error, setError] = useState<string | null>(null);
//
//
//     const clickHandler = () => {
//         if (countStart < countMaxValue) {
//             setStartCount(countStart + 1);
//         }
//         if (countStart + 1 === countMaxValue) {
//             setError(' ')
//         }
//     }
//     // const countMax = countMaxValue===maxValue;
//     // const countMin = countStart===minValue;
//     const addNumber = (valueMax: number, valueStart: number) => {
//         const start = valueStart
//         const max = valueMax
//         setStartCount(start)
//         setCountMax(max)
//     }
//
//    const clickResetHandler= ()=>{
//
//         setError(null)
//     }
//     const incDisabled = countStart >= countMaxValue
//     return (
//         <div className={s.countWrapper}>
//             <Paper elevation={5}>
//                 <Setting addNumber={addNumber}/>
//             </Paper>
//             <Paper elevation={5}>
//                 <div className={s.counter}>
//                     <div className={s.fieldCounter}>
//                         <span className={error ? s.error : s.meaning}>{countStart}  </span>
//                         {error&&<span>{error}</span>}
//                     </div>
//                     <div className={s.buttonWrapper}>
//                         <Button variant="contained" onClick={clickHandler} endIcon={<SendIcon/>} disabled={incDisabled}>
//                             inc
//                         </Button>
//                         <Button variant="outlined" onClick={clickResetHandler} startIcon={<DeleteIcon/>}>
//                             Delete
//                         </Button>
//                     </div>
//                 </div>
//             </Paper>
//         </div>)
// }
