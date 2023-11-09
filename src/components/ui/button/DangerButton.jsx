import React from "react";
import classes from './DangerButton.module.css'

export default function DangerButton({children, ...props}) {
    return <button className={classes.btn} {...props}>{children}</button>
}
