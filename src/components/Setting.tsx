import * as React from "react";
import s from './Count.module.css'
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import SendIcon from "@mui/icons-material/Send";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";
import {CounterStateType} from "./Count";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


type SettingPropsType = {
    counterState: CounterStateType
    setCounterState: Dispatch<SetStateAction<CounterStateType>>
};

export const Setting = ({counterState, setCounterState}: SettingPropsType) => {

    const [numberMaxTitle, setNumberMaxTitle] = useState(counterState.maxValue);
    const [numberStartTitle, setNumberStartTitle] = useState(counterState.startValue);

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setNumberMaxTitle(e.currentTarget.valueAsNumber)
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        setNumberStartTitle(e.currentTarget.valueAsNumber)
        if(e.currentTarget.valueAsNumber<0 || e.currentTarget.valueAsNumber >= numberMaxTitle){
            setCounterState({...counterState, error: 'Uncorrected value'})
        } else {
            setCounterState({...counterState, error:''})
        }
    }
    const onClickAddNumberkHandler = () => {
        setCounterState({...counterState, count: numberStartTitle, startValue: numberStartTitle, maxValue: numberMaxTitle})
    }
    const setDisabled = numberStartTitle < 0 || numberStartTitle >= numberMaxTitle

    return (
        <div className={s.countWrapper}>
            <Paper elevation={5}>
                <div className={s.counter}>
                    <div className={s.fieldCounter}>
                        <div className={s.settingField}>
                            <div className={s.input}>
                                <span>max value: </span>
                                <TextField
                                    id="outlined-number"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={numberMaxTitle}
                                    onChange={onChangeMax}
                                />
                            </div>
                            <div className={s.input}>
                                <span>start value: </span>
                                <TextField
                                    id="outlined-number"

                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={numberStartTitle}
                                    onChange={onChangeStart}
                                    error={numberStartTitle<0}


                                />
                            </div>
                        </div>
                    </div>
                    <div className={s.buttonWrapper}>
                        <Button variant="contained" onClick={onClickAddNumberkHandler} endIcon={<SendIcon/>}
                                disabled={setDisabled}>
                            set
                        </Button>
                    </div>


                </div>
            </Paper>
        </div>
    );
};