import React, { useContext } from 'react';
import AppContext from '../app-context';
import CustomDatePicker from './customdatepicker'

const Form = () => {

    const {onClearBtnClick, state, onCalculateAgeBtnClick} = useContext(AppContext);
    return (
        <section className="form-container">
            <div className="form-title">
                <h1>Age Calculator</h1>
            </div>

            <div className="form-group">
                <CustomDatePicker
                    name="dateOfBirth"
                    label="Date of Birth"
                />
                <CustomDatePicker
                    name="tillDate"
                    label="Till Date"
                />

                <div className="btn-group">
                    <button disabled={!state?.dateOfBirth || !state?.tillDate} onClick={onCalculateAgeBtnClick}>Calculate Age</button>
                    <button disabled={!state?.dateOfBirth && !state?.tillDate} onClick={onClearBtnClick}>Clear</button>
                </div>
            </div>
        </section>
    )
}

export default Form;
