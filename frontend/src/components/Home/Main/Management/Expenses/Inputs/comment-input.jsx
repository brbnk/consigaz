import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
      width: '100%'
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
}));

function CommentInput({ expenseCommentHandler }) { 
    const classes = useStyles()
    const [cards, id, setter] = expenseCommentHandler

    const handleChange = e => { 
        setter(oldValues => ({ 
            ...oldValues,
            [id]: {...oldValues[id], comments: event.target.value }
        }))
    }

    return (
        <TextField
            id="comment"
            label="Comentário"
            className={classes.textField}
            value={cards[id]['comments']}
            onChange={handleChange}
            margin="normal"
        />
    )
}

export default CommentInput