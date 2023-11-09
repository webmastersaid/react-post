import React from "react";
import classes from './DefaultSelect.module.css'

export default function DefaultSelect({ options, defaulrOption, value, onChange }) {
    return (
        <select className={classes.select} value={value} onChange={e=>onChange(e.target.value)}>
            <option disabled value="">{defaulrOption}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}