import React, { useState } from 'react'
import { Typography, InputBase } from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        marginLeft: theme.spacing(1),
        display: 'flex'
    },
    editTableTitle: {
        flexGrow: 1
    },
    input: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        margin: theme.spacing(1),
        '&:focus': {
            background: '#ddd',
        },
    },

}))

export default function Title() {
    const [open, setOpen] = useState(false);
    const classes = useStyle();
    return (
        <div>
            {open ?
                (<div>
                    <InputBase value="Todo"
                        inputProps={{
                            className: classes.input
                        }}
                        fullWidth
                        onBlur={() => setOpen(!open)}
                    />
                </div>) :
                (<div className={classes.editableTitleContainer}>
                    <Typography
                        className={classes.editTableTitle}
                        onClick={() => setOpen(!open)}
                        className={classes.editTableTitle}
                    >
                        Todo
                    </Typography>
                    <MoreHoriz />
                </div>)}
        </div>
    )
}