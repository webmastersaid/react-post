import React from "react";
import classes from './DefaultInput.module.css'

export default React.forwardRef(function DefaultInput(props, ref) {
    return <input ref={ref} className={classes.input} {...props} />
})