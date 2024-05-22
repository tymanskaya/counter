// @flow
import * as React from 'react';
import {Dispatch, SetStateAction, useState} from "react";
import s from './Count.module.css'
import {Setting} from "./Setting";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper'
import {CounterStateType} from "./Count";

type CounterMainPropsType = {
    counterState: CounterStateType
    setCounterState: Dispatch<SetStateAction<CounterStateType>>
}
export const CountMain = ({counterState,setCounterState }:CounterMainPropsType) => {
    const [error, setError] = useState<null|string>(null)
    const onClickHandler=()=>{
        setCounterState({...counterState, count: counterState.count + 1})
        if (counterState.count+1===counterState.maxValue){
            setError(' ')
        }


    }

    const onClickDeleteHandler=()=>{
        setCounterState({...counterState, count: counterState.startValue})
        setError(null)
    }
    const desabledIncHandler=counterState.count===counterState.maxValue
    const desableDelete=counterState.count===counterState.startValue

    return (
        <div className={s.countWrapper}>
            <Paper elevation={5}>
                <div className={s.counter}>
                    <div className={s.fieldCounter}>
                        {counterState.error
                            ? <div className={s.errorText}>{counterState.error}</div>
                            : <div className={error ? s.error : ''}>{counterState.count}</div>}

                    </div>
                    <div className={s.buttonWrapper}>
                        <Button variant="contained" onClick={onClickHandler} endIcon={<SendIcon/>} disabled={desabledIncHandler}>
                            inc
                        </Button>
                        <Button variant="outlined" onClick={onClickDeleteHandler} startIcon={<DeleteIcon/>} disabled={desableDelete}>
                            Delete
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    );
};


