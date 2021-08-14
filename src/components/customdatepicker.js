import React, { useContext } from 'react';
import DatePicker from 'react-date-picker';
import AppContext from '../app-context';
import "./customdatepicker.css";


const CustomDatePicker = ({label, name}) => {

    const { state, setState} = useContext(AppContext);
    return (
        <div className="pt-20">
            <label htmlFor={name}>{label}</label>
            <DatePicker
                name={name}
                id={name}
                yearPlaceholder="YYYY"
                monthPlaceholder="M"
                dayPlaceholder="DD"
                format="dd/M/yyyy"
                onChange={(value) => setState({...state, [name]: value})}
                value={state[name]}
            />
        </div>
    )
}

export default CustomDatePicker;
